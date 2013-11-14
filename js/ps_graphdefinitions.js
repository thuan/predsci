/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {
    ps_graphDefinitions.jsonData = "";

    ps_graphDefinitions.buildChart = function (sElementName) {}

    ps_graphDefinitions.buildPieChart = function (sElementName) {}

    ps_graphDefinitions.buildBarChart = function (sElementName) {}

    ps_graphDefinitions.buildLineChart = function (sElementName) {}

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {}

    ps_graphDefinitions.buildTwitterStream = function (sElementName) {
        var build, screen_name, status_text, reply_count, status_time_str, date, tweetStreamHtml, statusCount, userName, tweetData, divIndex, adminHtml, totalNumberOfTweet, totalNumberOfTweet_admin;
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
        },
        date = new Date();
        tweetStreamHtml = "";
        statusCount = ps_graphDefinitions.jsonData.statuses.length;

        userName = ps_graphDefinitions.jsonData.tag_names;
        tweetData = ps_graphDefinitions.jsonData.statuses;

        divIndex = 0;
        adminHtml = "";
        for (i = 0; i < statusCount; i++) {
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

    }

    ps_graphDefinitions.buildKeywordTrending = function (sElementName) {}

}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));