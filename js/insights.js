Date.prototype.monthNames = ["January", "February", "March","April", "May", "June","July", "August", "September", "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};

(function($) {
    $.fn.insights = function(dataSource) {

        function getData(dataSource) {
            return $.ajax({
                url: dataSource,
                dataType: "JSONP"
            });
        }

        function expandGrowl(growl) {
            growl.find(".insight-full").stop().fadeIn();
        }

        function collapseGrowl(growl) {
            growl.find(".insight-full").stop().hide();

        }

        function getInsights() {

            getData(dataSource).success(function(data) {
                var insightsDisplayed = 0;
                var weeks = 1;
                var amountOfInsights = data.insights.length;
                var modal = $('#insight_container');
                if (data.insights.length > 0 && data.insights[0].insight_text !== "There are no insights at this time.") {
                    var dropdown = ""+
                    "<a class='btn dropdown-toggle btn-inverse' data-toggle='dropdown' href='#' data-original-title='' title=''>"+
                    "Insight History"+
                    "<span class='caret'></span>"+
                    "</a>"+
                    "<div class='dropdown-menu'>";

                    $.each(data.insights, function(i, insight) {
                        var dateRange = Date.today().add({ days: -(weeks * 7) });
                        var insightDate = new Date(insight.date_created);

                        /* Only display insight if it meets the date range */
                        if (insightDate.compareTo(dateRange) >= 0) {
                            dropdown +=
                                "<p class='insight'>" +
                                    "<span class='date'>" + insightDate.toString("MMMM d, yyyy") + "</span>" +
                                    insight.insight_text +
                                    "</p>";
                            insightsDisplayed++;
                        }
                    });

                    if (!insightsDisplayed) {
                        dropdown +=
                            "<p class='insight'>There are no insights for last week.</p>";
                    }

                    dropdown +=
                        "<button id ='btn-see-more' class='btn insights-history-see-more'>See more</button>" +
                            "</div>" +
                            "</div></div>";

                    $('#insight_container').html(dropdown);

                    if (!modal.find(".insights-toggle").length) {
                        var content = modal.find(".modalcontent");
                        $(dropdown).insertBefore(content);
                    }

                    if (modal.find(".insights-toggle").find(".insight").length === amountOfInsights) {
                        modal.find(".insights-history-see-more").remove();
                    }

                    /* Display latest insight in Growl window */
                    var latestInsight = data.insights[0];
                    var latestInsightDate = new Date(latestInsight.date_created);
                    var insightSummary = latestInsight.insight_text.substr(0, 86);
                    var insightFull = latestInsight.insight_text.substr(86);

                    var growlOutput =
                        "" +
                            "<a href='#' id='latest_insights_toggle_view'>X</a>" +
                            "<strong>Latest Insight</strong>" +
                            "<p class='latest_insights_date'>" + latestInsightDate.toString("MMMM d, yyyy")+"</p>" +
                            "<p class='latest_insights_content'>" + insightSummary;

                    /* Use ellipsis if the insight is long */
                     if (latestInsight.insight_text.length > 87) {
                     growlOutput +=
                     "<span class='ellipsis'>...</span><span class='insight-full'>" + insightFull + "</span>";
                     }

                    modal.find('button#btn-see-more').on("click", function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var newInsights = "";
                        weeks++;

                        $.each(data.insights, function(i, insight) {
                            var lowDateRange = Date.today().add({ days: -(weeks * 7) });
                            var highDateRange = Date.today().add({ days: -((weeks-1) * 7) });
                            var insightDate = new Date(insight.date_created);

                            if (insightDate.compareTo(lowDateRange) >= 0 && insightDate.compareTo(highDateRange) <=0) {
                                newInsights +=
                                    "<p class='insight'>" +
                                        "<span class='date'>" + insightDate.toString("MMMM d, yyyy") + "</span>" +
                                        insight.insight_text +
                                        "</p>";
                            }

                        });

                        $(newInsights).insertBefore(this);

                        if (modal.find(".insights-toggle").find(".insight").length === amountOfInsights) {
                            modal.find("button#btn-see-more").remove();
                        }

                    });

                    growlOutput += "</p>";
                    $('#latest_insights_content_holder').html(growlOutput);
                    /*modal.find(".modalcontent").append(growlOutput);*/

                } // end if insights

                var lastInsightXbutton = $('#latest_insights_toggle_view');
                var lastIsightDiv = $('#latest_insights_content_holder');
                var originalHeight = lastIsightDiv.height();

                lastInsightXbutton.on("click", function(e) {
                    if($('#latest_insights_content_holder').width() != 10 ){
                        lastInsightXbutton.removeClass('close_toggle');
                        lastInsightXbutton.addClass('open_toggle');
                        lastIsightDiv.animate({
                            padding: "8px 7px 8px 15px",
                            width: 10,
                            height: 10
                        }, function() {
                            lastIsightDiv.css({height: "auto"});
                        }).children("p, strong").hide();
                    }
                    else{
                        lastInsightXbutton.removeClass('open_toggle');
                        lastInsightXbutton.addClass('close_toggle');
                        lastIsightDiv.animate({
                            width: 260,
                            height: originalHeight
                        }, function() {
                            lastIsightDiv.css({height: "auto"});

                        }).children("p, strong").show();
                    }
                });

                lastIsightDiv.on("mouseenter", function() {
                    if (!$(this).hasClass("ui-draggable-dragging")) {
                        expandGrowl(lastIsightDiv);
                    }
                });

                lastIsightDiv.on("mouseleave", function() {
                    if (!$(this).hasClass("ui-draggable-dragging")) {
                        collapseGrowl(lastIsightDiv);
                    }
                });
            });
        }
        getInsights();
    };
})(jQuery);
