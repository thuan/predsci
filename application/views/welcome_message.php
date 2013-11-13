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
    <script type="text/javascript" src="js/app/ajaxCalls.js"></script>
    <script type="text/javascript" src="js/app/ps_utilities.js"></script>
    <script type="text/javascript" src="js/app/ps_graphdefinitions.js"></script>
    <script type="text/javascript" src="js/app/twitterStream.js"></script>
    <script type="text/javascript" src="js/app/pscroller.js"></script>
    
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
                    <h3 class="pull-left">Twitter Stream
                        <br />
                        <small>Tweets mentioning Verizon Wireless</small>
                    </h3>
                </div>
                <div id="pscroller" style="height: 285px;">
                </div>
            <div id="grafico" style="width:600px;height:400px"></div>
            <p class="footer">Page rendered in
                <strong>{elapsed_time}</strong>seconds</p>
        </div>
    </div>
</body>

</html>
