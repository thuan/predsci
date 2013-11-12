<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Predictive Science - Thuan examples</title>
    <link rel="stylesheet" type="text/css" href="css/jChartFX%20Palettes/mocha.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/jquery/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/jchartfx/jchartfx.system.js"></script>
    <script type="text/javascript" src="js/jchartfx/jchartfx.coreBasic.js"></script>
    <script type="text/javascript" src="js/jchartfx/jchartfx.animation.js"></script>
    <script type="text/javascript" src="js/app/app.js"></script>
    <script type="text/javascript" src="js/app/vscroller.js"></script>
    <script type="text/javascript" src="js/app/twitter_stream.js"></script>
    <script type="text/javascript">
        var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/topics/multitime?period=week&limit=5";
        console.log("API: Trending Topics: " + APItrendingtopics);

        var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
        console.log("API: Top Tweets: " + APIgettoptweets);

        var APItwitterfollowers = "/livecache/vzw_twitter_followers_1d.json";
        console.log("API: Twitter Followers: " + APItwitterfollowers);

        var APIgettweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/user/statuses?group=1&include_replies=false&limit=10";
        console.log("API: Twitter Stream (Verizon): " + APIgettweets);

        var APIgettweets2 = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
        console.log("API: Twitter Stream: " + APIgettweets2);

        var APIgettweetsmentions = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
        console.log("API: Twitter Influencers wMentions: " + APIgettweetsmentions);

        $(window).load(function(e) {
            gettweets("vscroller", "", APIgettweets2);
            ps_graphDefinitions.buildChart('grafico');
        });
    </script>
    <style type="text/css">
        ::selection{ background-color: #E13300; color: white; }
        	::moz-selection{ background-color: #E13300; color: white; }
        	::webkit-selection{ background-color: #E13300; color: white; }
        
        	body {
        		background-color: #fff;
        		margin: 40px;
        		font: 13px/20px normal Helvetica, Arial, sans-serif;
        		color: #4F5155;
        	}
        
        	a {
        		color: #003399;
        		background-color: transparent;
        		font-weight: normal;
        	}
        
        	h1 {
        		color: #444;
        		background-color: transparent;
        		border-bottom: 1px solid #D0D0D0;
        		font-size: 19px;
        		font-weight: normal;
        		margin: 0 0 14px 0;
        		padding: 14px 15px 10px 15px;
        	}
        
        	code {
        		font-family: Consolas, Monaco, Courier New, Courier, monospace;
        		font-size: 12px;
        		background-color: #f9f9f9;
        		border: 1px solid #D0D0D0;
        		color: #002166;
        		display: block;
        		margin: 14px 0 14px 0;
        		padding: 12px 10px 12px 10px;
        	}
        
        	#body{
        		margin: 0 15px 0 15px;
        	}
        	
        	p.footer{
        		text-align: right;
        		font-size: 11px;
        		border-top: 1px solid #D0D0D0;
        		line-height: 32px;
        		padding: 0 10px 0 10px;
        		margin: 20px 0 0 0;
        	}
        	
        	#container{
        		margin: 10px;
        		border: 1px solid #D0D0D0;
        		-webkit-box-shadow: 0 0 8px #D0D0D0;
        	}
    </style>
</head>

<body>
    <div id="container">
        <div id="body">
            <div class="widget span4 visible-desktop hidden-ipad roundlow roundhigh">
                <div class="heading clearfix roundhigh">
                    <h3 class="pull-left">Twitter Stream
                        <br />
                        <small>Tweets mentioning Verizon Wireless</small>
                    </h3>
                    <div class="pull-right">
                        <span class="label label-info ttip_t hidden-phone hidden-tablet has-icon" title="A stream of tweets related to Verizon Wireless.">info</span>
                        <span class="expandbtn label label-error hidden-tablet hidden-phone has-icon">
                            <a data-toggle="modal" data-backdrop="static" href="#modal-vscroller" id="expand_influencers" class="label visible-desktop" title="Click for expanded view.">expand</a>
                        </span>
                        <span class="refreshbtn label label-success ttip_t has-icon" title="refresh this widget">refresh</span>
                    </div>
                </div>
                <div class="news-wrapper" id="vscroller" style="height: 285px;">
                    <div class="arrow-up"></div>
                </div>

                <div class="arrow-down tn"></div>
                <div class="footing roundlow"></div>
                <div class="timelabel"></div>
            </div>
            <div id="grafico" style="width:600px;height:400px"></div>
            <p class="footer">Page rendered in
                <strong>{elapsed_time}</strong>seconds</p>
        </div>
    </div>
</body>

</html>
