/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {

    ps_graphDefinitions.jsonData = "";

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

        //UILayout.CreateTitle(objChart, "Volume & Sentiment");

        var data = ps_graphDefinitions.jsonData;

        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName.div_location);
        objChart.create(divHolder);

        // UILayout.RemoveWidgetGradient();
    }

    ps_graphDefinitions.buildPieChart = function (sElementName) {

    }

    ps_graphDefinitions.buildBarChart = function (sElementName) {

    }

    ps_graphDefinitions.buildLineChart = function (sElementName) {}

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {}

    ps_graphDefinitions.buildTwitterStream = function (sElementName) {
        var build, totalNumberOfTweet, totalNumberOfTweet_admin, rank, screen_name, status_text, reply_count, status_time_str, date, tweetStreamHtml, statusCount, userName, tweetData, divIndex, adminHtml;
        totalNumberOfTweet = 20;
        totalNumberOfTweet_admin = 15;
        
        build = {
            timeDifference: function (start) {
                var startDate, endDate, diff, hours, minutes;
                startDate = new Date(start);
                endDate = new Date();
                diff = endDate.getTime() - startDate.getTime();
                hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                minutes = Math.floor(diff / 1000 / 60);
                return (hours <= 9 ? "0" : "") + hours + "h" + (minutes <= 9 ? "0" : "") + minutes + "m";
            },
            addlinks: function (data) {
                data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
                    return '<a target="_blank" style="color:#08c;" href="' + url + '" >' + url + '</a>';
                });

                //Add link to @usernames used within tweets
                data = data.replace(/\B@([_a-z0-9]+)/ig, function (reply) {
                    return '<a target="_blank" href="http://twitter.com/' + reply.substring(1) + '" style="color:#08c;font-weight:lighter;" >' + reply.charAt(0) + reply.substring(1) + '</a>';
                });
                return data;
            },
            moveTweetForwordByOne: function () {
                if (parseInt(sessionStorage.presentTopTweetIndex) > 0) {
                    sessionStorage.presentTopTweetIndex = parseInt(sessionStorage.presentTopTweetIndex) - 1;
                    for (var index = 0; index < totalNumberOfTweet; index++) {
                        var top = parseInt($('div[index="' + index + '"]').css('top'));
                        top = top + 80;
                        $('div[index="' + index + '"]').animate({
                            "top": top + "px"
                        }, 500, function () {

                        });
                    }
                }
            },
            moveTweetBackByOne: function () {
                if (parseInt(sessionStorage.presentTopTweetIndex) < totalNumberOfTweet - 2) {
                    sessionStorage.presentTopTweetIndex = parseInt(sessionStorage.presentTopTweetIndex) + 1;
                    for (var index = 0; index < totalNumberOfTweet; index++) {
                        var top = parseInt($('div[index="' + index + '"]').css('top'));
                        top = top - 80;
                        $('div[index="' + index + '"]').animate({
                            "top": top + "px"
                        }, 500, function () {

                        });
                    }
                }
            },
            moveTweetBackByOne_admin: function () {
                if (parseInt(sessionStorage.presentTopTweetIndex_admin) > 0) {
                    sessionStorage.presentTopTweetIndex_admin = parseInt(sessionStorage.presentTopTweetIndex_admin) - 1;

                    for (var index = 0; index < totalNumberOfTweet_admin; index++) {
                        var top = parseInt($('div[index_admin="' + index + '"]').css('top'));
                        top = top + 80;
                        $('div[index_admin="' + index + '"]').animate({
                            "top": top + "px"
                        }, 500, function () {

                        });
                    }
                }
            }
        };

        date = new Date();
        tweetStreamHtml = "";
        statusCount = ps_graphDefinitions.jsonData.statuses.length;

        userName = ps_graphDefinitions.jsonData.tag_names;
        tweetData = ps_graphDefinitions.jsonData.statuses;

        divIndex = 0;
        adminHtml = "";

        for (i = 0; i < statusCount; i++) {
            //rank			= tweetData[i].rank;
            screen_name = tweetData[i].screen_name;
            status_text = tweetData[i].status_text;
            img_url = tweetData[i].img_url;
            tweetTime = tweetData[i].status_time_str;
            status_time_str = date.getDate(tweetData[i].status_time_str) + "/" + date.getMonth(tweetData[i].status_time_str) + "/" + date.getFullYear(tweetData[i].status_time_str);

            if (divIndex === 0) {
                sessionStorage.presentTopTweetIndex = 0;
                sessionStorage.presentTopTweetIndex_admin = 0;
            }

            tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + build.timeDifference(tweetTime) + '</div><div class="div_tweetText">' + build.addlinks(status_text) + '</div></div></div>';
            adminHtml += '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 75, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h1><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h1><div class="div_tweetTime">' + build.timeDifference(tweetTime) + '</div><div class="div_tweetText">' + build.addlinks(status_text) + '</div></div></div>';
            divIndex += 1;
        }
        $(".div_tweetsMain").html(tweetStreamHtml);

        $(".div_upperArrow").on('click', function () {
            if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") build.moveTweetForwordByOne();
        });

        $(".div_downArrow").on('click', function () {
            if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") build.moveTweetBackByOne();
        });

        var scrollTwitTimer = window.setInterval(function () {
            if ($(".div_tweetsMain").html() != "") {
                build.moveTweetBackByOne();
                build.moveTweetBackByOne_admin();
            }
        }, 10000);

        var getTweetDataTimer = window.setInterval(function () {
            ps_graphDefinitions.buildTwitterStream();
            ps_graphDefinitions.buildTwitterStreamMentions();
        }, 60000);

        $("#div_tweeterStream").on('click', function () {

            $("#div_tweeterStream").attr('isclicked', '1');

            $('#twitterStreamModal').on('shown', function () {
                if ($("#div_tweeterStream").attr('isclicked') == "1") {
                    $("#twitterStream_div_modal, #myModalLabel").empty();

                    //displaying the modal content
                    $("#twitterStream_div_modal").html("<div id='div_mentionTweet'>" + $("#div_tweeterStream .div_tweetsParent").html() + "</div>" + "<div id='div_verizonTweet'>" + $("#div_tweeterStream_admin .div_tweetsParent").html() + "</div>");

                    $(".modal-body div#div_upperArrow").click(function () {
                        if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") moveTweetForwordByOne();
                    });

                    $(".modal-body div#div_downArrow").click(function () {
                        if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") moveTweetBackByOne();
                    });
                    $(".modal-body div#div_upperArrow_admin").click(function () {
                        if ($(".div_tweetsMain_admin").html() != "") moveTweetForwordByOne_admin();
                    });

                    $(".modal-body div#div_downArrow_admin").click(function () {
                        if ($(".div_tweetsMain_admin").html() != "") moveTweetBackByOne_admin();
                    });

                }
            })

        });
        $('#myModal').on('hidden', function () {
            $('#myModal').unbind('show');
            $("#div_tweeterStream").attr('isclicked', '0');
        })
        // Finished Twitter Stream
    }

    ps_graphDefinitions.buildKeywordTrending = function (sElementName) {}

}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));