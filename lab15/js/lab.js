console.log("I am Linked!");

$("#activate").click(function() {getAPI()});
//$("#button").click(function() {setUpLoop()});

var output;
function getAPI() {
  output = $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: {
      api_key: "DEMO_KEY"
    },
    dataType: "ajax",

    success: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
      console.log("completed the request!")
    },
    failure: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    },
    complete: function(xhr, status) {
      console.log("request is complete")
    }
  })
  //console.log(output);
}

function logData(data) {
  console.log(data);
  console.log("completed the request!")
}

function errData(jqXHR, textStatus, errorThrown) {
  console.log("Error:", textStatus, errorThrown);
}
