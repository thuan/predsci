<?php include_once ( "inc/header.php"); include_once ( "inc/navigation.php"); ?>

<body id="dashboard_body">

    <div id="content">

        <div id="page_title">
            <h1>Wireless Social Pulse</h1>

            <ul>
                <li id="dashboard_lists">
                    <a href="dashboard-all.php">View All Dashboards</a>
                </li>
            </ul>

        </div>

        <div id="dashboard_content">

            <div class="metric-ticker">
                <!-- metrics widget -->
            </div>

            <div class="widget_container_holder">
                <!-- START: Twitter Activity -->
                <div class="widget_label">
                    <h3 class="pull-left">Twitter Activity Map
                        <br>
                        <small>Share of Voice on Twitter by City</small>
                    </h3>
                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a id="launch-app" href="javascript:ps_googlemaps.loadMap(definitions, true);">
                            <i class="icon-resize-full icon-white"></i>
                        </a>
                    </div>
                </div>
                <div class="widget_holder" id="maps_widget" style="position: relative; background-color: rgb(229, 227, 223); overflow: hidden;">

                </div>
                <!-- END: Twitter Activity -->
            </div>




            <div class="widget_container_holder">
                <div class="widget_stealth"></div>
                <!-- Share of Voice -->
            </div>

            <div class="widget_container_holder">
                <div class="widget_stealth"></div>
                <!-- Volume & Sentiment -->
            </div>

            <div class="widget_container_holder">
                <div class="widget_stealth"></div>
                <!-- Conversation Volume -->
            </div>

            <div class="widget_container_holder">
                <div class="widget_stealth"></div>
                <!-- Predefined Topic Volume-->
            </div>

            <div class="widget_container_holder">
                <div class="widget_label">

                    <h3 class="pull-left">Twitter Stream
                        <br>
                        <small>Tweets mentioning Verizon Wireless</small>
                    </h3>

                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A stream of tweets related to Verizon Wireless.">
                            <i class="icon-info-sign icon-white"></i>
                        </a>
                        <a href="#" id="launch-app">
                            <i isclicked="0" class="icon-resize-full icon-white" id="div_tweeterStream" data-toggle="modal" data-target="#twitterStreamModal"></i>
                        </a>

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
            <!-- twitter stream -->
        </div>

        <div class="widget_container_holder">
            <div class="widget_stealth"></div>
            <!-- Twitter Stream -->
        </div>

        <div class="widget_container_holder_long">
            <!-- Top Tweets-->
        </div>

        <div class="box kList widget_container_holder">
            <div id="keywordTrendingDiv">
                <div class="box kList widget_container_holder">
                    <!-- Keyword Frequency Starts-->
                    <div class="widget_label">
                        <h3 class="pull-left">Keyword Frequency
                            <br>
                            <small>Information on keyword frequency by volume of conversation.</small>
                        </h3>
                        <div class="pull-right">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Top keywords for Verizon Wireless network by volume of conversation.">
                                <i class="icon-info-sign icon-white"></i>
                            </a>
                        </div>
                    </div>

                    <div id="klist">
                        <div id="list"></div>
                    </div>
                    <!-- keyword-frequency ends-->
                </div>
            </div>
        </div>

    </div>

    <!-- end of widgets -->

    <!-- Start of modals -->
    <?php include_once ( "inc/modal.php"); ?>
    <!-- end of modals


    </div>

</body>
</html>