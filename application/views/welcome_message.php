
<?php
    include_once ("inc/header.php");
    include_once ("inc/navigation.php");
?>





<body id="dashboard_body">

    <?php include_once ("inc/navigation.php"); ?>

    <div id="content">

        <div id="page_title">
            <h1>Wireless Social Pulse</h1>

            <ul>
                <li id="dashboard_lists"><a href="dashboard-all.php">View All Dashboards</a></li>
            </ul>

        </div>

        <div id="dashboard_content">

            <div class="metric-ticker">
                <div class="widget">
                </div>
            </div>



            <div class="widget_container_holder">
                
                <div class="widget_label">

                    <h3 class="pull-left">Twitter Activity Map<br>
                        <small>Share of Voice on Twitter by City</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:psgooglemaps.LoadMap('modal-widget-body',true);"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="maps_widget"></div>
            </div>




            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">
                    <h3 class="pull-left">Share of Voice<br>
                        <small>With key Competitors</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Share of Voice by media type for Verizon Wireless and key competitors."><i class="icon-info-sign icon-white"></i></a>
                        <a id="div_Chart1" data-toggle="modal" data-target="#modal_widget"><!-- <a id="launch-app" href="javascript:UILayout.WidgetLaunch('modal-widget-body', 'loadCustomPieChart')"> --><i class="icon-resize-full icon-white"></i></a>

                    </div>
                </div>
                <div class="widget_holder" id="div_pie_chart"></div>
            </div>




            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">
                    <h3 class="pull-left">Volume & Sentiment<br>
                        <small>Daily Volume & Sentiment</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sentiment of conversation for all Verizon Wireless data. Sentiment analysis conducted by Clarabridge with a score between -5 and +5."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:UILayout.WidgetLaunch('modal-widget-body', 'loadChart')"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="chart_div"></div>
            </div>




            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">
                    <h3 class="pull-left">Conversation Volume<br>
                        <small>by Media Type</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:UILayout.WidgetLaunch('div_pie_chart')"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="div_multi_chart"></div>
            </div>



            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">
                    <h3 class="pull-left">Predefined Topic Volume<br>
                        <small>by Volume</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:UILayout.WidgetLaunch('div_pie_chart')"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="div_multi_chart2"></div>
            </div>


            <div class="widget_container_holder">

                <div class="widget_label">

                    <h3 class="pull-left">Twitter Stream<br>
                        <small>Tweets mentioning Verizon Wireless</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A stream of tweets related to Verizon Wireless."><i class="icon-info-sign icon-white"></i></a>
                        <a href="#" id="launch-app"><i isclicked="0" class="icon-resize-full icon-white" id="div_tweeterStream" data-toggle="modal" data-target="#twitterStreamModal"></i></a>

                    </div>

                </div>


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



            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">

                    <h3 class="pull-left">Twitter Stream<br>
                        <small>Tweets mentioning Verizon Wireless</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A stream of tweets related to Verizon Wireless."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:UILayout.WidgetLaunch('div_pie_chart')"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="div_multi_chart3"></div>
            </div>


            <!-- Twitter Stream div Starts -->
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
            </div>
            <!-- Twitter stream div Ends -->



            <div class="box kList widget_container_holder">
                <!-- Keyword Frequency Starts-->
                <div class="widget_label">

                    <h3 class="pull-left">Keyword Frequency<br>
                        <small>Information on keyword frequency by volume of conversation.</small>
                    </h3>
                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Top keywords for Verizon Wireless network by volume of conversation."><i class="icon-info-sign icon-white"></i></a>


                    </div>

                </div>

                <div id="klist">
                    <div class="klist-fe">
                        <ul class="keywordlist">
                            <li class="title" id="smartList">Features</li>
                        </ul>
                    </div>
                    <div class="klist-fe">
                        <ul class="keywordlist">
                            <li class="title" id="featList">Smartphones</li>
                        </ul>
                    </div>
                    <div class="klist-fe">
                        <ul class="keywordlist">
                            <li class="title" id="tabletList">Tablets</li>
                        </ul>
                    </div>
                </div>
                <!-- keyword-frequency ends-->
            </div>







            <!--


            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">

                    <h3 class="pull-left">Volume & Sentiment<br>
                        <small>With Key Competitors</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:UILayout.WidgetLaunch('div_pie_chart')"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="div_multi_chart4"></div>
            </div>





            <div class="widget_container_holder"><div class="widget_stealth"></div>
                <div class="widget_label">

                    <h3 class="pull-left">Top Tweets<br>
                        <small>Most Engaging Verizon Wireless Tweets</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:UILayout.WidgetLaunch('div_pie_chart')"><i class="icon-resize-full icon-white"></i></a>

                    </div>

                </div>
                <div class="widget_holder" id="chart_div2"></div>
            </div>

            -->


        </div>

        <!-- end of widgets -->






        <!-- Modal Starts -->
        <div id="myModal" class="modal hide fade myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 id="myModalLabel"></h3>
            </div>
            <div class="modal-body" id="div_modal">
                <p>One fine body…</p>
            </div>
        </div>
        <!-- Modal Ends -->





        <!-- Twitter Modal Starts -->
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
        <!-- Twitter Modal Ends -->







        <!-- Twitter stream Modal Starts -->
        <div id="twitterStreamModal" class="modal hide fade twitterSModal" tabindex="-1" role="dialog" aria-labelledby="twitterModalLabel" aria-hidden="true">
            <div class="modal-header">
                <div id="right-side">
                    <a id="icon-info" data-toggle="tooltip" data-placement="top" title="" data-original-title="A stream of tweets related to Verizon Wireless."><i class="icon-info-sign icon-white"></i></a>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <h3>Twitter Stream<br>
                    <small>Tweets mentioning Verizon Wireless</small>
                </h3>
            </div>
            <ul class="headng">
                <li class="lft">Tweets from Verizon Wireless Handles</l>
                <li class="rht">Tweets mentioning Verizon Wireless</li>
            </ul>
            <div class="modal-body" id="twitterStream_div_modal">

            </div>
        </div>
        <!-- Twitter Stream Modal Ends -->








        <!-- Modal -->
        <div id="modal_widget" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

            <div class="modal-header">
                <div id="right-side">
                    <a id="icon-info" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                    <div class="label label-inverse">7 Days</div>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                </div>

                <div id="modal-heading">
                    <h3>Modal header</h3>
                    <small></small>
                </div>

                <div id="insight_container" class="dropdown">
                    <a class="btn dropdown-toggle btn-inverse" data-toggle="dropdown" href="#">
                        Insight History
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu">
                        <p class="insight"><span class="date">September 26, 2013</span>T-Mobile's Twitter conversation
                            volume remained relatively consistent, with tweets about the company no longer carrying
                            BlackBerrys trending in conversation.</p>

                        <p class="insight"><span class="date">September 25, 2013</span>T-Mobile's Twitter conversation
                            volume rose 52%, and News coverage increased 208%, primarily due to reports of a potential
                            merger with Sprint.</p>

                        <p class="insight"><span class="date">September 24, 2013</span>Sprint's Twitter conversation
                            volume increased by 32%, largely due to a syndicated press release about Sprint and
                            Techstars launching startup accelerator in Kansas City trending in conversation in both
                            Twitter and News reports.</p>

                        <p class="insight"><span class="date">September 23, 2013</span>T-Mobile's Twitter conversation
                            volume remained relatively consistent; promotional tweets to celebrate the 5th year of
                            collaboration between Android and T-Mobile gained traction on Twitter, but did not impact
                            total conversation volume.</p>

                        <p class="insight"><span class="date">September 22, 2013</span>AT&amp;T's Twitter conversation
                            volume increased by 124% on Friday (09/20) with #ItCanWait continuing to trend as users
                            pledged not to text and drive. Twitter volume was also driven by tweets about the new iPhone
                            5S becoming available on AT&amp;T's network that day.</p>
                        <button class="btn insights-history-see-more btn-inverse">See more</button>
                    </div>
                </div>




            </div>
            <div class="modal-body">
                <div id="modal-widget-body"></div>
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <div id="modal-stealth"></div>
            </div>
        </div>


    </div>

</body>

<?php
    include_once ("inc/footer.php");
?>