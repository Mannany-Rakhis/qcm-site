let banque=[

{
q:"Dans Excel que fait =SOMME(A1:A10) ?",
a:[
"Additionne les cellules",
"Supprime les données",
"Trie les valeurs",
"Multiplie les nombres"
],
r:0,
exp:"SOMME additionne une plage."
},

{
q:"Quelle formule correspond à A1+A2+A3 ?",
a:[
"=SOMME(A1:A3)",
"=ADD(A1:A3)",
"=PLUS(A1:A3)",
"=TOTAL(A1:A3)"
],
r:0,
exp:"Excel FR utilise SOMME."
},

{
q:"Quelle méthode HTTP sert à lire des données ?",
a:[
"GET",
"POST",
"DELETE",
"PATCH"
],
r:0,
exp:"GET = Read."
},

{
q:"Quelle méthode HTTP sert à créer ?",
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
q:"Quelle méthode modifie partiellement ?",
a:[
"PATCH",
"GET",
"POST",
"DELETE"
],
r:0,
exp:"PATCH modifie champs."
},

{
q:"Quelle méthode remplace totalement ?",
a:[
"PATCH",
"PUT",
"GET",
"DELETE"
],
r:1,
exp:"PUT remplace."
},

{
q:"Code HTTP 200 ?",
a:[
"Succès",
"Erreur",
"Pas trouvé",
"Redirect"
],
r:0,
exp:"200 OK."
},

{
q:"404 signifie ?",
a:[
"Succès",
"Non trouvé",
"Erreur serveur",
"Connexion refusée"
],
r:1,
exp:"Not Found."
},

{
q:"500 signifie ?",
a:[
"Erreur serveur",
"Erreur client",
"Succès",
"Cache"
],
r:0,
exp:"Internal server error."
},

{
q:"401 signifie ?",
a:[
"Pas authentifié",
"Succès",
"Erreur serveur",
"Redirect"
],
r:0,
exp:"Unauthorized."
},

{
q:"403 signifie ?",
a:[
"Pas autorisé",
"Pas trouvé",
"Succès",
"Crash"
],
r:0,
exp:"Forbidden."
},

{
q:"301 signifie ?",
a:[
"Redirection permanente",
"Succès",
"Erreur",
"Delete"
],
r:0,
exp:"Permanent redirect."
},

{
q:"Quelle commande crée projet MkDocs ?",
a:[
"mkdocs new",
"mkdocs start",
"mkdocs run",
"mkdocs create"
],
r:0,
exp:"mkdocs new."
},

{
q:"Commande serveur MkDocs ?",
a:[
"mkdocs serve",
"mkdocs run",
"mkdocs start",
"mkdocs launch"
],
r:0,
exp:"serve lance local."
},

{
q:"Commande générer site ?",
a:[
"mkdocs build",
"mkdocs compile",
"mkdocs deploy",
"mkdocs make"
],
r:0,
exp:"build."
},

{
q:"Fichier config MkDocs ?",
a:[
"mkdocs.yml",
"config.json",
"index.md",
"main.py"
],
r:0,
exp:"Configuration principale."
},

{
q:"Syntaxe titre principal Markdown ?",
a:[
"# Titre",
"## Titre",
"***Titre",
">Titre"
],
r:0,
exp:"H1."
},

{
q:"Syntaxe code inline ?",
a:[
"`code`",
"***code***",
"(code)",
"//code"
],
r:0,
exp:"Backtick."
},

{
q:"Bloc code utilise ?",
a:[
"1 backtick",
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
exp:"Standard."
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
exp:"GitHub syntax."
},

{
q:"Dans README première section ?",
a:[
"Titre",
"Licence",
"Contact",
"API"
],
r:0,
exp:"Titre projet."
},

{
q:"Notion fonctionne avec ?",
a:[
"Pages",
"Fichiers",
"Servers",
"API"
],
r:0,
exp:"Pages."
},

{
q:"Commande /code Notion ?",
a:[
"Bloc code",
"Image",
"Table",
"Titre"
],
r:0,
exp:"Code block."
},

{
q:"Vue Kanban Notion ?",
a:[
"Board",
"Graph",
"Text",
"Slide"
],
r:0,
exp:"Board."
},

{
q:"Graphique évolution temps ?",
a:[
"Courbe",
"Camembert",
"Table",
"Liste"
],
r:0,
exp:"Line."
},

{
q:"Graphique proportions ?",
a:[
"Secteurs",
"Lignes",
"Colonnes",
"Texte"
],
r:0,
exp:"Pie chart."
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
exp:"6 lignes."
},

{
q:"Documentation API décrit ?",
a:[
"Endpoints",
"Couleurs",
"Images",
"CSS"
],
r:0,
exp:"Endpoints."
},

{
q:"2xx signifie ?",
a:[
"Succès",
"Erreur",
"Redirect",
"Crash"
],
r:0,
exp:"Success."
}

];