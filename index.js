$(window).load(function() {

	// jQuery Loading div that appears at the footer of page
	$.mobile.loading().hide();

	// Get rid of browser nav (hacky)
	$('body').scrollTop($(this)[0].scrollHeight);

	// Fade page into view
	$("#landing").fadeIn(3000);		

	$(".my-section").on('swipeleft', function () {
		var section = '#';
		section += $(this).data('next');
		$.mobile.changePage(section);
	});

	$(".my-section-pages").on('swiperight', function() {
		var page = '#';
		page += $(this).data('prev');
		$.mobile.changePage(page, { reverse: true } );
	});

});