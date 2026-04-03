shuffle(banque);

let questions=banque.slice(0,30);

let quiz=document.getElementById("quiz");

let answered=0;

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

</label>

`;

});

html+=`<div class="exp" id="exp${i}"></div>`;

div.innerHTML=html;

quiz.appendChild(div);

});

function shuffle(array){

for(let i=array.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

}

function corriger(){

let score=0;

let divs=document.querySelectorAll(".question");

questions.forEach((q,i)=>{

let choix=document.querySelector(
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

document.getElementById("exp"+i).innerHTML=

q.exp;

});

document.getElementById("result").innerHTML=

"Score : "+score+"/30";

let best=localStorage.getItem("best");

if(!best || score>best){

localStorage.setItem("best",score);

}

document.getElementById("best").innerHTML=

"Meilleur score : "+localStorage.getItem("best");

}