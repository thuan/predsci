// Feel free to rewrite the thumbnail script to match your expanded script if needed.
/*global $:false*/
function gettweets(id, view, API) {
	var speed = 1000 + (Math.random()*100);
	$('#'+ id).vscroller({speed: speed, tweetfeed: API, stay: 2500, unique: id});
}