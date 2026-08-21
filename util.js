class searchResult{
    constructor(keyword, phyIDList, chemIDList, bioIDList){
        this.keyword = keyword;
        this.phyIDList = phyIDList;
        this.chemIDList = chemIDList;
        this.bioIDList = bioIDList;
        
    }
}

let searchResultList = [];
searchFor("");
//let selectedResultIndex = 0;
let displayPhyID = [];
let displayChemID = [];
let displayBioID = [];



function searchFor(keyword){
    phyIDL = new Set();
    chemIDL = new Set();
    bioIDL = new Set();
    let Keyword = keyword.toUpperCase();
    phy.forEach((item, index)=>{
        if (item.Heading.toUpperCase().includes(Keyword)){
            phyIDL.add(item.id);
            if (item.id -1 >=0 ){
                phyIDL.add(item.id-1);
            }
            if(item.id -2 >=0){
                phyIDL.add(item.id-2);
            }
            if(item.id+1 < phy.length){
                phyIDL.add(item.id+1);
            }
            if(item.id+2 < phy.length){
                phyIDL.add(item.id+2);
            }
            if(item.id+3 < phy.length){
                phyIDL.add(item.id+3);
            }
        }
    });
    chem.forEach((item, index)=>{
        if (item.Heading.toUpperCase().includes(Keyword)){
            chemIDL.add(item.id);
            if (item.id -1 >=0 ){
                chemIDL.add(item.id-1);
            }
            if(item.id -2 >=0){
                chemIDL.add(item.id-2);
            }
            if(item.id+1 < phy.length){
                chemIDL.add(item.id+1);
            }
            if(item.id+2 < phy.length){
                chemIDL.add(item.id+2);
            }
            if(item.id+3 < phy.length){
                chemIDL.add(item.id+3);
            }
        }
    });
    bio.forEach((item, index)=>{
        if (item.Heading.toUpperCase().includes(Keyword)){
            bioIDL.add(item.id);
            if (item.id -1 >=0 ){
                bioIDL.add(item.id-1);
            }
            if(item.id -2 >=0){
                bioIDL.add(item.id-2);
            }
            if(item.id+1 < phy.length){
                bioIDL.add(item.id+1);
            }
            if(item.id+2 < phy.length){
                bioIDL.add(item.id+2);
            }
            if(item.id+3 < phy.length){
                bioIDL.add(item.id+3);
            }
        }
    });
    phyIDLS = [...phyIDL].sort((a,b)=>a-b);
    chemIDLS = [...chemIDL].sort((a,b)=>a-b);
    bioIDLS = [...bioIDL].sort((a,b)=>a-b);
    if (Keyword==""){
        Keyword= "ALL"
    }
    searchResultList.push(new searchResult(keyword=Keyword, phyIDList=phyIDLS, chemIDList=chemIDLS, bioIDList=bioIDLS));
    
    UpdateMiddle();
}


function UpdateMiddle(){
    ResultNode = [];
    //ix = 0;
    searchResultList.forEach(
        (item, index)=>{
            idn = document.createElement('span');
            idn.textContent = item.keyword;
            idn.className = "button";
            idn.addEventListener("click", ()=>{
                UpdateMenu(index); 
                });
            ResultNode.push(idn);
            //ix++;
        }
    );
    middleNode = document.getElementById("middle");
    middleNode.replaceChildren();
    ResultNode.forEach((item)=>middleNode.appendChild(item));
}

