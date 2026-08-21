




let footerNode = document.createElement('p');
footerNode.style.textAlign = 'center';
footerNode.textContent ='Version 20260819';
footerNode.addEventListener("click", ()=>{window.open("https://github.com/undef-behav/dse3notesPCB/","_blank");});


document.getElementById("footer").appendChild(footerNode);

let footerNodeA = document.createElement('p');
footerNodeA.style.textAlign = 'center';
footerNodeA.textContent ='Absolutely no warranty or liability，如果你想轉發，不可作不道德用途';
document.getElementById("footer").appendChild(footerNodeA);