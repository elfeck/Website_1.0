function activateContent(index) {
	if(index == 1) {
		fadeIn('<nav id="main_right_upper"></nav>');
		fadeIn('<nav id="main_right_lower"></nav>');
	}
};

function deactivateContent(index) {
	if(index == 1) {
		fadeOut("#main_right_upper");
		fadeOut("#main_right_lower");
	}
};

function fadeIn(element) {
	$(element).hide().appendTo("#main_right").fadeIn(200);
};

function fadeOut(id) {
	$(id).fadeOut(200, function() { $(this).remove();});
};