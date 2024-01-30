document.addEventListener("DOMContentLoaded", function () {
  // Extract the path from the URL
  const path = window.location.pathname.substring(1);

  // Make a request to your API using the path
  const apiUrl = "https://us-central1-canonn-api-236217.cloudfunctions.net/query/fyi/" + path;
  //const apiUrl = "http://192.168.0.72:8080/fyi/" + path;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Redirect the user to the returned URL
      window.location.href = data.url;
    })
    .catch(error => {
      window.location.href = "thevoid"
      console.error("Error fetching data from API:", error);
      // Optionally, you can handle errors here
    });
});
