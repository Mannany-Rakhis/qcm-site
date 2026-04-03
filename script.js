let answeredSet=new Set();

document.addEventListener("change",(e)=>{

if(e.target.type=="radio"){

let name=e.target.name;

answeredSet.add(name);

let progress=
(answeredSet.size/30)*100;

document.getElementById("bar").style.width=
progress+"%";

}

});