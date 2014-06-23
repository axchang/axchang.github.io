$(document).ready(function(){

	$("#ed_text_box").fadeOut();
	$("#rmsa").click(function(){
	  $("#ed_text_box").fadeIn();
	});
});


// <div style="display: none;" id="hiddenText">This is hidden</div>
// <a href="#" onclick="$('#hiddenText').show(); return false;">Click here to show hidden text</a>