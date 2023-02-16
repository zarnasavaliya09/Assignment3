function fetchJson() {
    $("#team").text("Loading...");
    $.getJSON("team.json", function (data) {
      setTimeout(function () {
        $("#team").empty();
        $.each(data, function (key, value) {
          var personName = document.createElement("h2");
          personName.textContent = value.name;
  
          var personPos = document.createElement("h5");
          personPos.textContent = value.position;
  
          var personBio = document.createElement("p");
          personBio.textContent = value.bio;
  
          const memberDiv = $("<div>").append(personName, personPos, personBio);
          $("#team").append(memberDiv);
        });
      }, 3000);
    });
  }
  function fetchAjax() {
    $.ajax({
      method: "GET",
      url: "team.json",
      dataType: "JSON",
      beforeSend: function () {
        // Display "Loading..." message in #team div
        $("#team").text("Loading...");
      },
      success: function (data, value) {
        setTimeout(function () {
          $("#team").empty();
          $.each(data, function (key, value) {
            var personName = document.createElement("h2");
            personName.textContent = value.name;
  
            var personPos = document.createElement("h5");
            personPos.textContent = value.position;
  
            var personBio = document.createElement("p");
            personBio.textContent = value.bio;
  
            const memberDiv = $("<div>").append(personName, personPos, personBio);
            $("#team").append(memberDiv);
          });
        }, 3000);
      },
      error: function (error) {
        $("#team").append("The content could not be retrieved");
      }
    });
  }
  $(document).ready(function () {
    //fetchJson();
    fetchAjax();
  });
  