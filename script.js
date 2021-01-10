$(document).ready(function () {
	$("#navLink").click(function () {
		location.reload(true);
	});
	$("form").submit(function (e) {
		e.preventDefault();
		$("#results").empty();
		let numQ = $("input[name='numQ']").val();
		$("#results").append(
			"<div id='resultsRow' class='row bg-primary'><div class='col-6'>Number Wrong</div><div class='col-6'>Percent</div></div>"
		);
		for (let i = 0; i <= numQ; i++) {
			let numRight = numQ - i;
			let percent = Math.round(numRight / numQ * 100);
			if (i % 2 == 0) {
				$("#results").append(
					"<div class='row bg-secondary'><div class='col-6'>" + i + "</div><div class='col-6'>" + percent + "%</div></div>"
				);
			}
			else {
				$("#results").append(
					"<div class='row bg-primary'><div class='col-6'>" + i + "</div><div class='col-6'>" + percent + "%</div></div>"
				);
			}
		}
	});
});
