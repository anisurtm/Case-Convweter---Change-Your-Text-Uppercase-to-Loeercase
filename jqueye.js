function showHide() {
    var valueMc = document.getElementById("div7");
    if (valueMc.style.display === "none") {
        valueMc.style.display = "block";
    } else {
      valueMc.style.display = "none";
    }
  }

 let a3= "English";
 let a4= "русский - RU";
 let a5= "日本語 - JA";
 let a6= 'Italiano - IT';
 let a7= 'Français - FR';
 let a8= 'Português - PT';
 let a9= 'Español - ES';
 let a10='Deutsche - DE';
 let a11= '中文 - ZH';
 
 const x3 = document.getElementById("span3");
 const x4 = document.getElementById("span4");
 const x5= document.getElementById("span5");
 const x6 = document.getElementById("span6");
 const x7 = document.getElementById("span7");
 const x8 = document.getElementById("span8");
 const x9 = document.getElementById("span9");
 const x10 = document.getElementById("span10");
 const x11 = document.getElementById("span11");


 x3.addEventListener('click', function() {
  document.getElementById('select1').innerText=a3;
 })

 x4.addEventListener('click', function() {
  document.getElementById('select1').innerText=a4;
 })
 x5.addEventListener('click', function() {
  document.getElementById('select1').innerText=a5;
 })
 x6.addEventListener('click', function() {
  document.getElementById('select1').innerText=a6;
 })
 x7.addEventListener('click', function() {
  document.getElementById('select1').innerText=a7;
 })
 x8.addEventListener('click', function() {
  document.getElementById('select1').innerText=a8;
 })
 x9.addEventListener('click', function() {
  document.getElementById('select1').innerText=a9;
 })
 x10.addEventListener('click', function() {
  document.getElementById('select1').innerText=a10;
 })
 x11.addEventListener('click', function() {
  document.getElementById('select1').innerText=a11;
 })
 x4.addEventListener('click', function() {
  document.getElementById('select1').innerText=a4;
 })
 

  function noStyles() {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = true;
    document.styleSheets[2].disabled = true;
    document.styleSheets[3].disabled = true;
    document.styleSheets[4].disabled = true;
    document.styleSheets[5].disabled = true;
    document.styleSheets[6].disabled = true;
    document.styleSheets[7].disabled = true;
    document.styleSheets[8].disabled = true;
}

function reStyle(n) {
    noStyles()
    document.styleSheets[n].disabled = false;
}
reStyle(0);

// function showHide() {
//     document.getElementById('div7').style.display = "block";
//  }