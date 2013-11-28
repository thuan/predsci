<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="images/favicon.png">

    <title>Enterprise Solutions - Security Social Pulse</title>

    <!-- Bootstrap core CSS -->
    <link href="/responsive/css/bootstrap/bootstrap.css" rel="stylesheet">

    <!-- custom -->
    <!--link rel="stylesheet" type="text/css"  href="css/style.css" /-->
    <link href="http://fonts.googleapis.com/css?family=Titillium+Web:400,300,700" rel="stylesheet" type="text/css">
    <link href="http://code.google.com/apis/maps/documentation/javascript/examples/default.css" rel="stylesheet" type="text/css">
    <link href="/responsive/css/app_style.css" rel="stylesheet">

    <!-- dataTables -->
    <link rel="stylesheet" type="text/css" href="/responsive/css/bootstrap/jquery.dataTables.css"  />

    <!-- jChartFX -->
    <link rel="stylesheet" type="text/css" href="/responsive/css/jchart/jChartFX/jchartfx.css" />
    <link rel="stylesheet" type="text/css" href="/responsive/css/jchart/jChartFX/custom.css" />

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]-->
    <script src="/responsive/js/ie8-responsive-file-warning.js"></script>
    <!--[endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]-->
    <script src="/responsive/js/html5shiv.js"></script>
    <script src="/responsive/js/respond.min.js"></script>
    <!--[endif]-->
</head>

<body>

<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Verizon</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dashboard <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Create New Dashboard</a></li>
                        <li><a href="#">View All Dashboards</a></li>
						<li><a href="wireless-social-pulse.php">Wireless Social Pulse</a></li>
						<li><a href="consumer-mass-social-pulse.php">Consumer & Mass Social Pulse</a></li>	
						<li><a href="cloud-social-pulse.php">Cloud Social Pulse</a></li>	
						<li><a href="security-social-pulse.php">Security Social Pulse</a></li>
						<li><a href="m2m-social-pulse.php">M2M Social Pulse</a></li>	
						<li><a href="telematics-social-pulse.php">Telematics Social Pulse</a></li>							
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Users <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">View Clients</a></li>
                        <li><a href="#">View Departments</a></li>
                        <li><a href="#">View Users</a></li>
                        <li><a href="#">View CMS Users</a></li>
                    </ul>
                </li>
                <li><a href="#">Import Data</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><button type="button" class="btn btn-danger navbar-btn">Logout</button></li>
            </ul>
        </div>
    </div>
</div>

