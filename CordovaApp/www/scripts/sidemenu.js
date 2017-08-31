
$('.showMenu').show();
		$('.showMenuClose').hide()
$("a.showMenu").click(function () {
	var sidemenu = document.getElementById("sidemenu");

	if (sidemenu.style.left == "-200px") {
		sidemenu.style.left = "0px";
		$('[data-role="page"]').addClass('modalBackground');
		$('.showMenu').hide()
		$('.showMenuClose').show();
	}
	else {
		sidemenu.style.left = "-200px";
		$('[data-role="page"]').removeClass('modalBackground');
		$('.showMenu').show();
		$('.showMenuClose').hide()
	}
});
$("a.showMenuClose").click(function () {
	var sidemenu = document.getElementById("sidemenu");

	if (sidemenu.style.left == "-200px") {
		sidemenu.style.left = "0px";
		$('[data-role="page"]').addClass('modalBackground');
		$('.showMenu').hide()
		$('.showMenuClose').show();
	}
	else {
		sidemenu.style.left = "-200px";
		$('[data-role="page"]').removeClass('modalBackground');
		$('.showMenu').show();
		$('.showMenuClose').hide()
	}
});


function LoadPageOne() {
	window.location.href = '#pageone'
	if (sidemenu.style.left == "-200px") {
		sidemenu.style.left = "0px";
		$('[data-role="page"]').addClass('modalBackground');
		$('.showMenu').show();
		$('.showMenuClose').hide()
	}
	else {
		sidemenu.style.left = "-200px";
		$('[data-role="page"]').removeClass('modalBackground');
		$('.showMenu').show();
		$('.showMenuClose').hide()
	}
}

function LoadPageTwo() {
	window.location.href = '#pagetwo'
	if (sidemenu.style.left == "-200px") {
		sidemenu.style.left = "0px";
		$('[data-role="page"]').addClass('modalBackground');
		$('.showMenu').show();
		$('.showMenuClose').hide()
	}
	else {
		sidemenu.style.left = "-200px";
		$('[data-role="page"]').removeClass('modalBackground');
		$('.showMenu').show();
		$('.showMenuClose').hide()
	}
}
