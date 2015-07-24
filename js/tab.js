$(document).ready(function() {

	//Default Action
	$(".tab-content").hide(); //Hide all content
	$("ul.tab-nav li:first").addClass("active").show(); //Activate first tab
	$(".tab-content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tab-nav li").click(function() {
		$("ul.tab-nav li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab-content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).show(); //Fade in the active content
		return false;
	});

});