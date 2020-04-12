function showHide(x) {
  var pageElements = [displayedPanel = document.getElementById('panel1ID'), HiddenMap = document.getElementById('mapID'), HiddenMapIcon = document.getElementById('closeMapIconID'), tf1 = document.getElementById('typeForm1'), tf2 = document.getElementById('typeForm2'), about = document.getElementById('aboutID'), eventList = document.getElementById('eventsLister')];
  pageElements.forEach(function (pageElement) {
    pageElement.style.display = 'none';
  })
  if (x == 'panel1') {
    HiddenMap.style.display = 'block';
    HiddenMapIcon.style.display = 'block';
  } else if (x == 'addEvents') {
    tf1.style.display = 'block';
  } else if (x == 'contactUs') {
    tf2.style.display = 'block';
  } else if (x == 'aboutID') {
    about.style.display = 'flex';
  } else if (x == 'findEvents') {
    eventList.style.display = 'flex';
  } else {
    displayedPanel.style.display = 'flex';
  }
}

function showHideNav() {
  var showHide = document.getElementById('ulID1');
  if (showHide.style.display == 'none') {
    showHide.style.display = 'block';
  } else {
    showHide.style.display = 'none';
  }
}

// Start of Typeform embeded code.

(function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) } })()

// End of Typeform embeded code.

function switchDayCache() {
  var x = localStorage.getItem("firstDay");
  if (x == 'Sunday') {
    switchDay('Sunday');
  } else if (x == 'Saturday') {
    switchDay('Saturday');
  } else if (x == 'Monday') {
    switchDay('Monday');
  } else {
    switchDay('Monday');
  }
}

function switchDay(x) {
  var sundayFirst = document.querySelectorAll(".firstSunday"), sundayLast = document.querySelectorAll(".lastSunday"), saturdayFirst = document.querySelectorAll(".firstSaturday"), saturdayLast = document.querySelectorAll(".lastSaturday"), sundayFirstTitle = document.querySelectorAll(".firstSundayTitle"), sundayLastTitle = document.querySelectorAll(".lastSundayTitle"), saturdayFirstTitle = document.querySelectorAll(".firstSaturdayTitle"), saturdayLastTitle = document.querySelectorAll(".lastSaturdayTitle");
  //First Month
  var noneArray = [sundayFirst[0], sundayFirstTitle[0], sundayLast[0], sundayLastTitle[0], saturdayFirst[0], saturdayFirstTitle[0], saturdayLast[0], saturdayLastTitle[0]];
  noneArray.forEach(function (turnOff) {
    turnOff.style.display = "none";
  })
  //Second Month
  var noneArray1 = [sundayFirst[1], sundayFirstTitle[1], sundayLast[1], sundayLastTitle[1], saturdayFirst[1], saturdayFirstTitle[1], saturdayLast[1], saturdayLastTitle[1]];
  noneArray1.forEach(function (turnOff1) {
    turnOff1.style.display = "none";
  })
  if (x == 'Sunday') {
    //First Month
    noneArray[0].style.display = "block";
    noneArray[1].style.display = "block";
    noneArray[6].style.display = "block";
    noneArray[7].style.display = "block";
    //Second Month
    noneArray1[0].style.display = "block";
    noneArray1[1].style.display = "block";
    noneArray1[6].style.display = "block";
    noneArray1[7].style.display = "block";
    localStorage.setItem("firstDay", "Sunday");
  } else if (x == 'Saturday') {
    //First Month
    noneArray[0].style.display = "block";
    noneArray[1].style.display = "block";
    noneArray[4].style.display = "block";
    noneArray[5].style.display = "block";
    //Second Month
    noneArray1[0].style.display = "block";
    noneArray1[1].style.display = "block";
    noneArray1[4].style.display = "block";
    noneArray1[5].style.display = "block";
    localStorage.setItem("firstDay", "Saturday");
  } else if (x == 'Monday') {
    //First Month
    noneArray[2].style.display = "block";
    noneArray[3].style.display = "block";
    noneArray[6].style.display = "block";
    noneArray[7].style.display = "block";
    //Second Month
    noneArray1[2].style.display = "block";
    noneArray1[3].style.display = "block";
    noneArray1[6].style.display = "block";
    noneArray1[7].style.display = "block";
    localStorage.setItem("firstDay", "Monday");
  }
}