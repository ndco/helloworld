$(document).ready(function() { 

//Exc#1: Make Boarder
	$("img").css("border", "5px dashed lavender")

//Exc#2: Show Txt
	$("#button1").click(function() {
		$("#mytxt").show();
	});
//Exc#3: Hide Txt
	$("#button2").click(function() {
		$("#mytxt").hide();
	});

//Exc#4,5: Submit and Alert
	$(".userlogin").submit(function() {
		return alert("submitted!");
	});


//Exc#6: Fade In List
	$("#btn0").click(function() {
		$(".favList").fadeIn(2000);
	});

//Exc#7: Append New List
	$("#btn1").click(function() {
		// var addFav = $("#insertFav").val();
		// console.log(addFav);
		$("ul").append("<li>My New Fav</li>");
	});


//Exc#8: Show/Hide Boxes
	$("#btn2").click(function() {
		$("#box1").show();
	});

//Exc#9: Hover box with color
	$("#btn2").click(function() {
		$("#box1").slideDown("slow");
	});

	$("#box2").hover(function() {
		$(this).css("background-color", "yellow");
	}, function() {
		$(this).css("background-color", "lightyellow");
	});

//Exc#9: Hover box with size
	$("#box3").hover(function() {
		$(this).animate({width: '100%'}, 2000);
	}, function() {
		$(this).animate({width: '200px'}, 2000);
	});

});