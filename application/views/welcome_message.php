<?php
    include_once ("inc/header.php");
    include_once ("inc/navigation.php");
?>
<body id="dashboard_body">

    <div id="content">

        <div id="page_title">
            <h1>Wireless Social Pulse</h1>
            <ul><li id="dashboard_lists"><a href="dashboard-all.php">View All Dashboards</a></li></ul>
        </div>

        <div id="dashboard_content">

            <div class="metric-ticker" id="metricticker" >
                <div class="widget" id ="metric"></div>
            </div>

            <div class="widget_container_holder">
                <!-- START: Twitter Activity -->
				<div class="widget_label">
					<h3 class="pull-left">Twitter Activity Map<br>
						<small>Share of Voice on Twitter by City</small>
					</h3>
					<div class="pull-right">
						<a href="#" data-toggle="tooltip" data-placement="top" title=""
						   data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i
								class="icon-info-sign icon-white"></i></a>
						<a id="launch-app" href="javascript:ps_googlemaps.loadMap(definitions, true);"><i
								class="icon-resize-full icon-white"></i></a>
					</div>
				</div>
				<div class="widget_holder" id="maps_widget"></div>
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
							class="icon-info-sign icon-white"></i></a> <a id="div_Chart1"
							data-toggle="modal" data-target="#modal_widget"> <!-- <a id="launch-app" href="javascript:UILayout.WidgetLaunch('modal-widget-body', 'loadCustomPieChart')"> -->
							<i class="icon-resize-full icon-white"></i></a>

					</div>
				</div>

				<div class="widget_holder" id="div_pie_chart"></div>
			</div>
            
            <div class="widget_container_holder">
                <!-- Volume & Sentiment -->
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

            <div class="widget_container_holder" id="conversationVolume" >
                <div class="widget_label">
                    <h3 class="pull-left">
                        <span></span>
                        <small></small>
                    </h3>
                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:ps_modals.launch(widgetConversationVolume.modal)"><i class="icon-resize-full icon-white"></i></a>

                    </div>
                </div>
                <div class="widget_holder" id="lineChartDiv"></div>
            </div>

            <div class="widget_container_holder" id="predefinedTopicVolume">
                <!-- Predefined Topic Volume-->
                <div class="widget_label">
                    <h3 class="pull-left">
                        <span></span>
                        <small></small>
                    </h3>
                    <div class="pull-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
                        <a id="launch-app" href="javascript:ps_modals.launch(widgetPredefinedTopicVolume.modal)"><i class="icon-resize-full icon-white"></i></a>

                    </div>
                </div>
                <div class="widget_holder" id="lineChartDiv2"></div>
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

			<!-- <div class="widget_container_holder"> 
            </div>-->

            <div class="widget_container_holder_long">
                <!-- Top Tweets-->
            </div>

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
				<div id="klist"><div  id="list"></div></div>
			</div>

        </div>

        <!-- end of widgets -->
		
		<!-- Start of modals -->
        <?php
        include_once ("inc/modal.php");
        ?>
		<!-- end of modals


    </div>

</body>
</html>
