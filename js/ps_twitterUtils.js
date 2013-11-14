(function (ps_twitterUtils, $, undefined) {

    ps_twitterUtils.timeDifference = function (start) {
        var startDate, endDate, diff, hours, minutes;
        startDate = new Date(start);
        endDate = new Date();
        diff = endDate.getTime() - startDate.getTime();
        hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        minutes = Math.floor(diff / 1000 / 60);
        return (hours <= 9 ? "0" : "") + hours + "h" + (minutes <= 9 ? "0" : "") + minutes + "m";
    }

    ps_twitterUtils.addlinks = function (data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a target="_blank" style="color:#08c;" href="' + url + '" >' + url + '</a>';
        });
        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return '<a target="_blank" href="http://twitter.com/' + reply.substring(1) + '" style="color:#08c;font-weight:lighter;" >' + reply.charAt(0) + reply.substring(1) + '</a>';
        });
        return data;
    }

    ps_twitterUtils.moveTweetForwordByOne = function () {
        var totalNumberOfTweet = 20;
        var totalNumberOfTweet_admin = 15;
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
    }

    ps_twitterUtils.moveTweetBackByOne = function () {
        var totalNumberOfTweet = 20;
        var totalNumberOfTweet_admin = 15;
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
    }

    ps_twitterUtils.moveTweetBackByOne_admin = function () {
        var totalNumberOfTweet = 20;
        var totalNumberOfTweet_admin = 15;
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

    ps_twitterUtils.getMentionJsonData = function () {
        var date = new Date();
        var tweetStreamHtml = "";
        var response = ps_graphdefinitions.jsonpData;
        var statusCount = response.statuses.length;
        var userName = response.tag_names;
        var tweetData = response.statuses;
        var rank, screen_name, status_text, img_url, tweetTime, reply_count, status_time_str;
        var divIndex = 0;
        var adminHtml = "";
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
            tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + ps_twitterUtils.timeDifference(tweetTime) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text) + '</div></div></div>';
            divIndex += 1;
        }
        $("#div_tweeterStream .div_tweetsMain").html(tweetStreamHtml);
        $(".div_upperArrow").on('click', function () {
            if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") moveTweetForwordByOne();
        });

        $(".div_downArrow").on('click', function () {
            if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") moveTweetBackByOne();
        });

        var scrollTwitTimer = window.setInterval(function () {
            if ($(".div_tweetsMain").html() != "") {
                ps_twitterUtils.moveTweetBackByOne();
                ps_twitterUtils.moveTweetBackByOne_admin();
            }
        }, 10000);
        var getTweetDataTimer = window.setInterval(function () {
            ps_twitterUtils.getMentionJsonData();
            //getMentionJsonData();
        }, 60000);

        $("#div_tweeterStream").on('click', function () {

            $("#div_tweeterStream").attr('isclicked', '1');

            $('#twitterStreamModal').on('shown', function () {
                if ($("#div_tweeterStream").attr('isclicked') == "1") {
                    $("#twitterStream_div_modal, #myModalLabel").empty();

                    //displaying the modal content
                    $("#twitterStream_div_modal").html("<div id='div_mentionTweet'>" + $("#div_tweeterStream .div_tweetsParent").html() + "</div>" + "<div id='div_verizonTweet'>" + $("#div_tweeterStream_admin .div_tweetsParent").html() + "</div>");

                    $(".modal-body div#div_upperArrow").click(function () {
                        if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") ps_twitterUtils.moveTweetForwordByOne();
                    });

                    $(".modal-body div#div_downArrow").click(function () {
                        if ($(this).attr('status') != "disabled" && $(".div_tweetsMain").html() != "") ps_twitterUtils.moveTweetBackByOne();
                    });
                    $(".modal-body div#div_upperArrow_admin").click(function () {
                        if ($(".div_tweetsMain_admin").html() != "") ps_twitterUtils.moveTweetForwordByOne_admin();
                    });

                    $(".modal-body div#div_downArrow_admin").click(function () {
                        if ($(".div_tweetsMain_admin").html() != "") ps_twitterUtils.moveTweetBackByOne_admin();
                    });

                }
            })

        });
        $('#myModal').on('hidden', function () {
            $('#myModal').unbind('show');
            $("#div_tweeterStream").attr('isclicked', '0');
        })
    }

}(window.ps_twitterUtils = window.ps_twitterUtils || {}, jQuery));