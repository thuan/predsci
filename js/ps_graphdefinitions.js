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
            var build, rank, screen_name, status_text, reply_count, status_time_str, date, tweetStreamHtml, statusCount, userName, tweetData, divIndex, adminHtml;
            
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
        }

    ps_graphDefinitions.buildKeywordTrending = function (sElementName) {}

}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));