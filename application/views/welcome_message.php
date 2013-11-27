<?php include_once ( "inc/header.php"); include_once ( "inc/navigation.php"); ?>
<script language="javascript" src="js/cloud-social-pulse.js" type="text/javascript"></script>

<body id="dashboard_body">

    <div id="content">

        <div id="page_title">
            <h1>Enterprise Solutions - Cloud Social Pulse</h1>
            <ul>
                <li id="dashboard_lists">
                    <a href="dashboard-all.php">View All Dashboards</a>
                </li>
            </ul>
        </div>

        <div id="dashboard_content">

            <!-- Share of Voice -->
            <div class="widget_container_holder">
                <div class="widget_label">
                    <h3 class="pull-left">
                        Share of Voice
                        <br>
                        <small>With key Competitors</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share of Voice by media type for Verizon Wireless and key competitors.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
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
                    <h3 class="pull-left">Volume &AMP; Sentiment
                        <br>
                        <small>Daily Volume &AMP; Sentiment</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sentiment of conversation for all Verizon Wireless data. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a id="launch-app" href="javascript:ps_modals.launch(widget_volumeandsentiment.modal);">
                            <i class="icon-resize-full icon-white"></i>
                        </a>
                    </div>
                </div>
                <div class="widget_holder" id="barChartDiv"></div>
            </div>

            <!-- Conversation Volume -->
            <div id="conversationVolume" class="widget_container_holder conversationVolume">
                <div class="widget_label">
                    <h3 class="pull-left">
                        <span></span>
                        <small></small>
                    </h3>
                    <div class="pull-right">
                        <a href="javascript:ps_utilities.toggleBarLine(widgetConversationVolume)">
                            <i class="icon line-swap"></i>
                        </a>
                        <a id="tooltipp" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a id="launch-app" href="javascript:ps_modals.launch(widgetConversationVolume.modal)">
                            <i class="icon-resize-full icon-white"></i>
                        </a>

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
                        <a href="javascript:ps_utilities.toggleBarLine(widgetPredefinedTopicVolume)">
                            <i class="icon line-swap"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a id="launch-app" href="javascript:ps_modals.launch(widgetPredefinedTopicVolume.modal)">
                            <i class="icon-resize-full icon-white"></i>
                        </a>
                    </div>
                </div>
                <div class="widget_holder" id="lineChartDiv2"></div>
                <div id="legend">
                    <a href="#" id="predefinedTopicVolumeLegend" class="toggle-legend">Show legend</a>
                </div>
                <div class="timelabel">7 days</div>
            </div>

            <!-- LinkedIn Followers -->
            <div class="widget_container_holder">
                <div class="widget_label">

                    <h3 class="pull-left">LinkedIn Followers
                        <br>
                        <small>Verizon Enterprise Solutions Company Page</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="The most engaging Tweets from the Verizon Wireless Twitter handles. Engagement is based on Retweets and @Replies.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a href="#" id="launch-app">
                            <i class="icon-resize-full icon-white" data-toggle="modal" data-target=".twitterModal"></i>
                        </a>
                    </div>
                </div>
                <div id="topTweets"></div>
                <div class="timelabel timelabel-toptweets">7 days</div>
            </div>

            <!-- LinkedIn Recommendations -->
            <div class="widget_container_holder" id="containerLinkedinRecommendations">
                <div class="widget_label">
                    <h3 class="pull-left">
                        <span></span>
                        <small></small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a href="javascript:ps_modals.launch(linkedinRecommendations.modal)" id="launch-app">
                            <i class="icon-resize-full icon-white" data-toggle="modal"></i>
                        </a>
                    </div>
                </div>
                <div class="widget_holder" id="divLinkedinRecommendations"></div>
                <div class="timelabel timelabel-toptweets">7 days</div>
            </div>

            <!-- LinkedIn Likes -->
            <div class="widget_container_holder">
                <div class="widget_label">

                    <h3 class="pull-left">LinkedIn Likes
                        <br>
                        <small>Verizon Enterprise Solutions Company Page</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="The most engaging Tweets from the Verizon Wireless Twitter handles. Engagement is based on Retweets and @Replies.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a href="#" id="launch-app">
                            <i class="icon-resize-full icon-white" data-toggle="modal" data-target=".twitterModal"></i>
                        </a>
                    </div>
                </div>
                <div id="topTweets"></div>
                <div class="timelabel timelabel-toptweets">7 days</div>
            </div>

            <!-- Trending Terms -->
            <div class="widget_container_holder">
                <div class="widget_label">

                    <h3 class="pull-left">Trending Terms
                        <br>
                        <small>Terms Trending On Twitter This Hour</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="The most engaging Tweets from the Verizon Wireless Twitter handles. Engagement is based on Retweets and @Replies.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a href="#" id="launch-app">
                            <i class="icon-resize-full icon-white" data-toggle="modal" data-target=".twitterModal"></i>
                        </a>
                    </div>
                </div>
                <div id="topTweets"></div>
                <div class="timelabel timelabel-toptweets">7 days</div>
            </div>

            <!-- Sentiment Competitors -->
            <div class="widget_container_holder barChartVS" id="sentimentCompetitors">
                <div class="widget_label">
                    <h3 class="pull-left">Volume &AMP; Sentiment
                        <br>
                        <small>With Key Competitors</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Volume of positive, negative, and neutral sentiment for Verizon Wireless and key competitors.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a id="launch-app" href="javascript:ps_modals.launch(widget_sentimentCompetitors.modal);">
                            <i class="icon-resize-full icon-white"></i>
                        </a>
                    </div>
                </div>
                <div class="widget_holder" id="sentimentCompetitorsDiv"></div>
            </div>
            <!-- Sentiment Competitors END -->

        </div>

        <!-- end of widgets -->

        <!-- Start of modals -->
        <?php include_once ( "inc/modal.php"); ?>
        <!-- end of modals -->
    </div>

</body>

</html>
