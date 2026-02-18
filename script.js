$(document).ready(function () {
  $("#navLink").click(function () {
    location.reload(true);
  });
  $("#numQInput").on("input", () => {
    let numQ = Number.parseInt($("input[name='numQ']").val());
    if (!numQ) {
      $("#results").empty();
      return;
    }
    let resultsStr =
      "<div id='resultsHeader' class='row bg-primary'><div>Number Wrong</div><div>Percent</div></div><div id='resultsRows'>";
    for (let i = 0; i <= numQ; i++) {
      let numRight = numQ - i;
      let percent = Math.round((numRight / numQ) * 100);
      resultsStr += `<div class='row bg-${i % 2 == 0 ? "secondary" : "primary"}'><div>${i}</div><div>${percent}%</div></div>`;
    }
    resultsStr += "</div></div>";
    $("#results").empty();
    $("#results").append(resultsStr);
  });
});
