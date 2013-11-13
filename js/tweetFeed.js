$(document).ready(function () {


    jsonUserData	= getUserJsonData();
	jsonMentionData = getMentionJsonData();

});

function getMentionJsonData() {
	var url = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
	$.ajax({
		type: "get",
        dataType: "jsonp",
        crossDomain: true,
        contentType: "application/json",
        url: url,
		success: function (response) {
			//console.log(JSON.stringify(response, null, 4));
			var date			= new Date();
			var tweetStreamHtml	= "";
			var statusCount		= response.statuses.length;
			
			var userName		= response.tag_names;
			var tweetData		= response.statuses;
			console.log(statusCount);
			var rank,screen_name,status_text,reply_count,status_time_str;
			
			var divIndex=0;
			var adminHtml="";
			for ( i = 0; i < statusCount; i++) {
				//rank			= tweetData[i].rank;
				screen_name		= tweetData[i].screen_name;
				status_text		= tweetData[i].status_text;
				img_url			= tweetData[i].img_url;
				tweetTime		= tweetData[i].status_time_str;
				status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);



				if ( divIndex === 0 ) {
					sessionStorage.presentTopTweetIndex = 0;
					sessionStorage.presentTopTweetIndex_admin=0;
				}
				tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + timeDifference(tweetTime) + '</div><div class="div_tweetText">' + addlinks(status_text) + '</div></div></div>';
				adminHtml		+= '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 75, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h1><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h1><div class="div_tweetTime">' + timeDifference(tweetTime) + '</div><div class="div_tweetText">' + addlinks(status_text) + '</div></div></div>';
				divIndex+=1;
			}
			//$('#topTweets').html(topTweets);
			$(".div_tweetsMain").html(tweetStreamHtml);
			//$(".div_tweetsMain_admin").html(adminHtml);
        }
	});
}

/********************* user Data ****************************/
function getUserJsonData() {
	var url = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
	$.ajax({
		type: "get",
        dataType: "jsonp",
        crossDomain: true,
        contentType: "application/json",
        url: url,
		success: function (response) {
			//console.log(JSON.stringify(response, null, 4));
			var date			= new Date();
			var tweetStreamHtml	= "";
			var topTweets		= '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
			var topTweetsModal	= '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
			var period			= response.period;
			var periodCount		= response.period_count;
			var userName		= response.groups[0].userName;
			var tweetData		= response.groups[0].statuses;
			var statusCount		= response.groups[0].statuses.length;
			var rank,screen_name,status_text,reply_count,status_time_str;
			for ( i = 0; i < 5; i++) {
				rank			= tweetData[i].rank;
				screen_name		= tweetData[i].screen_name;
				status_text		= tweetData[i].status_text;
				reply_count		= tweetData[i].reply_count;
				retweet_count	= tweetData[i].retweet_count;
				status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);

				topTweets += '<tr>';
				topTweets += '<td>'+rank+'</td>';
				topTweets += '<td>'+addlinks(status_text)+'</td>';
				topTweets += '<td>@'+screen_name+'</td>';
				topTweets += '<td>'+reply_count+'</td>';
				topTweets += '<td>'+retweet_count+'</td>';
				topTweets += '<td>'+status_time_str+'</td>';
				topTweets += '</tr>';
			}
			var divIndex=0;
			var adminHtml="";
			for ( i = 0; i < statusCount; i++) {
				rank			= tweetData[i].rank;
				screen_name		= tweetData[i].screen_name;
				status_text		= tweetData[i].status_text;
				reply_count		= tweetData[i].reply_count;
				retweet_count	= tweetData[i].retweet_count;
				img_url			= tweetData[i].img_url;
				tweetTime		= tweetData[i].status_time_str;
				status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);


				topTweetsModal	+= '<tr>';
				topTweetsModal	+= '<td>'+rank+'</td>';
				topTweetsModal	+= '<td>'+addlinks(status_text)+'</td>';
				topTweetsModal	+= '<td>@'+screen_name+'</td>';
				topTweetsModal	+= '<td>'+reply_count+'</td>';
				topTweetsModal	+= '<td>'+retweet_count+'</td>';
				topTweetsModal	+= '<td>'+status_time_str+'</td>';
				topTweetsModal	+= '</tr>';
				if ( divIndex === 0 ) {
					sessionStorage.presentTopTweetIndex = 0;
					sessionStorage.presentTopTweetIndex_admin=0;
				}
				tweetStreamHtml += '<div index="' + (divIndex) + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + timeDifference(tweetTime) + '</div><div class="div_tweetText">' + addlinks(status_text) + '</div></div></div>';
				adminHtml		+= '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 75, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h1><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h1><div class="div_tweetTime">' + timeDifference(tweetTime) + '</div><div class="div_tweetText">' + addlinks(status_text) + '</div></div></div>';
				divIndex+=1;
			}
			topTweets += '</tbody></table>';
			$('#topTweets').html(topTweets);
			$('#twitter-feed-modal').html(topTweetsModal);
			//$(".div_tweetsMain").html(tweetStreamHtml);
			$(".div_tweetsMain_admin").html(adminHtml);
        }
	});
}
/************ Create Link From Data ******************/
function addlinks(data) {
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
/************ Create Date Difference ******************/
function timeDifference(start) {
	var startDate = new Date(start);
	var endDate = new Date();
	var diff = endDate.getTime() - startDate.getTime();
	var hours = Math.floor(diff / 1000 / 60 / 60);
	diff -= hours * 1000 * 60 * 60;
	var minutes = Math.floor(diff / 1000 / 60);
	return (hours <= 9 ? "0" : "") + hours + "h" + (minutes <= 9 ? "0" : "") + minutes + "m";
}