<div class="container">

    <!-- Metric ticker -->
    <div class="row">
        <div class="col-md-12">
            <div class="metric-ticker" id="metricticker"><div class="widget" id="metric"></div></div>
        </div>
    </div>

    <!-- row 01 -->
    <div class="row">

        <!-- widget 01: Share of Voice -->
        <div class="col-md-4">
            <div class="thumbnail verizon-widget">
                <div class="pull-left">
                    <h3>Share of Voice <br><small>With key Competitors</small></h3>
                </div>
                <div class="pull-right">
                    <a href="#" data-toggle="tooltip" data-placement="top" title=""
                       data-original-title="Share of Voice by media type for Verizon Wireless and key competitors.">
                        <span class="glyphicon glyphicon-info-sign" style="color: #fff"></span>
                    </a>
                    <a id="launch-app" href="javascript:ps_modals.launch(widget_pie.modal);" data-original-title="" title="">
                        <span class="glyphicon glyphicon-resize-full" style="color: #fff"></span>
                    </a>
                </div>

                <!-- start: jChartFX Sample -->
                <div class="row">
                    <div id="div_pie_chart" class="col-md-12 svg-container"></div>
                </div>
            </div>
        </div>

        <!-- widget 02: Volume & Sentiment -->
        <div class="col-md-4 barChartVS">
            <div class="thumbnail verizon-widget">
                <h3>Volume & Sentiment <br><small>Daily Volume & Sentiment</small></h3>

                <div class="row">
                    <div id="barChartDiv" class="col-md-12 svg-container"></div>
                </div>
                <div class="row">
                    <div class="col-md-12 verizon-widget-label">
                        <div class="pull-right">7 days</div>
                    </div>
                </div>
            </div>
        </div>
		
        <!-- widget 03: Conversation Volume -->
        <div id="conversationVolume" class="col-md-4 conversationVolume">
            <div class="thumbnail verizon-widget">
                <div class="pull-left">
                    <h3 title="Conversation Volume"><span></span><br><small></small></h3>
                </div>

                <div class="pull-right">
                    <a href="javascript:ps_utilities.toggleBarLine(widgetConversationVolume)">
                        <span class="glyphicon glyphicon-stats" style="color: #fff"></span>
                    </a>
                    <a id="tooltipp"  href="#" data-toggle="tooltip" data-placement="top" title=""
                       data-original-title="">
                        <span class="glyphicon glyphicon-info-sign" style="color: #fff"></span>
                    </a>
                    <a id="launch-app" href="javascript:ps_modals.launch(widgetConversationVolume.modal);" data-original-title="" title="">
                        <span class="glyphicon glyphicon-resize-full" style="color: #fff"></span>
                    </a>
                </div>

                <div class="row">
                    <div id="lineChartDiv" class="col-md-12 svg-container"></div>
                </div>
                <div class="row">
                    <div class="col-md-12 verizon-widget-label">
                        <div class="pull-right">7 days</div>
                        <div id="legend" class="pull-right">
                            <a href="#" id="conversationVolumeLegend" class="toggle-legend">Show legend</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>		

    </div>

    <!-- row 02 -->
    <div class="row">

        <!-- widget 02: Predefined Topic Volume  -->
        <div class="col-md-4">
            <div class="thumbnail verizon-widget">
                <h3>Predefined Topic Volume <br><small>With key Competitors</small></h3>

                <div class="row">
                    <div id="lineChartDiv2" class="col-md-12 svg-container"></div>
                </div>
                <div class="row">
                    <div class="col-md-12 verizon-widget-label">
                        <div class="pull-right">7 days</div>
                        <div id="legend2" class="pull-right">
                            <a href="#" id="predefinedTopicVolumeLegend" class="toggle-legend">Show legend</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		
         <!-- widget 02: LinkedIn Followers -->
        <div id="linkedinFollowers"  class="col-md-4 widget_container_holder linkedinFollowers">
            <div class="thumbnail verizon-widget widget_label">
                <div class="pull-left">
                    <h3 title="LinkedIn Followers"><span></span><br><small></small></h3>
                </div>
				
                <div class="pull-right">
                    <a href="javascript:ps_utilities.toggleBarLine(widgetLinkedinFollowers)">
                        <span class="glyphicon glyphicon-stats" style="color: #fff"></span>
                    </a>
                    <a id="tooltipp"  href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title=""
                       data-original-title="">
                        <span class="glyphicon glyphicon-info-sign" style="color: #fff"></span>
                    </a>
                    <a id="launch-app" href="javascript:ps_modals.launch(widgetLinkedinFollowers.modal);" data-original-title="" title="">
                        <span class="glyphicon glyphicon-resize-full" style="color: #fff"></span>
                    </a>
                </div>
                
                

                <div class="row">
                    <div id="lineChartDivLinkedin" class="col-md-12 svg-container widget_holder"></div>
                    <div class="timelabel timelabel-toptweets">7 days</div>
                </div>

            </div>
        </div>

        <!-- widget 03: LinkedIn Recommendations -->
        <div class="col-md-4">
            <div class="thumbnail verizon-widget">
                <h3 title="LinkedIn Recommendations">
                    LinkedIn Recommendations <br><small>Verizon Enterprise Solutions Company Page</small>
                </h3>

                <div class="row">
                    <div id="maps_widget" class="col-md-12 svg-container"></div>
                </div>

            </div>
        </div>	

    </div>

    <!-- row 03 -->
    <div class="row">

	    <!-- widget 01: LinkedIn Likes -->
        <div id="linkedInLikes" class="col-md-4 linkedInLikes">
            <div class="thumbnail verizon-widget">
                <div class="pull-left">
                    <h3 title="LinkedIn Likes"><span></span><br><small></small></h3>
                </div>

                <div class="pull-right">
                    <a href="javascript:ps_utilities.toggleBarLine(widgetConversationVolume)">
                        <span class="glyphicon glyphicon-stats" style="color: #fff"></span>
                    </a>
                    <a id="tooltipp"  href="#" data-toggle="tooltip" data-placement="top" title=""
                       data-original-title="">
                        <span class="glyphicon glyphicon-info-sign" style="color: #fff"></span>
                    </a>
                    <a id="launch-app" href="javascript:ps_modals.launch(widgetLinkedinLikes.modal);" data-original-title="" title="">
                        <span class="glyphicon glyphicon-resize-full" style="color: #fff"></span>
                    </a>
                </div>

                <div class="row">
                    <div id="linkedInLikesDiv" class="col-md-12 svg-container"></div>
                </div>

                <div class="row">
                    <div class="col-md-12 verizon-widget-label">
                        <div class="pull-right">7 days</div>
                    </div>
                </div>

            </div>
        </div>

        <!-- widget 02: Volume & Sentiment -->
        <div class="col-md-4 barChartVS">
            <div class="thumbnail verizon-widget">
                <h3>Volume & Sentiment <br><small>With Key Competitors</small></h3>
                <div class="row">
                    <div id="sentimentCompetitorsDiv" class="col-md-12 svg-container"></div>
                </div>
                <div class="row">
                    <div class="col-md-12 verizon-widget-label">
                        <div class="pull-right">7 days</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- widget 03: Trending Terms -->
        <div class="col-md-4">
            <div class="thumbnail verizon-widget">
                <h3>Trending Terms<br>
                            <small>Terms Trending On Twitter This Hour</small></h3>
                <div class="row">
                    <div id="sentimentCompetitorsDiv" class="col-md-12 svg-container"></div>
                </div>
                <div class="row">
                    <div class="col-md-12 verizon-widget-label">
                        <div class="pull-right">7 days</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
