/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {

    ps_graphDefinitions.jsonData = "";

    /*
     * Builds the Keyword Trending Widget
     */
    ps_graphDefinitions.buildChart = function (sElementName) {
        var objChart;
        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);

        objChart.setGallery(cfx.Gallery.Bar);
        var data = objChart.getData();

        data.setSeries(3);
        data.setPoints(10);
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        var data = ps_graphDefinitions.jsonData;
        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName.div_location);
        objChart.create(divHolder);
    }

    /*
     * Builds the Metric Ticker Widget
     */
    ps_graphDefinitions.metricTicker = function (responseSentiment, responseConversation) {
        var data = [];

        data.push({
            category: "Positive Sentiment",
            thisWeek: responseSentiment.data[0].positive.end.value,
            lastWeek: responseSentiment.data[0].positive.start.value,
            wowChange: responseSentiment.data[0].positive.end.value_velocity,
            wowChangePercentage: responseSentiment.data[0].positive.end.value_velocity_as_percent
        }, {
            category: "Negative Sentiment",
            thisWeek: responseSentiment.data[0].negative.end.value,
            lastWeek: responseSentiment.data[0].negative.start.value,
            wowChange: responseSentiment.data[0].negative.end.value_velocity,
            wowChangePercentage: responseSentiment.data[0].negative.end.value_velocity_as_percent
        }, {
            category: "Neutral Sentiment",
            thisWeek: responseSentiment.data[0].neutral.end.value,
            lastWeek: responseSentiment.data[0].neutral.start.value,
            wowChange: responseSentiment.data[0].neutral.end.value_velocity,
            wowChangePercentage: responseSentiment.data[0].neutral.end.value_velocity_as_percent
        });



        var conversationVolume = [];
        //alert(responseConversation.data.length);

        for (var i = 0; i < responseConversation.data.length; i++) {
            var item = responseConversation.data[i];

            if (item.id === "verizon") {
                conversationVolume.push(item);
            }
        }



        // Transform the data
        data.push({
            category: "Conversation Volume",
            thisWeek: conversationVolume[1].value,
            lastWeek: conversationVolume[0].value,
            wowChange: conversationVolume[1].value_velocity,
            wowChangePercentage: conversationVolume[1].value_velocity_as_percent
        });




        var ticker = $(".metric-ticker").find(".widget");
        var output = "<ul>";

        for (var i = 0; i < data.length; i++) {
            var item = data[i];

            if (i == 0) {
                var firstChild = "class='metric-active'";
                var categoryActive = "class='category-active'";
            } else {
                var firstChild = "";
                var categoryActive = "";
            }

            output += "<li " + firstChild + " data-original='true'>" +
                "<h2 " + categoryActive + "><span>" + item.category + "</span></h2><span class='arrow'></span>" +
                "<span class='metric first-child'>This Week: " + (item.thisWeek.addCommas() || "N/A") + "</span>" +
                "<span class='metric'>Last Week: " + (item.lastWeek.addCommas() || "N/A") + "</span>" +
                "<span class='metric'>WOW Change: " + (item.wowChange.addCommas() || "N/A") + " (" + (item.wowChangePercentage.toPercent() || "N/A") + "%)";

            if (item.wowChange > 0) {
                output += "<span class='wow-change positive'></span>";
            } else if (item.wowChange < 0) {
                output += "<span class='wow-change negative'></span>";
            }

            output +=
                "</span>" +
                "</li>";
        }

        output += "</ul>" +
            "<div class='controls'>" +
            "<span class='control' data-direction='back'>&laquo;</span>" +
            "<span class='control mid' data-direction='play'> <img class='play' src='images/pause.png' height='18' width='18'> </span>" +
            "<span class='control' data-direction='forward'>&raquo;</span>" +
            "</div>";

        ticker.append(output).find("ul").fadeIn(800);

        $(".metric-ticker").find("li[data-original='true']").each(function () {
            $(this).clone()
                .removeAttr("style")
                .removeAttr("data-original")
                .removeClass("metric-active")
                .attr("data-cloned", true)
                .appendTo(".metric-ticker ul")
                .find("h2")
                .removeClass("category-active");
        });

        // Automatically go through ticker items
        var timer = setInterval(function () {
            ps_utilities.go();
        }, 10000);

        // Manually go through ticker items
        $(".metric-ticker").find(".control").on("click", function () {

            // Pause the ticker
            if ($(this).data("direction") == 'play') {

                clearTimeout(timer);
                $(this).data('direction', 'pause');
                $('img.play').attr('src', 'images/play.png');

                // Play the ticker (if paused)
            } else if ($(this).data("direction") == 'pause') {

                $(this).data('direction', 'play');
                $('img.play').attr('src', 'images/pause.png');

                ps_utilities.go();

                timer = setInterval(function () {
                    ps_utilities.go();
                }, 10000);

                // If arrows are clicked, move the ticker in said direction
            } else {

                ps_utilities.go($(this).data("direction"));
                clearTimeout(timer);

                $('img.play').attr('src', 'images/pause.png');
                $('.control.mid').data('direction', 'play');

                timer = setInterval(function () {
                    ps_utilities.go();
                }, 10000);
            }

        });

    } // end metricTicker

    /*
     * Builds the Pie Chart Widget - Process Data
     */
    ps_graphDefinitions.processDataAllPie = function (data) {
        var datasource = widget_pie.modal.source
        if (datasource === "") {
            var process = [];
            data.forEach(function (val) {
                if (_.where(process, {
                    id: val.id
                }).length === 0) {
                    process.push({
                        display: val.display,
                        id: val.id,
                        value: ps_utilities.sumValues(_.where(data, {
                            id: val.id
                        }))
                    });
                }
            });
            return process;
        } else {
            var nData = _.where(data, {
                id_2: datasource
            });
            var values = new Array();
            for (var i = 0; i < nData.length; i++) {
                values.push({
                    display: nData[i].display,
                    value: nData[i].value
                });
            }
            return values;
        }
    }
    //end share of voice


    /*
     * Builds the Pie Chart Widget - Modal View
     */
    ps_graphDefinitions.processDataSourcePie = function (source, data) {
        //Process all data equals to source
        //Atribute ID_2
        var nData = _.where(data, {
            id_2: source
        });
        var values = new Array();

        for (var i = 0; i < nData.length; i++) {
            values.push({
                display: nData[i].display,
                value: nData[i].value
            });
        }
        return values;
    }

    /*
     * Builds the Pie Chart Widget
     */
    ps_graphDefinitions.buildPieChart = function (sElementName) {

        var data = ps_graphDefinitions.jsonData.data;
        var nData = ps_graphDefinitions.processDataAllPie(data);


        var objPieChart = new cfx.Chart();
        objPieChart.getAnimations().getLoad().setEnabled(true);

        objPieChart.setGallery(cfx.Gallery.Pie);
        objPieChart.getDataGrid().setBorder(cfx.DockBorder.Internal);
        objPieChart.setGallery(cfx.Gallery.Pie);
        objPieChart.getAllSeries().getPointLabels().setVisible(true);
        objPieChart.getLegendBox().setDock(cfx.DockArea.Right);
        objPieChart.getLegendBox().setVisible(false);
        objPieChart.getAxisY().getDataFormat().setDecimals(2);

        nData = _.sortBy(nData, function (val) {
            return val.display;
        })
        objPieChart.setDataSource(nData);
        var divHolder = document.getElementById(sElementName.div_location);
        objPieChart.create(divHolder);
        ps_utilities.RemoveWidgetGradient();

    }

    /*
     * Builds the Bar Chart Widget
     */
    ps_graphDefinitions.barChartReload = function (attr) {
        var txt = $("#menuBarChart li a[data-attr='" + attr + "']").text();
        var prop = $("#menuBarChart li a[data-attr='" + attr + "']").attr('data-prop');
        var attr = $("#menuBarChart li a[data-attr='" + attr + "']").attr('data-attr');
        var series = $("#menuBarChart li a[data-attr='" + attr + "']").attr('data-series');

        $('#dropdownMenuBarChart').html(txt + ' <span class="caret"></span>');
        $('#' + widget_volumeandsentiment.modal.div_location).html("Loading...");
        widget_volumeandsentiment.modal.dataURL = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/" + prop + "/competitors/" + attr + "/sentiment/" + series + "?period=week&limit=5";
        ps_utilities.loadData(widget_volumeandsentiment.modal);
    };

    ps_graphDefinitions.getCompetitors = function (url) {
        var competitors = {};
        $.ajax({
            type: 'GET',
            cache: true,
            url: url,
            dataType: 'json',
            json: 'json',
            async: false,
            success: function (dataResponse) {
                var dataR = dataResponse.data;
                if (dataR.length) {
                    $.each(dataR, function (index, value) {
                        if (!competitors[value.id]) {
                            competitors[value.id] = value.display;
                        }
                    });
                }
            },
            error: function () {
                console.log('Error making request');
            }
        });
        return competitors;
    };

    ps_graphDefinitions.buildBarChart = function (sElementName) {

        var objChart;

        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.setGallery(cfx.Gallery.Bar); // BAR Chart

        var data = objChart.getData();
        objChart.getGalleryAttributes().setTemplate("BarBasic");
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(sElementName.legend);

        var data = ps_graphDefinitions.jsonData.data;
        var dataSort = _.sortBy(data, function (val) {
            return val.display;
        });
        data = ps_utilities.processData(dataSort);

        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName.div_location);
        divHolder.innerHTML = "";

        if (sElementName.showMenuDropdown == undefined) {
            $("#volumeAndSentiment").append('<div class="timelabel">' + sElementName.timelabel + '</div>');
        } else {
            var URLsearch = widget_sentimentCompetitors.modal.dataURL;
            var comps = ps_graphDefinitions.getCompetitors(URLsearch);
            var prop = widget_volumeandsentiment.modal.dashboard;
            var init = $("#dropdownMenuBarChart").text();
            if (!init) {
                $("#insight_container").html('' +
                    '<button class="btn dropdown-toggle btn-inverse" id="dropdownMenuBarChart" data-toggle="dropdown">Verizon <span class="caret"></span></button>' +
                    '<ul id="menuBarChart" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuBarChart"></ul>' +
                    '');

                $.each(comps, function (k, v) {
                    $("ul[id='menuBarChart']").append('' +
                        '<li><a onClick="ps_graphDefinitions.barChartReload(this.dataset.attr);" data-prop="' + prop + '" data-attr="' + k + '" data-series="multitime">' + v + '</a></li>' +
                        '');
                });
            }
        }

        objChart.create(divHolder);

        var contentTemplate = '' +
            '<DataTemplate>' +
            '<DockPanel Orientation="Horizontal" Margin="3,0,3,0">' +
            '<TextBlock Text="{Binding Path=Macro %s:}" Margin="0,0,4,0"/>' +
            '<TextBlock Text="{Binding Path=Macro %v (%P%%)}" FontWeight="Bold" HorizontalAlignment="Right"/>' +
            '</DockPanel>' +
            '</DataTemplate>';

        objChart.getToolTips().setContentTemplate(contentTemplate);
        objChart.getToolTips().setAllSeries(false);

        ps_utilities.RemoveWidgetGradient();

        $(divHolder).mousemove(function (e) {
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('left', e.pageX - 75 - $(this).offset().left);
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('top', e.pageY - 80 - $(this).offset().top);
        });
    };

    ps_graphDefinitions.buildSentimentCompetitors = function (sElementName) {

        var objChart;

        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.setGallery(cfx.Gallery.Bar); // BAR Chart

        var data = objChart.getData();
        objChart.getGalleryAttributes().setTemplate("BarBasic");
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(sElementName.legend);

        var data = ps_graphDefinitions.jsonData.data;
        var dataSort = _.sortBy(data, function (val) {
            return val.display_2;
        });
        data = ps_utilities.dataSentimentCompetitors(dataSort);

        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName.div_location);
        divHolder.innerHTML = "";
        objChart.create(divHolder);

        var contentTemplate = '' +
            '<DataTemplate>' +
            '<DockPanel Orientation="Horizontal" Margin="3,0,3,0">' +
            '<TextBlock Text="{Binding Path=Macro %s:}" Margin="0,0,4,0"/>' +
            '<TextBlock Text="{Binding Path=Macro %v (%P%%)}" FontWeight="Bold" HorizontalAlignment="Right"/>' +
            '</DockPanel>' +
            '</DataTemplate>';

        objChart.getToolTips().setContentTemplate(contentTemplate);
        objChart.getToolTips().setAllSeries(false);

        if (sElementName.showVolumeAndSentimentMenu == undefined) {
            $("#sentimentCompetitors").append('<div class="timelabel">' + sElementName.timelabel + '</div>');
        }

        ps_utilities.RemoveWidgetGradient();

        $(divHolder).mousemove(function (e) {
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('left', e.pageX - 75 - $(this).offset().left);
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('top', e.pageY - 80 - $(this).offset().top);
        });
    };
    //end bar chart

    /*
     * Builds the Line Chart Widget
     */
    ps_graphDefinitions.buildLineChart = function (sElementName) {
        var objChart;

        objChart = new cfx.Chart();
        objChart.setGallery(sElementName.gallery);
        objChart.getGalleryAttributes().setTemplate(sElementName.template);
        objChart.getLegendBox().setVisible(sElementName.legend);
        objChart.getLegendBox().setWidth(100);
        objChart.getLegendBox().setHeight(100);
        objChart.getLegendBox().sizeToFit();
        objChart.getAxisX().setMinorStep(1);
        objChart.getAxisX().getGrids().getMinor().setVisible(true);
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.getToolTips().setContentTemplate(ps_utilities.getContentTemplateTooltip());
        objChart.getToolTips().setAllSeries(false);

        var dataSort = _.sortBy(sElementName.jsonData.data, function (val) {
            return val.display;
        });
        var data = ps_utilities.processData(dataSort);
        objChart.setDataSource(data);

        var divHolder = document.getElementById(sElementName.div_location);
        divHolder.innerHTML = '';
        objChart.create(divHolder);


        ps_utilities.RemoveWidgetGradient();
        ps_utilities.RemoveLogo();
        ps_utilities.AddTitle(sElementName.id_div, sElementName.title);
        ps_utilities.AddSubTitle(sElementName.id_div, sElementName.subtitle);
        ps_utilities.AddTooltip(sElementName.id_div, sElementName.tooltip);

        $(divHolder).mousemove(function (e) {
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('left', e.pageX - 60 - $(this).offset().left);
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('top', e.pageY - 195 - $(this).offset().top);
        });

    } //end line chart

    /*
     * Builds the Line Chart LinkedIn Followers
     */
    ps_graphDefinitions.buildLinkedinFollowers = function (sElementName) {
        var objChart;


        objChart = new cfx.Chart();
        objChart.setGallery(sElementName.gallery);
        objChart.getGalleryAttributes().setTemplate(sElementName.template);
        objChart.getLegendBox().setVisible(sElementName.legend);
        objChart.getDataGrid().setWidth(100);
        objChart.getDataGrid().setHeight(100);
        objChart.getLegendBox().sizeToFit();
        objChart.getAxisX().setMinorStep(1);
        objChart.getAxisX().getGrids().getMinor().setVisible(true);
        objChart.getAnimations().getLoad().setEnabled(true);

        var dataSort = sElementName.jsonData.data;

        var data = ps_utilities.processDataLinkedinFollowers(dataSort);
        objChart.getAxisY().setMin(dataSort[0].num_followers - 600);
        objChart.getAxisY().setMax(dataSort[dataSort.length - 1].num_followers + 400);
        objChart.getAxisY().setMinorStep(0);
        objChart.getAxisY().setStep(200);

        objChart.setDataSource(data);


        objChart.getToolTips().setContentTemplate(ps_utilities.getContentTemplateTooltip());

        var divHolder = document.getElementById(sElementName.div_location);
        divHolder.innerHTML = "";
        objChart.create(divHolder);


        ps_utilities.RemoveWidgetGradient();
        ps_utilities.RemoveLogo();
        ps_utilities.AddTitle(sElementName.id_div, sElementName.title);
        ps_utilities.AddSubTitle(sElementName.id_div, sElementName.subtitle);
        ps_utilities.AddTooltip(sElementName.id_div, sElementName.tooltip);


        $(divHolder).mousemove(function (e) {
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('left', e.pageX - 60 - $(this).offset().left);
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('top', e.pageY - 195 - $(this).offset().top);
        });

    } //end line chart

    /*
     * Builds the Line Chart LinkedIn Likes
     */
    ps_graphDefinitions.buildLinkedinLikes = function (sElementName) {
        var objChart;

        objChart = new cfx.Chart();
        objChart.setGallery(sElementName.gallery);
        objChart.getGalleryAttributes().setTemplate(sElementName.template);
        objChart.getLegendBox().setVisible(sElementName.legend);
        objChart.getDataGrid().setWidth(100);
        objChart.getDataGrid().setHeight(100);
        objChart.getLegendBox().sizeToFit();
        objChart.getAxisX().setMinorStep(1);
        objChart.getAxisX().getGrids().getMinor().setVisible(true);
        objChart.getAnimations().getLoad().setEnabled(true);

        var data = ps_utilities.processDataLinkedinLikes(sElementName.jsonData.data);

        objChart.setDataSource(data);

        objChart.getToolTips().setContentTemplate(ps_utilities.getContentTemplateTooltip());

        var divHolder = document.getElementById(sElementName.div_location);
        divHolder.innerHTML = '';
        objChart.create(divHolder);

        ps_utilities.RemoveWidgetGradient();
        ps_utilities.RemoveLogo();
        ps_utilities.AddTitle(sElementName.id_div, sElementName.title);
        ps_utilities.AddSubTitle(sElementName.id_div, sElementName.subtitle);
        ps_utilities.AddTooltip(sElementName.id_div, sElementName.tooltip);


        $(divHolder).mousemove(function (e) {
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('left', e.pageX - 60 - $(this).offset().left);
            $('#' + sElementName.div_location + ' #chartToolTip' + sElementName.div_location).css('top', e.pageY - 195 - $(this).offset().top);
        });

    } //end line chart

    ps_graphDefinitions.buildLinkedInRecommendations = function (sElementName) {
        $('#' + sElementName.div_location).html('<table id="linkedinRecommendations" class="table table-striped table-bordered table-fixed topTweets dataTable"><thead><tr><th>Service</th><th>Total</th><th>Last 7 Days</th></thead><tbody></tbody></table>');
        $("#" + sElementName.id + " .newrow").remove();
        var i = 1;

        $.each(sElementName.jsonData.data, function (j) {
            if (i > sElementName.limit) {
                return;
            }
            i++;
            var newrow = "<tr class='newrow'>" + "<td id='MediaTable-0-mediaTableCol-1' class='essential persist'>" + this.name + "</td>" + "<td id='MediaTable-0-mediaTableCol-2' class='optional hidden-phone' >" + this.lifetime_recommendations + "</td>" + "<td id='MediaTable-0-mediaTableCol-3' class='optional hidden-phone'>" + this.period_recommendations + "</td>" + "</tr>";
            $("#" + sElementName.id).append(newrow);
        });
        ps_utilities.AddTitle(sElementName.id_div, sElementName.title);
        ps_utilities.AddSubTitle(sElementName.id_div, sElementName.subtitle);
        ps_utilities.AddTooltip(sElementName.id_div, sElementName.tooltip);
    }

    ps_graphDefinitions.buildLinkedInRecommendationsModal = function (sElementName) {
        $('#' + sElementName.div_location).html('<table id="linkedinRecommendationsModal" class="table table-bordered"><thead><tr><th>Services</th><th>Total Recommendations</th><th>Recommendations in Last 7 Days</th></tr></thead>');
        $("#" + sElementName.id + " .newrow").remove();
        var i = 1;

        $.each(sElementName.jsonData.data, function (j) {
            if (i > sElementName.limit) {
                return;
            }
            i++;
            var newrow = "<tr class='newrow'>" + "<td id='MediaTable-0-mediaTableCol-1' class='essential persist'>" + this.name + "</td>" + "<td id='MediaTable-0-mediaTableCol-2' class='optional hidden-phone' >" + this.lifetime_recommendations + "</td>" + "<td id='MediaTable-0-mediaTableCol-3' class='optional hidden-phone'>" + this.period_recommendations + "</td>" + "</tr>";
            $("#" + sElementName.id).append(newrow);
        });
    }

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {
        //Code goes here
    }

    ps_graphDefinitions.buildTwitterStream = function (usersData, mentionData, sElementName) {
        ps_utilities.AddTitle(sElementName.id_div, sElementName.title);
        ps_utilities.AddSubTitle(sElementName.id_div, sElementName.subtitle);
        ps_utilities.AddTooltip(sElementName.id_div, sElementName.tooltip);
        ps_utilities.AddTwitterHeader(sElementName.id_div_header, sElementName.modal.news_header);
        ps_utilities.AddTwitterHeader(sElementName.id_div_header_admin, sElementName.modal.news_header_admin);
        ps_twitterUtils.buildWidget(usersData, mentionData);
        ps_twitterUtils.buildWidgetScroll();
        ps_twitterUtils.buildWidgetModal();
    }


    /*
     * Top Tweets
     */
    ps_graphDefinitions.topTweets = function (response) {
        ps_twitterUtils.topTweets(response);
    } // end topTweets



    /*
     * Builds the Keyword Trending Widget
     */
    ps_graphDefinitions.buildKeywordTrending = function (sElementName) {
        $('#klist').append("<ul class='keywordlist  klist-fe' id=" + sElementName.category + "></ul>");
        $("#" + sElementName.category).append("<li class='title'>" + sElementName.title + "</li>");

        $.each(ps_graphDefinitions.jsonData.data, function (i, v) {
            $("#" + sElementName.category).append("<li  tag=" + v.display + ">" + v.display + "<span>" + v.value + "</span>" + "</li>");
        });
    } // end buildKeywordTrending

}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));