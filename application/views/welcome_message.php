
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