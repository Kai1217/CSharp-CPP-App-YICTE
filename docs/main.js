function getOS() 
{
  var OSName = "Unidentified Operating System";
  if (window.navigator.userAgent.indexOf("Android") != -1) OSName="Android";

  if (OSName == "Android")
  {
    alert("You are on "+OSName);
    // TODO -> DISPLAY A MESSAGE ON THE WEBPAGE
  }
} 
