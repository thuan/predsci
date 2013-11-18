/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphdefinitions, $, undefined) {

    ps_graphdefinitions.jsonData = "";

    ps_graphdefinitions.jsonpData = "";

    ps_graphdefinitions.buildTwitterStream = function (sElementName) {
        var date, tweetStreamHtml, response, statusCount, statusCountGroup, userName, userNameGroup, tweetData, tweetDataGroup, rank, screen_name, screen_name_group, status_text, status_text_group, img_url, img_url_group, tweetTime, tweetTime_group, reply_count, status_time_str, status_time_str_group, retweet_count, divIndex, adminHtml, topTweets, topTweetsModal, period, periodCount;
        date = new Date();
        response = ps_graphdefinitions.jsonpData;

        divIndex = 0;
        tweetStreamHtml = "";
        adminHtml = "";

        userName = response.tag_names;
        tweetData = response.statuses;
        statusCount = response.statuses.length;

        topTweets = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
        topTweetsModal = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
        period = response.period;
        periodCount = response.period_count;
        userNameGroup = response.groups[0].userName;
        tweetDataGroup = response.groups[0].statuses;
        statusCountGroup = response.groups[0].statuses.length;

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
        
        for (var i = 0; i < 5; i++) {
            rank = tweetData[i].rank;
            screen_name_group = tweetData[i].screen_name_group;
            status_text_group = tweetData[i].status_text_group;
            reply_count = tweetData[i].reply_count;
            retweet_count = tweetData[i].retweet_count;
            status_time_str_group = date.getDate(tweetData[i].status_time_str_group) + "/" + date.getMonth(tweetData[i].status_time_str_group) + "/" + date.getFullYear(tweetData[i].status_time_str_group);

            topTweets += '<tr>';
            topTweets += '<td>' + rank + '</td>';
            topTweets += '<td>' + ps_twitterUtils.addlinks(status_text_group) + '</td>';
            topTweets += '<td>@' + screen_name_group + '</td>';
            topTweets += '<td>' + reply_count + '</td>';
            topTweets += '<td>' + retweet_count + '</td>';
            topTweets += '<td>' + status_time_str_group + '</td>';
            topTweets += '</tr>';
        }
        for (var i = 0; i < statusCount; i++) {
            rank = tweetData[i].rank;
            screen_name_group = tweetData[i].screen_name_group;
            status_text_group = tweetData[i].status_text_group;
            img_url_group = tweetData[i].img_url;
            tweetTime_group = tweetData[i].status_time_str;
            status_time_str_group = date.getDate(tweetData[i].status_time_str_group) + "/" + date.getMonth(tweetData[i].status_time_str_group) + "/" + date.getFullYear(tweetData[i].status_time_str_group);
            topTweetsModal += '<tr>';
            topTweetsModal += '<td>' + rank + '</td>';
            topTweetsModal += '<td>' + ps_twitterUtils.addlinks(status_text_group) + '</td>';
            topTweetsModal += '<td>@' + screen_name_group + '</td>';
            topTweetsModal += '<td>' + reply_count + '</td>';
            topTweetsModal += '<td>' + retweet_count + '</td>';
            topTweetsModal += '<td>' + status_time_str_group + '</td>';
            topTweetsModal += '</tr>';

            if (divIndex === 0) {
                sessionStorage.presentTopTweetIndex = 0;
                sessionStorage.presentTopTweetIndex_admin = 0;
            }

            adminHtml += '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name_group + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name_group + '"> ' + screen_name_group + '</a></h4><div class="div_tweetTime">' + ps_twitterUtils.timeDifference(tweetTime_group) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text_group) + '</div></div></div>';
            divIndex += 1;
        }
        topTweets += '</tbody></table>';
        $('#topTweets').html(topTweets);
        $('#twitter-feed-modal').html(topTweetsModal);
        $("#div_tweeterStream_admin .div_tweetsMain").html(adminHtml);
        $("#div_tweeterStream .div_tweetsMain").html(tweetStreamHtml);
        ps_twitterUtils.buildModals();
    };


}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery));