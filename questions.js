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
q:"401 Unauthorized signifie :",
a:[
"Pas authentifié",
"Succès",
"Erreur serveur",
"Redirect"
],
r:0,
exp:"401 = utilisateur non connecté."
},

{
q:"403 Forbidden signifie :",
a:[
"Pas autorisé",
"Pas trouvé",
"Succès",
"Server down"
],
r:0,
exp:"403 = droits refusés."
},

{
q:"301 signifie :",
a:[
"Redirection permanente",
"Succès",
"Erreur",
"Delete"
],
r:0,
exp:"301 = redirect permanent."
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
q:"Quelle commande génère site statique ?",
a:[
"mkdocs build",
"mkdocs run",
"mkdocs deploy",
"mkdocs compile"
],
r:0,
exp:"build génère site."
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
q:"Dans README ordre logique ?",
a:[
"Titre description installation",
"Licence install titre",
"API titre install",
"Contact licence"
],
r:0,
exp:"Structure standard."
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
q:"Commande Notion pour code ?",
a:[
"/code",
"/text",
"/image",
"/api"
],
r:0,
exp:"Slash command."
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
q:"Graphique pour proportions ?",
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
exp:"6 lignes 6 mots."
},

{
q:"Documentation API décrit :",
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
q:"Technical writer fait :",
a:[
"Documentation",
"Code backend",
"UI design",
"DevOps"
],
r:0,
exp:"Rédaction doc."
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