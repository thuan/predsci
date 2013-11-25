<?php
    include_once ("inc/header.php");
    include_once ("inc/navigation.php");
?>
	<script language="javascript" src="js/consumer-mass-social-pulse.js" type="text/javascript"></script>
	<body id="dashboard_body">

		<div id="content">

			<div id="page_title">
				<h1>Consumer & Mass Business Social Pulse</h1>
				<ul><li id="dashboard_lists"><a href="dashboard-all.php">View All Dashboards</a></li></ul>
			</div>

			<div id="dashboard_content">

				<div class="metric-ticker" id="metricticker" >
					<div class="widget" id ="metric"></div>
				</div>

				<div class="widget_container_holder" id="maps_holder">
					<!-- START: Twitter Activity -->
					<div class="widget_label">
						<h3 class="pull-left">Twitter Activity Map<br>
							<small>Share of Voice on Twitter by City</small>
						</h3>
						<div class="pull-right">
							<a href="#" data-toggle="tooltip" data-placement="top" title=""
							   data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i
									class="icon-info-sign icon-white"></i></a>
							<a id="launch-app" href="javascript:ps_googlemaps.loadMap(widgetActivityMap, true);"><i
									class="icon-resize-full icon-white"></i></a>
						</div>
					</div>
					<div class="widget_holder" id="maps_widget"></div>
                    <div class="timelabel" style="margin-top: 0px">7 days</div>
					<!-- END: Twitter Activity -->
				</div>

				<div class="widget_container_holder">
					<!-- Share of Voice -->
					<div class="widget_label">
						<h3 class="pull-left">
							Share of Voice<br> <small>With key Competitors</small>
						</h3>

                        <div class="pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title=""
                               data-original-title="Share of Voice by media type for Verizon Wireless and key competitors."><i
                                    class="icon-info-sign icon-white"></i></a>
                            <a id="launch-app" href="javascript:ps_modals.launch(widget_pie.modal);">
                                <i class="icon-resize-full icon-white"></i>
                            </a>

                        </div>
					</div>
					<div class="widget_holder" id="div_pie_chart"></div>
                    <div class="timelabel">7 days</div>
				</div>
				
                                <!-- Volume & Sentiment -->
				<div class="widget_container_holder barChartVS" id="volumeAndSentiment">
					<div class="widget_label">
						<h3 class="pull-left">Volume &AMP; Sentiment<br>
							<small>Daily Volume &AMP; Sentiment</small>
						</h3>

						<div class="pull-right">
							<a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sentiment of conversation for all Verizon Wireless data. Sentiment analysis conducted by Clarabridge with a score between -5 and +5."><i class="icon-info-sign icon-white"></i></a>
							<a id="launch-app" href="javascript:ps_modals.launch(widget_volumeandsentiment.modal);"><i class="icon-resize-full icon-white"></i></a>
						</div>
					</div>
					<div class="widget_holder" id="barChartDiv"></div>
				</div>
                                <!-- Volume & Sentiment END -->

                <div id="conversationVolume" class="widget_container_holder conversationVolume">
                    <div class="widget_label">
                        <h3 class="pull-left">
                            <span></span>
                            <small></small>
                        </h3>
                        <div class="pull-right">
                            <a href="javascript:ps_utilities.toggleBarLine(widgetConversationVolume)"><i class="icon line-swap"></i></a>
                            <a id="tooltipp" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                            <a id="launch-app" href="javascript:ps_modals.launch(widgetConversationVolume.modal)"><i class="icon-resize-full icon-white"></i></a>

                        </div>
                    </div>
                    <div class="widget_holder" id="lineChartDiv"></div>
                    <div id="legend">
                        <a href="#" id="conversationVolumeLegend" class="toggle-legend">Show legend</a>
                    </div>
                    <div class="timelabel">7 days</div>
                </div>

				<div class="widget_container_holder" id="predefinedTopicVolume">
					<!-- Predefined Topic Volume-->
					<div class="widget_label">
						<h3 class="pull-left">
							<span></span>
							<small></small>
						</h3>
						<div class="pull-right">
							<a href="javascript:ps_utilities.toggleBarLine(widgetPredefinedTopicVolume)"><i class="icon line-swap"></i></a>
							<a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
							<a id="launch-app" href="javascript:ps_modals.launch(widgetPredefinedTopicVolume.modal)"><i class="icon-resize-full icon-white"></i></a>
						</div>
					</div>
					<div class="widget_holder" id="lineChartDiv2"></div>
                                        <div id="legend">
                                            <a href="#" id="predefinedTopicVolumeLegend" class="toggle-legend">Show legend</a>
                                        </div>
                                        <div class="timelabel">7 days</div>
				</div>

			<div class="widget_container_holder" id="twitterStream">
            	<div class="widget_label">
                    <h3 class="pull-left">
                        <span></span>
                        <small></small>
                    </h3>
                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A stream of tweets related to Verizon Wireless.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a href="javascript:ps_modals.launch(widgetTwitterStream.modal)" id="launch-app">
                            <i class="icon-resize-full icon-white"></i>
                        </a>
                    </div>
                </div>
				<div class="widget_holder" id="div_tweeterStream_widget">
					<div id="div_tweeterStream" class="div_tweeterStream">
                    	
                    	<div class="div_tweetsParent">
                        	<div status='enabled' class="div_upperArrow" id="div_upperArrow"></div>
                        	<div class="div_tweetsMain"></div>
                        	<div status='enabled' class="div_downArrow" id="div_downArrow"></div>
                    	</div>
                	</div>
                  	<div id="div_tweeterStream_admin" class="div_tweeterStream">
                    	
                    	<div class="div_tweetsParent">
                        	<div status='enabled' class="div_upperArrow" id="div_upperArrow_admin"></div>
                        	<div class="div_tweetsMain"></div>
                        	<div status='enabled' class="div_downArrow" id="div_downArrow_admin"></div>
                    	</div>
                    </div>
                </div>      
			</div>
				<!-- Top Tweets -->
				<div class="widget_container_holder_long">
					<div class="widget_label">

						<h3 class="pull-left">Top Tweets<br>
							<small>Most Engaging Verizon Wireless Tweets</small>
						</h3>

						<div class="pull-right">
							<a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="The most engaging Tweets from the Verizon Wireless Twitter handles. Engagement is based on Retweets and @Replies."><i class="icon-info-sign icon-white"></i></a>
							<a href="#" id="launch-app"><i class="icon-resize-full icon-white" data-toggle="modal" data-target=".twitterModal"></i></a>

						</div>

					</div>
					<div id="topTweets"></div>
					<div class="timelabel timelabel-toptweets">7 days</div>
				</div>
				
				<!-- END Top Tweets -->
				
				
			<!-- Top Twitter Modal Starts -->
			<div id="twitterModal" class="modal hide fade twitterModal" tabindex="-1" role="dialog" aria-labelledby="twitterModalLabel" aria-hidden="true">
				<div class="modal-header">
					<div id="right-side">
						<a id="icon-info" data-toggle="tooltip" data-placement="top" title="" data-original-title="The most engaging Tweets from the Verizon Wireless Twitter handles. Engagement is based on Retweets and @Replies."><i class="icon-info-sign icon-white"></i></a>
						<div class="label label-inverse">7 Days</div>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
					</div>
					<h3>Top Tweets<br>
						<small>Most Engaging Verizon Wireless Tweets</small>
					</h3>
				</div>
				<div class="modal-body" id="twitter_div_modal">
					<div id="twitter-feed-modal"></div>
				</div>
			</div>
			<!-- Top Twitter Modal Ends -->
				
			
                        <!-- Sentiment Competitors -->
                        <div class="widget_container_holder barChartVS" id="sentimentCompetitors">
                            <div class="widget_label">
                                    <h3 class="pull-left">Volume &AMP; Sentiment<br>
                                            <small>With Key Competitors</small>
                                    </h3>

                                    <div class="pull-right">
                                            <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Volume of positive, negative, and neutral sentiment for Verizon Wireless and key competitors."><i class="icon-info-sign icon-white"></i></a>
                                            <a id="launch-app" href="javascript:ps_modals.launch(widget_sentimentCompetitors.modal);"><i class="icon-resize-full icon-white"></i></a>
                                    </div>
                            </div>
                            <div class="widget_holder" id="sentimentCompetitorsDiv"></div>
                        </div>
                        <!-- Sentiment Competitors END -->
                        
                        
				<!-- Keyword Frequency Starts-->
				<div class="box kList widget_container_holder_keyword">

					<div class="widget_label">
						<h3 class="pull-left">Keyword Frequency<br>
							<small>Information on keyword frequency by volume of conversation.</small>
						</h3>
						<div class="pull-right">
							<a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Top keywords for Verizon Wireless network by volume of conversation."><i class="icon-info-sign icon-white"></i></a>
						</div>
					</div>
					<div class="row-fluid">
						<div id="klist"></div>
					</div>
					<div class="timelabel">last 24 hours</div>
					
				</div>
				
			</div>

			<!-- end of widgets -->

			<!-- Start of modals -->
			<?php
			include_once ("inc/modal.php");
			?>
			<!-- end of modals -->
		</div>

	</body>
</html>