let banque=[

{
q:"Dans Excel que fait =SOMME(A1:A5) ?",
a:[
"Additionne cellules",
"Supprime données",
"Trie tableau",
"Multiplie valeurs"
],
r:0,
exp:"SOMME additionne toutes les cellules."
},

{
q:"Quelle méthode HTTP lit des données ?",
a:[
"GET",
"POST",
"DELETE",
"PATCH"
],
r:0,
exp:"GET = lecture."
},

{
q:"Quelle méthode crée une ressource ?",
a:[
"GET",
"POST",
"PUT",
"READ"
],
r:1,
exp:"POST = Create."
},

{
q:"PATCH sert à :",
a:[
"Modifier partiellement",
"Lire",
"Créer",
"Supprimer"
],
r:0,
exp:"PATCH modifie champs envoyés."
},

{
q:"PUT sert à :",
a:[
"Modifier partiel",
"Remplacer totalement",
"Lire",
"Supprimer"
],
r:1,
exp:"PUT remplace ressource."
},

{
q:"Code HTTP 200 signifie :",
a:[
"Succès / OK",
"Erreur serveur",
"Introuvable",
"Redirection"
],
r:0,
exp:"200 OK = succès."
},

{
q:"404 Not Found signifie :",
a:[
"Succès",
"Non trouvé",
"Erreur serveur",
"Connexion refusée"
],
r:1,
exp:"404 = ressource absente."
},

{
q:"500 Internal Server Error signifie :",
a:[
"Erreur serveur",
"Erreur client",
"Succès",
"Cache"
],
r:0,
exp:"500 = problème serveur."
},

{
q:"Quelle commande MkDocs crée projet ?",
a:[
"mkdocs new",
"mkdocs start",
"mkdocs run",
"mkdocs create"
],
r:0,
exp:"new crée projet."
},

{
q:"Quel fichier configure site MkDocs ?",
a:[
"mkdocs.yml",
"config.json",
"index.md",
"main.py"
],
r:0,
exp:"mkdocs.yml."
},

{
q:"Quelle syntaxe crée titre principal ?",
a:[
"# Titre",
"## Titre",
"***Titre",
">Titre"
],
r:0,
exp:"H1 = #."
},

{
q:"Comment écrire du code inline ?",
a:[
"`code`",
"***code***",
"(code)",
"//code"
],
r:0,
exp:"1 backtick."
},

{
q:"Combien de backticks bloc code ?",
a:[
"1",
"2",
"3",
"5"
],
r:2,
exp:"3 backticks."
},

{
q:"Lien markdown correct ?",
a:[
"[text](url)",
"(text)[url]",
"url(text)",
"{text}"
],
r:0,
exp:"Syntaxe standard."
},

{
q:"Liste tâche correcte ?",
a:[
"- [x]",
"(x)",
"[x]",
"{x}"
],
r:0,
exp:"GitHub markdown."
},

{
q:"Notion fonctionne avec :",
a:[
"Pages",
"Fichiers",
"Servers",
"APIs"
],
r:0,
exp:"Tout est page."
},

{
q:"Vue Notion Kanban ?",
a:[
"Board",
"Graph",
"Text",
"Slide"
],
r:0,
exp:"Board = Kanban."
},

{
q:"Graphique pour tendance ?",
a:[
"Courbe",
"Camembert",
"Table",
"Liste"
],
r:0,
exp:"Line chart."
},

{
q:"Règle PowerPoint ?",
a:[
"6x6",
"10x10",
"3x3",
"4x4"
],
r:0,
exp:"6 lignes 6 mots."
},

{
q:"2xx signifie :",
a:[
"Succès",
"Erreur",
"Redirection",
"Crash"
],
r:0,
exp:"2 = success."
}

];

// compléter pour 60
while(banque.length<60){

banque.push(
banque[Math.floor(Math.random()*20)]
);

}