$(function() {

	$(".connect_icon").hover( function(){
		$(this).css('cursor', 'pointer');
	});

	$("#linkedin").on("click", function(){
		window.open("https://www.linkedin.com/in/hchen15/");
	});

	$("#resume").on("click", function(){
		window.open("../resources/resume.pdf");
	});

	$("#email").on("click", function(){
		window.location.href = "mailto:hchen15@mit.edu";
	});

	$('#github').on("click", function(){
		window.open("https://github.com/hchen15")
	})

});