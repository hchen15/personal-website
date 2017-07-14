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

	$('#experienceTab').on('click', function() {
        $.ajax({
            url: '/experience',
            success: function(data) {
                window.location.assign("/experience");
            }
        });
    });

    $('#homeTab').on('click', function() {
        $.ajax({
            url: '/',
            success: function(data) {
                window.location.assign("/");
            }
        });
    });

    $('#connectTab').on('click', function() {
        $.ajax({
            url: '/connect',
            success: function(data) {
                window.location.assign("/connect");
            }
        });
    });

    $('#projectTab').on('click', function() {
        $.ajax({
            url: '/projects',
            success: function(data) {
                window.location.assign("/projects");
            }
        });
    });

});