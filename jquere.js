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


function clearData(){
  document.getElementById('input1').value= '';
}

function copyText() {
  var copyText = document.getElementById("input1");
  copyText.select();

  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
}

let inpText = document.getElementById("input1");
let result1 = document.getElementById('input1');
function upper(){
  result1.value = inpText.value.toUpperCase();
}
function lower(){
  
  result1.value = inpText.value.toLowerCase();
}


function Capitaliz(){
   let CapitalizW = document.getElementById('input1').value;

}

function Capitaliz() {
  // Get the input text
  let inpText1 = document.getElementById('input1').value;

  // Capitalize the first letter of each word
  let words = inpText1.split(' ');
  let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let result1 = capitalizedWords.join(' ');
  let x= document.getElementById('input1');

  // Display the result
  x.value = result1;
}

function JustClick(){
  let toogel = document.getElementById('input1');
  let input2 = toogel.value.split('');
  // console.log(input2);

    for (let i = 0; i< input2.length; i++)
    // console.log(input2[i]);
  {
    if (input2[i] >= 'A' && input2[i]<='Z')
    {
      input2[i]=input2[i].toLowerCase();
    }
    else if (input2[i] >= 'a' && input2[i]<='z')
    {
      input2[i]=input2[i].toUpperCase();
    }
  }
  toogel.value=input2.join('');
}

function Capitliz() {
  let i2np =document.getElementById('input1');
	let str = i2np.value.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++)
   {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    // console.log(str[i]);
	}
  i2np.value=str.join(' ');
}


function Sentce(){
  let inp =document.getElementById('input1');
  let inpo =inp.value.toLowerCase().split('. ');
  console.log(inpo);
  for (let i = 0; i < inpo.length; i++)
  {
    inpo[i] = inpo[i].charAt(0).toUpperCase() + inpo[i].slice(1);
  }
  inp.value=inpo.join('.');
}

function aLtErNaTe(){
  let i1np =document.getElementById('input1');
  let i2npo =i1np.value.toLowerCase().split('');
  console.log(i2npo);
  for (let i=0; i<i2npo .length; i++ )
  // console.log();
  {
    if (i % 2 !=0)
    {
      i2npo[i]=i2npo[i].toUpperCase();
      console.log(i2npo[i])
    }
  }
  i1np.value=i2npo.join('');
}
// console.log(Capitliz("geeks for geeks"));


// function showHide() {
//     document.getElementById('div7').style.display = "block";
//  }