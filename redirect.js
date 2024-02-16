document.addEventListener("DOMContentLoaded", function () {
  // Extract the path from the URL
  const path = window.location.pathname.substring(1);

  // Make a request to your API using the path
  const apiUrl = "https://us-central1-canonn-api-236217.cloudfunctions.net/query/fyi/" + path;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Replace the current state with the new URL
      window.history.replaceState({}, document.title, data.url);

      // Redirect the user to the returned URL
      window.location.replace(data.url);
    })
    .catch(error => {
      // Redirect to an error page if fetching data fails
      window.location.replace("thevoid");
      console.error("Error fetching data from API:", error);
      // Optionally, you can handle errors here
    });
});