function UpdateMenu(ResultID){
    phyNL = [];
    chemNL = [];
    bioNL = [];
    resultID = parseInt(ResultID, 10);
    phyIDS = searchResultList[resultID].phyIDList
    chemIDS = searchResultList[resultID].chemIDList
    bioIDS = searchResultList[resultID].bioIDList
    phyMax = phyIDS.length
    chemMax = chemIDS.length
    bioMax = bioIDS.length

    phyIDS.forEach(
        (item, index)=>{
            switch(index){
                case 0:
                    idn = document.createElement('span');
                    idn.textContent = phy[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("phy", ...[phyIDS[0], phyIDS[1]]);
                    });
                    //idn.addEventListener("dragstart", ()=>{UpdateRight("phy", ...[phyIDS[0], phyIDS[1]])});
                    phyNL.push(idn);
                    break
                case (phyMax-1):
                    idn = document.createElement('span');
                    idn.textContent = phy[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("phy", ...[phyIDS[phyMax-2], phyIDS[phyMax-1]]);
                    });
                    //idn.addEventListener("dragstart", ()=>{UpdateRight("phy", ...[phyIDS[phyMax-2], phyIDS[phyMax-1]])});
                    phyNL.push(idn);
                    break
                default:
                    idn = document.createElement('span');
                    idn.textContent = phy[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("phy", ...[phyIDS[index-1], phyIDS[index], phyIDS[index+1]]);
                    });
                    //idn.addEventListener("dragstart", ()=>{UpdateRight("phy", ...[phyIDS[index-1], phyIDS[index], phyIDS[index+1]])});
                    phyNL.push(idn);
                    
                    break
            }
        }
    )

    chemIDS.forEach(
        (item, index)=>{
            switch(index){
                case 0:
                    idn = document.createElement('span');
                    idn.textContent = chem[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("chem", ...[chemIDS[0], chemIDS[1]]);
                    });
                    //idn.addEventListener("selectstart", ()=>{UpdateRight("chem", ...[chemIDS[0], chemIDS[1]])});
                    chemNL.push(idn);
                    break
                case (chemMax-1):
                    idn = document.createElement('span');
                    idn.textContent = chem[item].Heading;
                    idn.className = "button";

                    idn.addEventListener("click",()=>{
                        UpdateLeft("chem", ...[chemIDS[chemMax-2], chemIDS[chemMax-1]]);
                    });
                    //idn.addEventListener("selectstart", ()=>{UpdateRight("chem", ...[chemIDS[chemMax-2], chemIDS[chemMax-1]])});
                    chemNL.push(idn);
                    break
                default:
                    idn = document.createElement('span');
                    idn.textContent = chem[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("chem", ...[chemIDS[index-1], chemIDS[index], chemIDS[index+1]]);
                    });
                    //idn.addEventListener("selectstart", ()=>{UpdateRight("chem", ...[chemIDS[index-1], chemIDS[index], chemIDS[index+1]])});
                    chemNL.push(idn);
                    
                    break
            }
        }
    )
    bioIDS.forEach(
        (item, index)=>{
            switch(index){
                case 0:
                    idn = document.createElement('span');
                    idn.textContent = bio[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("bio", ...[bioIDS[0], bioIDS[1]]);
                    });
                    //idn.addEventListener("selectstart", ()=>{UpdateRight("bio", ...[bioIDS[0], bioIDS[1]])});
                    bioNL.push(idn);
                    break
                case (bioMax-1):
                    idn = document.createElement('span');
                    idn.textContent = bio[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("bio", ...[bioIDS[bioMax-2], bioIDS[bioMax-1]]);
                    });
                    //idn.addEventListener("selectstart", ()=>{UpdateRight("bio", ...[bioIDS[bioMax-2], bioIDS[bioMax-1]])});
                    bioNL.push(idn);
                    break
                default:
                    idn = document.createElement('span');
                    idn.textContent = bio[item].Heading;
                    idn.className = "button";
                    
                    idn.addEventListener("click",()=>{
                        UpdateLeft("bio", ...[bioIDS[index-1], bioIDS[index], bioIDS[index+1]]);
                    });
                    //idn.addEventListener("selectstart", ()=>{UpdateRight("bio", ...[bioIDS[index-1], bioIDS[index], bioIDS[index+1]])});
                    bioNL.push(idn);
                    
                    break
            }
        }
    )    
    /** 
    chemIDS.forEach(
        (item, index)=>{
            idn = document.createElement('span');
            idn.textContent = chem[item].Heading;
            idn.className = "button";
            chemNL.push(idn);
        }
    )
    bioIDS.forEach(
        (item, index)=>{
            idn = document.createElement('span');
            idn.textContent = bio[item].Heading;
            idn.className = "button";
            bioNL.push(idn);
        }

    )
*/




    phyN = document.getElementById("phyMenu");
    phyN.replaceChildren();
    phyNL.forEach((item)=>phyN.appendChild(item));
    chemN = document.getElementById("chemMenu");
    chemN.replaceChildren();
    chemNL.forEach((item)=>chemN.appendChild(item));
    bioN = document.getElementById("bioMenu");
    bioN.replaceChildren();
    bioNL.forEach((item)=>bioN.appendChild(item));
}

