// Initialize Firebase
    var config = {
      apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
      authDomain: "fir-recent-user.firebaseapp.com",
      databaseURL: "https://fir-recent-user.firebaseio.com",
      storageBucket: "fir-recent-user.appspot.com"
    };

    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var trainName = "";
    var destination = "";
    var frequency = 0;
    var firstTrain = "";

    // Capture Button Click
    $("#add-train").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      trainName = $("#name-input").val().trim();
      destination = $("#location-input").val().trim();
      frequency = $("#minute-input").val().trim();
      firstTrain = $("#hour-input").val().trim();

      database.ref().set({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        firstTrain: firstTrain
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().trainName);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().frequency);
      console.log(snapshot.val().firstTrain);

      // Change the HTML to reflect
      $("#trainName-display").html(snapshot.val().trainName);
      $("#destination-display").html(snapshot.val().destination);
      $("#frequency-display").html(snapshot.val().frequency);
      $("#-display").html(snapshot.val().);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });