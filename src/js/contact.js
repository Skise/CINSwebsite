/*global $, FormData*/
function submitForm() {
	"use strict";
	var btn = $("#mybtn"),
		status = $("#status"),
		name = $("#n"),
		email = $("#e"),
		msg = $("#m");
	
	btn.attr("disabled", true);
	status.html("please wait");
	
	var formdata = new FormData();
	formdata.append("n", name.val());
	formdata.append("e", email.val());
	formdata.append("m", msg.val());
	
	var ajax = new XMLHttpRequest();
	if (name.val() === '' || email.val() === '' || msg.val() === '') {
		status.html('<i class="fa fa-exclamation-circle" aria-hidden="true"></i>' + 'please fill all fields.');
		status.addClass("error");
		btn.attr("disabled", false);
	} else {
		status.removeClass("error");
		ajax.open("POST", "contact.php");
		ajax.onreadystatechange = function () {
			if (ajax.readyState === 4 && ajax.status === 200) {
				if (ajax.responseText === "success") {
					status.html('<i class="fa fa-check" aria-hidden="true"></i>' + 'Thanks, your message was sent successfully');
				} else {
					status.html(ajax.responseText);
					btn.attr("disabled", false);
				}
			}
		};
		ajax.send(formdata);
	}
}