let DisplayLT = [];
let DisplayRT = [];

function UpdateLeft(subject, ...ill){
    DisplayText = [];
    console.log(ill);
    switch(subject){
        case "phy":
            ill.forEach((item, index)=>{
                
                DisplayText.push(phy[item].Content)
            });
            break
        case "chem":
            ill.forEach((item, index)=>{
                DisplayText.push(chem[item].Content)
            });
            break
        case "bio":
            ill.forEach((item, index)=>{
                DisplayText.push(bio[item].Content)
            });
            break
    }
    DisplayNode = [];
    DisplayLT = DisplayText;
    console.log(DisplayLT);
    DisplayText.forEach((item,index)=>{
        idn = document.createElement('p');
        idn.textContent = item;
        idn.className = "entry";
        DisplayNode.push(idn);
    });
    DispN = document.getElementById("lframe");
    DispN.replaceChildren();
    DisplayNode.forEach((item)=>{
        DispN.appendChild(item);
    });
}

function UpdateRight(subject, ...ill){
    DisplayText = [];
    console.log(ill);
    switch(subject){
        case "phy":
            ill.forEach((item, index)=>{
                
                DisplayText.push(phy[item].Content)
            });
            break
        case "chem":
            ill.forEach((item, index)=>{
                DisplayText.push(chem[item].Content)
            });
            break
        case "bio":
            ill.forEach((item, index)=>{
                DisplayText.push(bio[item].Content)
            });
            break
    }
    DisplayNode = [];
    DisplayRT = DisplayText;
    console.log(DisplayRT);
    DisplayText.forEach((item,index)=>{
        idn = document.createElement('p');
        idn.textContent = item;
        idn.className = "entry";
        DisplayNode.push(idn);
    });
    DispN = document.getElementById("rframe");
    DispN.replaceChildren();
    DisplayNode.forEach((item)=>{
        DispN.appendChild(item);
    });
}

function LeftToRight(){
    //DisplayRT = [];
    DisplayRT = [...DisplayLT];
    DisplayNode = [];
    //console.log(DisplayRT);
    DisplayRT.forEach((item,index)=>{
        idn = document.createElement('p');
        idn.textContent = item;
        idn.className = "entry";
        DisplayNode.push(idn);
    });
    DispN = document.getElementById("rframe");
    DispN.replaceChildren();
    DisplayNode.forEach((item)=>{
        DispN.appendChild(item);
})
}

let Readme = ["在左上輸入搜尋的單字，然後按下旁邊的Search", "第二列會出現搜尋過的關鍵字，ALL代表所有條目，按下關鍵字會在下面3排出現搜尋的phy, chem, bio結果的標題", "在列表中按下條目標題會在下方的左邊顯示該條目及上下一條條目的內容", "按下頂部右方的 左>>右 按鈕可以將正在左方顯示的條目內容移至右方顯示", "可使用 讀左 讀右 停止朗讀 按鈕來朗讀正在顯示的條目內容"];

function PushReadme(){
    //DisplayRT = [];
    DisplayRT = [...Readme];
    DisplayNode = [];
    //console.log(DisplayRT);
    DisplayRT.forEach((item,index)=>{
        idn = document.createElement('p');
        idn.textContent = item;
        idn.className = "entry";
        DisplayNode.push(idn);
    });
    DispN = document.getElementById("rframe");
    DispN.replaceChildren();
    DisplayNode.forEach((item)=>{
        DispN.appendChild(item);
})
}

PushReadme();


function speakLeft(){
    window.speechSynthesis.cancel()
    LS = "";
    DisplayLT.forEach((item)=>{LS+=item; LS+="。。";});
    let utterance = new SpeechSynthesisUtterance(LS);
    utterance.lang = 'zh-HK';
    speechSynthesis.speak(utterance);
}

function speakRight(){
    window.speechSynthesis.cancel()
    RS = "";
    DisplayRT.forEach((item)=>{RS+=item; RS+="。。";});
    let utterance = new SpeechSynthesisUtterance(RS);
    utterance.lang = 'zh-HK';
    speechSynthesis.speak(utterance);
}

function StopSpeak(){
    window.speechSynthesis.cancel()
}