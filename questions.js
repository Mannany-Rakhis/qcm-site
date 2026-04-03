let banque=[

{

q:"Dans Excel, que fait la formule =SOMME(A1:A5) ?",

a:[
Additionne A1 à A5,
Supprime valeurs,
Trie colonnes,
Multiplie cellules
],

r:0,

exp:"SOMME additionne toutes les cellules."

},

{

q:"Quelle formule Excel française correspond à A1+A2+A3 ?",

a:[
=SOMME(A1:A3),
=ADD(A1:A3),
=TOTAL(A1:A3),
=PLUS(A1:A3)
],

r:0,

exp:"Excel FR utilise SOMME."

},

{

q:"Tu veux créer une API qui retourne les utilisateurs. Quelle méthode ?",

a:[
GET,
POST,
DELETE,
PATCH
],

r:0,

exp:"GET sert à lire données."

},

{

q:"Tu veux ajouter un utilisateur via API ?",


a:[
GET,
POST,
PATCH,
READ
],

r:1,

exp:"POST crée ressource."

},

{

q:"Tu modifies seulement email user ?",


a:[
PUT,
PATCH,
GET,
DROP
],

r:1,

exp:"PATCH modifie partiellement."

},

{

q:"Tu remplaces complètement un utilisateur ?",


a:[
PATCH,
PUT,
POST,
GET
],

r:1,

exp:"PUT remplace ressource entière."

},

{

q:"Quelle commande lance serveur MkDocs ?",


a:[
mkdocs serve,
mkdocs start,
mkdocs run,
mkdocs launch
],

r:0,

exp:"Seules new serve build existent."

},

{

q:"Quel fichier configure MkDocs ?",


a:[
index.md,
mkdocs.yml,
config.json,
main.md
],

r:1,

exp:"mkdocs.yml = config principale."

},

{

q:"Quelle syntaxe Markdown crée titre niveau 1 ?",


a:[
# Titre,
## Titre,
***Titre,
>Titre
],

r:0,

exp:"Un seul # = H1."

},

{

q:"Quelle syntaxe crée lien Markdown ?",


a:[
(text)(url),
[text](url),
url(text),
{text}
],

r:1,

exp:"Standard markdown."

},

{

q:"Dans README quelle section vient avant installation ?",


a:[
Licence,
Description,
Contact,
Contribution
],

r:1,

exp:"Description toujours avant."

},

{

q:"Dans Notion que fait /code ?",


a:[
image,
code block,
table,
titre
],

r:1,

exp:"/code crée bloc code."

},

{

q:"Quel code HTTP signifie succès ?",


a:[
200,
404,
500,
301
],

r:0,

exp:"200 = OK."

},

{

q:"401 signifie ?",


a:[
non authentifié,
server error,
success,
redirect
],

r:0,

exp:"401 = pas connecté."

},

{

q:"403 signifie ?",


a:[
pas autorisé,
error serveur,
OK,
redirect
],

r:0,

exp:"403 = pas droit."

},

];