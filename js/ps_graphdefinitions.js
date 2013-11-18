/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphdefinitions, $, undefined) {

    ps_graphdefinitions.jsonData = "";

    ps_graphdefinitions.jsonpData = "";

    ps_graphdefinitions.buildTwitterStream = function (sElementName) {
        var date, tweetStreamHtml, response, statusCount, userName, tweetData, rank, screen_name, status_text, img_url, tweetTime, reply_count, status_time_str, retweet_count, divIndex, adminHtml, topTweets, topTweetsModal, period, periodCount;
        date = new Date();
        response = ps_graphdefinitions.jsonpData;
        divIndex = 0;
        tweetStreamHtml = "";
        adminHtml = "";

        var buildStream = {};
        buildStream.getMentionsJsonData = function () {
            userName = response.tag_names;
            tweetData = response.statuses;
            statusCount = response.statuses.length;
            for (var i = 0; i < statusCount; i++) {
                screen_name = tweetData[i].screen_name;
                status_text = tweetData[i].status_text;
                img_url = tweetData[i].img_url;
                tweetTime = tweetData[i].status_time_str;
                status_time_str = date.getDate(tweetData[i].status_time_str) + "/" + date.getMonth(tweetData[i].status_time_str) + "/" + date.getFullYear(tweetData[i].status_time_str);

                if (divIndex === 0) {
                    sessionStorage.presentTopTweetIndex = 0;
                    sessionStorage.presentTopTweetIndex_admin = 0;
                }
                tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + ps_twitterUtils.timeDifference(tweetTime) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text) + '</div></div></div>';

                divIndex += 1;
            }
            $("#div_tweeterStream .div_tweetsMain").html(tweetStreamHtml);
            ps_twitterUtils.buildModals();
            return buildStream;
        };

        buildStream.getUsersJsonData = function () {
            topTweets = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
            topTweetsModal = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
            period = response.period;
            periodCount = response.period_count;
            userName = response.groups[0].userName;
            tweetData = response.groups[0].statuses;
            statusCount = response.groups[0].statuses.length;

            for (var i = 0; i < 5; i++) {
                rank = tweetData[i].rank;
                screen_name = tweetData[i].screen_name;
                status_text = tweetData[i].status_text;
                reply_count = tweetData[i].reply_count;
                retweet_count = tweetData[i].retweet_count;
                status_time_str = date.getDate(tweetData[i].status_time_str) + "/" + date.getMonth(tweetData[i].status_time_str) + "/" + date.getFullYear(tweetData[i].status_time_str);

                topTweets += '<tr>';
                topTweets += '<td>' + rank + '</td>';
                topTweets += '<td>' + ps_twitterUtils.addlinks(status_text) + '</td>';
                topTweets += '<td>@' + screen_name + '</td>';
                topTweets += '<td>' + reply_count + '</td>';
                topTweets += '<td>' + retweet_count + '</td>';
                topTweets += '<td>' + status_time_str + '</td>';
                topTweets += '</tr>';
            }
            for (var i = 0; i < statusCount; i++) {
                rank = tweetData[i].rank;
                screen_name = tweetData[i].screen_name;
                status_text = tweetData[i].status_text;
                img_url = tweetData[i].img_url;
                tweetTime = tweetData[i].status_time_str;
                status_time_str = date.getDate(tweetData[i].status_time_str) + "/" + date.getMonth(tweetData[i].status_time_str) + "/" + date.getFullYear(tweetData[i].status_time_str);
                topTweetsModal += '<tr>';
                topTweetsModal += '<td>' + rank + '</td>';
                topTweetsModal += '<td>' + ps_twitterUtils.addlinks(status_text) + '</td>';
                topTweetsModal += '<td>@' + screen_name + '</td>';
                topTweetsModal += '<td>' + reply_count + '</td>';
                topTweetsModal += '<td>' + retweet_count + '</td>';
                topTweetsModal += '<td>' + status_time_str + '</td>';
                topTweetsModal += '</tr>';

                if (divIndex === 0) {
                    sessionStorage.presentTopTweetIndex = 0;
                    sessionStorage.presentTopTweetIndex_admin = 0;
                }

                adminHtml += '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + ps_twitterUtils.timeDifference(tweetTime) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text) + '</div></div></div>';
                divIndex += 1;
            }
            topTweets += '</tbody></table>';
            $('#topTweets').html(topTweets);
            $('#twitter-feed-modal').html(topTweetsModal);
            $("#div_tweeterStream_admin .div_tweetsMain").html(adminHtml);
            return buildStream;
        };

    };


}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery));