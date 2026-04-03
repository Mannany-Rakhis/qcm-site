let banque=[

{
q:"Pourquoi documenter ?",
a:["Décorer","Comprendre code","Ralentir","Supprimer tests"],
r:1
},

{
q:"Une API est :",
a:[
"communication apps",
"base données",
"framework",
"langage"
],
r:0
},

{
q:"GET sert à :",
a:["Créer","Lire","Modifier","Delete"],
r:1
},

{
q:"POST sert à :",
a:["Lire","Créer","Delete","Modifier"],
r:1
},

{
q:"PUT fait :",
a:[
"modifier partiel",
"remplacer",
"lire",
"delete"
],
r:1
},

{
q:"PATCH fait :",
a:[
"modifier partiel",
"lire",
"créer",
"delete"
],
r:0
},

{
q:"404 signifie :",
a:[
"OK",
"pas trouvé",
"server down",
"redirect"
],
r:1
},

{
q:"200 signifie :",
a:[
"OK",
"fail",
"delete",
"error"
],
r:0
},

{
q:"MkDocs est :",
a:[
"éditeur",
"générateur doc",
"database",
"api"
],
r:1
},

{
q:"Commande serveur MkDocs :",
a:[
"serve",
"run",
"start",
"launch"
],
r:0
},

{
q:"Commande build :",
a:[
"build",
"compile",
"make",
"generate"
],
r:0
},

{
q:"Markdown gras :",
a:[
"*text*",
"**text**",
"text",
"//"
],
r:1
},

{
q:"Inline code :",
a:[
"```code```",
"`code`",
"code",
"//"
],
r:1
},

{
q:"Bloc code utilise :",
a:[
"1 backtick",
"2",
"3",
"4"
],
r:2
},

{
q:"Lien markdown :",
a:[
"[url](text)",
"[text](url)",
"url()",
"<url>"
],
r:1
},

{
q:"Liste tâche :",
a:[
"(x)",
"- [x]",
"[x]",
"{x}"
],
r:1
},

{
q:"Notion fonctionne avec :",
a:[
"pages",
"files",
"servers",
"api"
],
r:0
},

{
q:"/code crée :",
a:[
"titre",
"code",
"image",
"table"
],
r:1
},

{
q:"Kanban :",
a:[
"board",
"table",
"graph",
"text"
],
r:0
},

{
q:"Excel somme :",
a:[
"ADD",
"SUM",
"SOMME",
"TOTAL"
],
r:2
},

{
q:"Powerpoint règle :",
a:[
"5x5",
"6x6",
"10x10",
"4x4"
],
r:1
},

];

// duplication pour 60

while(banque.length<60){

banque.push(
banque[Math.floor(Math.random()*21)]
);

}

function shuffle(array){

for(let i=array.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

}

shuffle(banque);

let questions=banque.slice(0,30);

let quiz=document.getElementById("quiz");

questions.forEach((q,i)=>{

let div=document.createElement("div");

div.className="question";

let html="<p>"+(i+1)+". "+q.q+"</p>";

let reps=[...q.a];

shuffle(reps);

reps.forEach(rep=>{

html+=`
<label>

<input type="radio"
name="q${i}"
value="${q.a.indexOf(rep)}">

${rep}

</label><br>
`;

});

div.innerHTML=html;

quiz.appendChild(div);

});

let answered=0;

document.addEventListener("change",()=>{

answered++;

let progress=
(answered/30)*100;

document.getElementById("bar").style.width=
progress+"%";

});

function corriger(){

let score=0;

let divs=
document.querySelectorAll(".question");

questions.forEach((q,i)=>{

let choix=
document.querySelector(
`input[name=q${i}]:checked`
);

if(!choix)return;

if(choix.value==q.r){

score++;

divs[i].classList.add("correct");

}

else{

divs[i].classList.add("wrong");

}

});

document.getElementById("result").innerHTML=

"Score : "+score+"/30";

}

let time=1200;

let timer=setInterval(()=>{

time--;

let min=Math.floor(time/60);

let sec=time%60;

document.getElementById("timer").innerHTML=

min+":"+
(sec<10?"0":"")+sec;

if(time==0){

corriger();

clearInterval(timer);

}

},1000);