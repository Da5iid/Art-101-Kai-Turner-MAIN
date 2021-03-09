console.log("loaded lab 2 js");

var rawData;
var complete = false;
//$("#activate").click(function() {getAPI()});

$("#activate").click(function() {getAPI()});
// Using the core $.ajax() method
function getAPI() {
  complete = false
  ajax();
}

function ajax() {
  $.ajax({
      url: "https://xkcd.com/info.0.json",
      data: {},
      type: "GET",
      dataType : "json",
      success: function(data) {
        rawData = data;
        console.log(data);
        parseJson(data);

      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      },
      complete: function() {
        complete = true;
        console.log("done n done");
      }
  })
}

function parseJson(data) {
  let imgLink = rawData.img;
  let desc = rawData.alt;
  let title = rawData.safe_title;
  let date = rawData.month + "-" + rawData.day + "-" + rawData.year;
  console.log(imgLink);
  console.log(desc);
  $("#apodImage").attr("src",imgLink);
  $("#apodImage").attr("alt",desc);
  $("#apodDesc").html(desc);
  $("#apodDate").html(date);
  $("#apodTitle").html(title);
}
