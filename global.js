//footerNode.style.textAlign = 'center';
//footerNode.textContent ='Version 20260819';
//footerNode.addEventListener("click", ()=>{window.open("https://github.com/undef-behav/dse3notesPCB/","_blank");});





let SearchField = document.getElementById('searchField');
let searchBtn = document.createElement('span');
searchBtn.textContent = "Search";
searchBtn.className ='button';
searchBtn.addEventListener("click", ()=>{searchFor(SearchField.value);});
document.getElementById("top").appendChild(searchBtn);

let readLBtn = document.createElement('span');
readLBtn.textContent ="讀左";
readLBtn.className ='button';
readLBtn.addEventListener("click", speakLeft);
document.getElementById("top").appendChild(readLBtn);

let readRBtn = document.createElement('span');
readRBtn.textContent ="讀右";
readRBtn.className ='button';
readRBtn.addEventListener("click", speakRight);
document.getElementById("top").appendChild(readRBtn);

let stopReadBtn = document.createElement('span');
stopReadBtn .textContent ="停止朗讀";
stopReadBtn.className ='button';
stopReadBtn.addEventListener("click", StopSpeak);
document.getElementById("top").appendChild(stopReadBtn);


let LmRBtn = document.createElement('span');
LmRBtn .textContent ="左>>右";
LmRBtn.className ='button';
LmRBtn.addEventListener("click", LeftToRight);
document.getElementById("top").appendChild(LmRBtn);

let RMBtn = document.createElement('span');
RMBtn .textContent ="說明";
RMBtn.className ='button';
RMBtn.addEventListener("click", PushReadme);
document.getElementById("top").appendChild(RMBtn);
