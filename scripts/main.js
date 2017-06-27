onload = function() {
  var login = document.getElementById("login");

  login.onclick = function() {
    console.log("click");
    var redirectUrl = chrome.identity.getRedirectURL();
    var clientId = "9cdd82b168ef4db9bfde89bac62bfdc8";
    var authUrl = "https://instagram.com/oauth/authorize/?" +
        "client_id=" + clientId + "&" +
        "response_type=token&" +
        "redirect_uri=" + encodeURIComponent(redirectUrl);
 
    chrome.identity.launchWebAuthFlow({url: authUrl, interactive: true},
        function(responseUrl) {
      console.log(responseUrl);
      var accessToken = responseUrl.substring(responseUrl.indexOf("=") + 1);
      console.log(accessToken);
    });
  };
};