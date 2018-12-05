function getOS() 
{
  // GET THE OPERATING SYSTEM THROUGH THE USERAGENT
  var OSName = "Unidentified Operating System";
  if (window.navigator.userAgent.indexOf("Android") != -1) OSName="Android";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName="Windows 10";
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
  if (window.navigator.userAgent.indexOf("Mac") != -1) OSName="Mac";
  if (window.navigator.userAgent.indexOf("Linux") != -1) OSName="Linux";
  if (window.navigator.userAgent.indexOf("IOS") != -1) OSName="iOS";
  if (window.navigator.userAgent.indexOf("FreeBSD") != -1) OSName="FreeBSD";

  // IF THE OS IS ANDROID, ALERT THE USER WITH A PLACEHOLDER ALERT BOX
  if (OSName == "Android")
  {
    // PLACEHOLDER ALERT
    alert("You are on "+OSName);
    // TODO -> DISPLAY A MESSAGE ON THE WEBPAGE
  }
} 
