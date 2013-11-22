/**
 *
 * @version		1.0
 * @package		Predictive Science Dashboard
 * @subpackage	Wireless Social Pulse
 * @license		GPLv3
 * @author		Ifactory Solutions <informacao@ifactory.com.br>
 */

//JSHint ignores
/*global window:false, ps_graphDefinitions:false, jQuery:false, sessionStorage:false*/

(function (ps_twitterUtils, $, undefined) {

	ps_twitterUtils.topTweets = function (response) {

		var date = new Date();
		var response = ps_graphDefinitions.jsonpData;
		var topTweets = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
		var topTweetsModal = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
		var userName = response.groups[0].userName;
		var tweetData = response.groups[0].statuses;
		var statusCount = response.groups[0].statuses.length;
		var rank, screen_name, status_text, reply_count, status_time_str;
		for (i = 0; i < 5; i++) {
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
		var divIndex = 0;
		for (i = 0; i < statusCount; i++) {
			rank = tweetData[i].rank;
			screen_name = tweetData[i].screen_name;
			status_text = tweetData[i].status_text;
			reply_count = tweetData[i].reply_count;
			retweet_count = tweetData[i].retweet_count;
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

			divIndex += 1;
		}


		topTweets += '</tbody></table>';
		$('#topTweets').html(topTweets);
		$('#twitter-feed-modal').html(topTweetsModal);

	};

	ps_twitterUtils.timeDifference = function (start) {
		var startDate, endDate, diff, hours, minutes;
		startDate = new Date(start);
		endDate = new Date();
		diff = endDate.getTime() - startDate.getTime();
		hours = Math.floor(diff / 1000 / 60 / 60);
		diff -= hours * 1000 * 60 * 60;
		minutes = Math.floor(diff / 1000 / 60);
		return (hours <= 9 ? "0" : "") + hours + "h" + (minutes <= 9 ? "0" : "") + minutes + "m";
	};

	ps_twitterUtils.addlinks = function (data) {
		//Add link to all http:// links within tweets
		data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\\>]*[^.,;'">\:\s\\>\)\]\!])/g, function (url) {
			return '<a target="_blank" style="color:#08c;" href="' + url + '" >' + url + '</a>';
		});

		//Add link to @usernames used within tweets
		data = data.replace(/\B@([_a-z0-9]+)/ig, function (reply) {
			return '<a target="_blank" href="http://twitter.com/' + reply.substring(1) + '" style="color:#08c;font-weight:lighter;" >' + reply.charAt(0) + reply.substring(1) + '</a>';
		});
		return data;
	};

	ps_twitterUtils.moveTweetForwordByOne = function () {
		var totalNumberOfTweet = 20;
		if (parseInt(sessionStorage.presentTopTweetIndex) > 0) {
			sessionStorage.presentTopTweetIndex = parseInt(sessionStorage.presentTopTweetIndex) - 1;
			for (var index = 0; index < totalNumberOfTweet; index++) {
				var top = parseInt($('div[index="' + index + '"]').css('top'));
				top = top + 80;
				$('div[index="' + index + '"]').animate({
					"top": top + "px"
				}, 500);
			}
		}
	};

	ps_twitterUtils.moveTweetBackByOne = function () {
		var totalNumberOfTweet = 20;
		if (parseInt(sessionStorage.presentTopTweetIndex) < totalNumberOfTweet - 2) {
			sessionStorage.presentTopTweetIndex = parseInt(sessionStorage.presentTopTweetIndex) + 1;
			for (var index = 0; index < totalNumberOfTweet; index++) {
				var top = parseInt($('div[index="' + index + '"]').css('top'));
				top = top - 80;
				$('div[index="' + index + '"]').animate({
					"top": top + "px"
				}, 500);
			}
		}
	};

	ps_twitterUtils.moveTweetForwordByOne_admin = function () {
		var totalNumberOfTweet_admin = 15;
		if (parseInt(sessionStorage.presentTopTweetIndex_admin) > 0) {
			sessionStorage.presentTopTweetIndex_admin = parseInt(sessionStorage.presentTopTweetIndex_admin) - 1;
			for (var index = 0; index < totalNumberOfTweet_admin; index++) {
				var top = parseInt($('div[index_admin="' + index + '"]').css('top'));
				top = top + 80;
				$('div[index_admin="' + index + '"]').animate({
					"top": top + "px"
				}, 500);
			}
		}
	};

	ps_twitterUtils.moveTweetBackByOne_admin = function () {
		var totalNumberOfTweet_admin = 15;
		if (parseInt(sessionStorage.presentTopTweetIndex_admin) < totalNumberOfTweet_admin - 2) {
			sessionStorage.presentTopTweetIndex_admin = parseInt(sessionStorage.presentTopTweetIndex_admin) + 1;
			for (var index = 0; index < totalNumberOfTweet_admin; index++) {
				var top = parseInt($('div[index_admin="' + index + '"]').css('top'));
				top = top - 80;
				$('div[index_admin="' + index + '"]').animate({
					"top": top + "px"
				}, 500);
			}
		}
	};

	ps_twitterUtils.buildWidget = function (usersData, mentionsData) {
		var index, tweetData, statusCount, tweetDataMentions, statusCountMentions, divIndex, tweetStreamHtml, adminHtml, screen_name, status_text, img_url, tweetTime;

		tweetData = usersData.groups[0].statuses;
		statusCount = usersData.groups[0].statuses.length;
		adminHtml = "";

		tweetDataMentions = mentionsData.statuses;
		statusCountMentions = mentionsData.statuses.length;
		tweetStreamHtml = "";

		divIndex = 0;
		for (index = 0; index < statusCount; index++) {
			screen_name = tweetData[index].screen_name;
			status_text = tweetData[index].status_text;
			img_url = tweetData[index].img_url;
			tweetTime = tweetData[index].status_time;

			if (divIndex === 0) {
				sessionStorage.presentTopTweetIndex = 0;
				sessionStorage.presentTopTweetIndex_admin = 0;
			}
			adminHtml += '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + $.timeago(tweetTime) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text) + '</div></div></div>';
			divIndex += 1;
		}

		divIndex = 0;
		for (index = 0; index < statusCountMentions; index++) {
			screen_name = tweetDataMentions[index].screen_name;
			status_text = tweetDataMentions[index].status_text;
			img_url = tweetDataMentions[index].img_url;
			tweetTime = tweetDataMentions[index].status_time;

			if (divIndex === 0) {
				sessionStorage.presentTopTweetIndex = 0;
				sessionStorage.presentTopTweetIndex_admin = 0;
			}
			tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + $.timeago(tweetTime) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text) + '</div></div></div>';
			divIndex += 1;
		}
		$("#div_tweeterStream_admin .div_tweetsMain").html(adminHtml);
		$("#div_tweeterStream .div_tweetsMain").html(tweetStreamHtml);
	};

	ps_twitterUtils.buildWidgetScroll = function () {
		var scrollTweetTimer = window.setInterval(function () {
			if ($(".div_tweetsMain").html() !== "") {
				ps_twitterUtils.moveTweetBackByOne();
				ps_twitterUtils.moveTweetBackByOne_admin();
			}
		}, 10000);
		$(".div_upperArrow").on('click', function () {
			if ($(this).attr('status') !== "disabled" && $(".div_tweetsMain").html() !== "") ps_twitterUtils.moveTweetForwordByOne();
		});

		$(".div_downArrow").on('click', function () {
			if ($(this).attr('status') !== "disabled" && $(".div_tweetsMain").html() !== "") ps_twitterUtils.moveTweetBackByOne();
		});
	};

	ps_twitterUtils.buildWidgetModal = function () {
		$("#modal_widget #modal-widget-body").empty();
		//displaying the modal content
		
		$("#modal_widget #modal-widget-body").html("<div id='news_header' class='newsHeader'></div>" + "<div id='div_mentionTweet'>" + $("#div_tweeterStream .div_tweetsParent").html() + "</div>" + "<div id='div_verizonTweet'>" + $("#div_tweeterStream_admin .div_tweetsParent").html() + "</div>");
		$("#modal_widget #modal-widget-body div#div_upperArrow").click(function () {
			if ($(this).attr('status') !== "disabled" && $(".div_tweetsMain").html() !== "") ps_twitterUtils.moveTweetForwordByOne();
		});
		$("#modal_widget #modal-widget-body div#div_downArrow").click(function () {
			if ($(this).attr('status') !== "disabled" && $(".div_tweetsMain").html() !== "") ps_twitterUtils.moveTweetBackByOne();
		});
		$("#modal_widget #modal-widget-body div#div_upperArrow_admin").click(function () {
			if ($(".div_tweetsMain_admin").html() !== "") ps_twitterUtils.moveTweetForwordByOne_admin();
		});

		$("#modal_widget #modal-widget-body div#div_downArrow_admin").click(function () {
			if ($(".div_tweetsMain_admin").html() !== "") ps_twitterUtils.moveTweetBackByOne_admin();
		});
	};
}(window.ps_twitterUtils = window.ps_twitterUtils || {}, jQuery));