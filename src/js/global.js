/*global $*/
var win = $(window);
win.on("load", function () {
	$("#loader").fadeOut(500);
});
"use strict";
$(document).ready(function () {
	var menu = $("#menu"),
		topMenu = $("#top-menu"),
		dropDownLink = $(".drop-down"),
		dropDownLinkActive = $(".ac"),
		dropDownList = $(".drop-menu"),
		body = $("body"),
		bars = $("#bars"),
		searchBox = $("#search-box");
	
	// bars on click menu display
	bars.on("click", function () {
		menu.slideToggle(500);
	});
	
	// drop down functions
	if (bars.css("display") === "block") {
		dropDownLink.addClass("ac");
	} else {
		dropDownLink.removeClass("ac");
	}
	
	dropDownLink.on("click", function () {
		if (dropDownLink.hasClass("ac")) {
			dropDownList.slideToggle(100);
		}
	});
	
	// search icon on click
	$("#search-icon").on("click", function () {
		$("#search-box").slideToggle(300);
	});
	
	// on scroll functions
	win.on('scroll', function () {
		// nav changes on scroll
		if (body.width() >= 560 && win.scrollTop() >= 300) {
			topMenu.slideUp(400);
			searchBox.css("top", "70px");
		} else if (body.width() >= 560 && win.scrollTop() < 300) {
			topMenu.slideDown(400);
			searchBox.css("top", "110px");
		}
	});
	
	// on resize functions
	win.on("resize", function () {
		// drop down
		if (bars.css("display") === "block") {
			dropDownLink.addClass("ac");
			dropDownList.css("display", "none");
			menu.css("display", "none");
			searchBox.css("top", "70px");
		} else {
			dropDownLink.removeClass("ac");
			dropDownList.css("display", "block");
			menu.css("display", "block");
			searchBox.css("top", "110px");
		}
	});
});