<!-- /.container -->

<script language="javascript" src="lib/jquery/jquery-1.10.2.min.js" type="text/javascript"></script>
<script language="javascript" src="lib/jquery/jquery-ui.js" type="text/javascript"></script>
<script language="javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=drawing"  type="text/javascript"></script>

<script type="text/javascript" src="lib/jchart/jchartfx.system.js"></script>
<script type="text/javascript" src="lib/jchart/jchartfx.coreVector.js"></script>
<script type="text/javascript" src="lib/jchart/jchartfx.animation.js"></script>
<script type="text/javascript" src="lib/jchart/jchartfx.advanced.js"></script>
<script type="text/javascript" src="lib/jchart/jchartfx.vectorTemplates.js"></script>
<script type="text/javascript" src="lib/jchart/jchartfx.handdrawn.js"></script>
<script type="text/javascript" src="lib/underscore-min.js"></script>

<script language="javascript" src="js/ps_utilities.js" type="text/javascript"></script>
<script language="javascript" src="js/ps_graphDefinitions.js" type="text/javascript"></script>
<script language="javascript" src="js/ps_googlemaps.js" type="text/javascript"></script>
<script language="javascript" src="js/ps_twitterUtils.js" type="text/javascript"></script>

<script language="javascript" src="lib/bootstrap/bootstrap.min.js" type="text/javascript"></script>
<script language="javascript" src="lib/bootstrap/jquery.dataTables.min.js" type="text/javascript"></script>
<script language="javascript" src="lib/bootstrap/dataTables.bootstrap.js" type="text/javascript"></script>
<script language="javascript" src="lib/timeago/jquery.timeago.js" type="text/javascript"></script>

<script language="javascript" src="js/modals.js" type="text/javascript"></script>
<script language="javascript" src="js/insights.js" type="text/javascript"></script>

<script language="javascript" src="js/telematics-social-pulse.js" type="text/javascript"></script>

</body>
</html>
