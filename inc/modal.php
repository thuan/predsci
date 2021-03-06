<!-- Modal -->
<div id="modal_widget" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <div class="timelabel-expand label">7 Days</div>


        <div id="pull-right">

            <div id="date-range-selector" class="btn-group date-range-selector open">
                <button class="btn dropdown-toggle btn-inverse" data-toggle="dropdown" data-period="hour" data-period-count="24">
                    24 hours<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a data-period="hour" data-period-count="24">24 hours</a></li>
                    <li><a data-period="day" data-period-count="7">7 days</a></li>
                    <li><a data-period="day" data-period-count="30">30 days</a></li>
                    <li><a data-period="day" data-period-count="90">90 days</a></li>
                </ul>
            </div>

            <a id="toggle1" class="hide" href="javascript:ps_utilities.toggleBarLineModal(widgetConversationVolumeTemp.modal)"><i class="icon line-swap"></i></a>
            <a id="toggle2" class="hide" href="javascript:ps_utilities.toggleBarLineModal(widgetPredefinedTopicVolume.modal)"><i class="icon line-swap"></i></a>
            <a id="toggle3" class="hide" href="javascript:ps_utilities.toggleBarLineModal(widgetLinkedinFollowers.modal)"><i class="icon line-swap"></i></a>
            <a id="toggle4" class="hide" href="javascript:ps_utilities.toggleBarLineModal(widgetLinkedinLikes.modal)"><i class="icon line-swap"></i></a>
            <a id="icon-info" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."><i class="icon-info-sign icon-white"></i></a>
        </div>

        <div id="modal-heading" class="pull-left">
            <h3>Modal header</h3>

            <small></small>
        </div>
        <div class="pull-left">
            <form id="conversation_volume_query" class="hide">
                <i class="query-icon icon-search"></i>
                <input class="pull-left chart-query" type="text" placeholder="Search Conversations">
            </form>
        </div>
        <div class="clearfix"></div>
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
        <div id='trending_terms_selectable_topics' class='selectable-topics'></div>
    </div>

</div>