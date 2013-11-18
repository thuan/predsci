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
        statusCount = response.statuses.length;
        userName = response.tag_names;
        tweetData = response.statuses;
        divIndex = 0;
        tweetStreamHtml = "";
        adminHtml = "";
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
        
    };


}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery));