const banque = [
  {
    "day": 1,
    "q": "Quelle proposition décrit le mieux la différence entre une classe et un objet ?",
    "a": [
      "Une classe est une fonction, un objet est une boucle.",
      "Une classe est un modèle, un objet est une instance créée à partir de ce modèle.",
      "Une classe est une variable globale, un objet est une variable locale.",
      "Une classe et un objet désignent exactement la même chose."
    ],
    "r": 1,
    "exp": "Une classe sert de modèle de construction. Un objet est une instance concrète créée à partir de cette classe."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    pass\n\np = Produit()\nprint(type(p))</code></pre>",
    "a": [
      "<class 'Produit'>",
      "<class '__main__.Produit'>",
      "Produit",
      "type(Produit)"
    ],
    "r": 1,
    "exp": "Une instance affiche son type complet, généralement sous la forme &lt;class '__main__.NomDeClasse'&gt;."
  },
  {
    "day": 1,
    "q": "Quel est le rôle principal de <code>__init__</code> dans une classe Python ?",
    "a": [
      "Créer le code source de la classe.",
      "Initialiser l'état de l'objet au moment de l'instanciation.",
      "Détruire l'objet quand il n'est plus utilisé.",
      "Transformer une méthode en propriété."
    ],
    "r": 1,
    "exp": "<code>__init__</code> est exécutée lors de la création de l'objet et sert à initialiser ses attributs."
  },
  {
    "day": 1,
    "q": "Dans une méthode d'instance Python, que représente <code>self</code> ?",
    "a": [
      "La classe elle-même.",
      "Le module courant.",
      "L'instance en cours de manipulation.",
      "Une variable globale spéciale."
    ],
    "r": 2,
    "exp": "<code>self</code> désigne l'objet sur lequel la méthode est appelée."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    def __init__(self, nom):\n        self.nom = nom\n\np1 = Produit(\"Clavier\")\np2 = Produit(\"Souris\")\nprint(p1.nom, p2.nom)</code></pre>",
    "a": [
      "Clavier Clavier",
      "Souris Souris",
      "Clavier Souris",
      "Erreur car deux objets d'une même classe partagent le même nom"
    ],
    "r": 2,
    "exp": "Chaque instance possède ici son propre attribut <code>nom</code>."
  },
  {
    "day": 1,
    "q": "Une méthode d'instance est avant tout :",
    "a": [
      "Une variable stockée dans l'objet.",
      "Une fonction définie dans une classe et appelée sur un objet.",
      "Une classe imbriquée.",
      "Un attribut de classe obligatoire."
    ],
    "r": 1,
    "exp": "Une méthode est une fonction définie dans la classe, appelée avec la syntaxe <code>objet.methode()</code>."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    def __init__(self, stock):\n        self.stock = stock\n\n    def est_disponible(self):\n        return self.stock &gt; 0\n\np = Produit(0)\nprint(p.est_disponible())</code></pre>",
    "a": [
      "True",
      "False",
      "0",
      "Erreur"
    ],
    "r": 1,
    "exp": "La méthode retourne un booléen. Avec un stock de 0, l'expression <code>self.stock &gt; 0</code> est fausse."
  },
  {
    "day": 1,
    "q": "Un attribut d'instance est :",
    "a": [
      "Partagé automatiquement par toutes les instances.",
      "Créé sur chaque objet individuellement.",
      "Toujours défini hors de <code>__init__</code>.",
      "Obligatoirement privé."
    ],
    "r": 1,
    "exp": "Un attribut d'instance appartient à un objet précis, par opposition à l'attribut de classe qui est partagé."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    tva = 20\n\np1 = Produit()\np2 = Produit()\nprint(p1.tva, p2.tva, Produit.tva)</code></pre>",
    "a": [
      "20 20 20",
      "20 20 None",
      "Erreur",
      "Chaque valeur est différente"
    ],
    "r": 0,
    "exp": "Ici <code>tva</code> est un attribut de classe, visible via les instances et via la classe."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    nb_produits = 0\n\n    def __init__(self):\n        Produit.nb_produits += 1\n\np1 = Produit()\np2 = Produit()\np3 = Produit()\nprint(Produit.nb_produits)</code></pre>",
    "a": [
      "0",
      "1",
      "2",
      "3"
    ],
    "r": 3,
    "exp": "Le compteur de classe est incrémenté à chaque création d'instance."
  },
  {
    "day": 1,
    "q": "Quel est l'avantage principal de la POO par rapport à une approche purement procédurale dans ce cours ?",
    "a": [
      "Elle interdit totalement les fonctions.",
      "Elle regroupe les données et les comportements dans des objets autonomes.",
      "Elle rend Python compilé.",
      "Elle remplace toutes les variables par des classes abstraites."
    ],
    "r": 1,
    "exp": "La POO permet de modéliser des entités avec leur état et leur comportement dans une structure cohérente."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    def __init__(self, nom, stock):\n        self.nom = nom\n        self.stock = stock\n\n    def vendre(self, quantite):\n        if quantite &lt;= self.stock:\n            self.stock -= quantite\n\np = Produit(\"Clavier\", 10)\np.vendre(3)\nprint(p.stock)</code></pre>",
    "a": [
      "13",
      "10",
      "7",
      "Erreur"
    ],
    "r": 2,
    "exp": "La méthode retire 3 unités au stock initial de 10."
  },
  {
    "day": 1,
    "q": "Le premier paramètre d'une méthode d'instance doit généralement être nommé <code>self</code> :",
    "a": [
      "Parce que Python impose exactement ce nom.",
      "Parce que c'est une convention forte qui représente l'instance.",
      "Parce que c'est un mot-clé réservé obligatoire.",
      "Parce qu'il permet d'accéder uniquement aux attributs de classe."
    ],
    "r": 1,
    "exp": "Le nom <code>self</code> n'est pas un mot-clé réservé, mais c'est la convention standard pour représenter l'instance."
  },
  {
    "day": 1,
    "q": "Que se passe-t-il ici ?\n<pre><code>class Produit:\n    def afficher(self):\n        return \"ok\"\n\np = Produit()\nprint(p.afficher())</code></pre>",
    "a": [
      "La méthode reçoit automatiquement l'objet courant comme premier argument.",
      "La méthode ne reçoit aucun argument.",
      "Python convertit la méthode en propriété.",
      "Erreur car il faut écrire <code>Produit.afficher()</code>."
    ],
    "r": 0,
    "exp": "Quand on écrit <code>p.afficher()</code>, Python transmet implicitement l'instance à la méthode."
  },
  {
    "day": 1,
    "q": "Un attribut de classe est particulièrement utile pour :",
    "a": [
      "Stocker une valeur commune à toutes les instances.",
      "Garantir qu'une valeur sera différente pour chaque objet.",
      "Éviter d'écrire <code>__init__</code>.",
      "Transformer une classe en Singleton."
    ],
    "r": 0,
    "exp": "Un attribut de classe porte une information partagée, comme une TVA ou un compteur global."
  },
  {
    "day": 1,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    def __init__(self, nom):\n        self.nom = nom\n\np = Produit(\"Écran\")\nprint(p.nom)</code></pre>",
    "a": [
      "nom",
      "Produit",
      "Écran",
      "Erreur car <code>nom</code> est local à <code>__init__</code>"
    ],
    "r": 2,
    "exp": "L'affectation <code>self.nom = nom</code> crée l'attribut sur l'objet."
  },
  {
    "day": 1,
    "q": "Parmi ces propositions, laquelle décrit le mieux un objet dans le contexte de ce cours ?",
    "a": [
      "Une simple ligne de texte.",
      "Une instance contenant des attributs et capable d'exécuter des méthodes.",
      "Une sous-classe abstraite.",
      "Un fichier Python importé dans un autre fichier."
    ],
    "r": 1,
    "exp": "Un objet représente une instance concrète avec des données et des comportements."
  },
  {
    "day": 1,
    "q": "Quel problème de conception apparaît si l'on gère 100 produits avec des variables séparées comme <code>nom1</code>, <code>prix1</code>, <code>stock1</code> ?",
    "a": [
      "Le code devient difficile à maintenir et à faire évoluer.",
      "Python n'accepte pas plus de 10 variables.",
      "Les fonctions ne peuvent plus être appelées.",
      "La mémoire est automatiquement corrompue."
    ],
    "r": 0,
    "exp": "C'est précisément l'un des problèmes que la POO aide à résoudre en regroupant ces informations dans des objets."
  },
  {
    "day": 2,
    "q": "L'encapsulation consiste principalement à :",
    "a": [
      "Rendre toutes les données publiques.",
      "Contrôler l'accès aux données et protéger l'état interne d'un objet.",
      "Supprimer les attributs de classe.",
      "Remplacer les méthodes par des variables."
    ],
    "r": 1,
    "exp": "L'encapsulation vise à maîtriser l'accès aux données et à éviter les états incohérents."
  },
  {
    "day": 2,
    "q": "En Python, un attribut nommé <code>_prix_ht</code> est :",
    "a": [
      "Strictement inaccessible hors de la classe.",
      "Protégé par convention, mais techniquement accessible.",
      "Public sans convention particulière.",
      "Automatiquement converti en propriété."
    ],
    "r": 1,
    "exp": "Le simple underscore signale un usage interne, sans blocage technique réel."
  },
  {
    "day": 2,
    "q": "En Python, un attribut nommé <code>__marge</code> utilise :",
    "a": [
      "Le polymorphisme dynamique.",
      "Le name mangling.",
      "La surcharge d'opérateur.",
      "Le typage statique."
    ],
    "r": 1,
    "exp": "Le double underscore provoque un renommage interne pour limiter les accès accidentels et les conflits."
  },
  {
    "day": 2,
    "q": "Que se passe-t-il ici ?\n<pre><code>class Produit:\n    def __init__(self):\n        self._prix = 50\n\np = Produit()\np._prix = -10</code></pre>",
    "a": [
      "Python bloque automatiquement l'affectation.",
      "Aucune erreur n'est levée ici, car <code>_prix</code> n'est protégé que par convention.",
      "Python déclenche forcément une ValueError.",
      "L'attribut devient privé."
    ],
    "r": 1,
    "exp": "Sans propriété ou setter explicite, Python n'empêche pas cette modification."
  },
  {
    "day": 2,
    "q": "Le principal intérêt de <code>@property</code> est de :",
    "a": [
      "Transformer une méthode en attribut accessible avec une syntaxe naturelle.",
      "Créer automatiquement un constructeur.",
      "Forcer l'héritage multiple.",
      "Empêcher toute lecture d'un attribut."
    ],
    "r": 0,
    "exp": "Une propriété permet d'utiliser la syntaxe <code>objet.attribut</code> tout en gardant la logique d'une méthode."
  },
  {
    "day": 2,
    "q": "Quel est le comportement de ce code ?\n<pre><code>class Produit:\n    def __init__(self, prix):\n        self._prix = prix\n\n    @property\n    def prix(self):\n        return self._prix\n\np = Produit(20)\nprint(p.prix)</code></pre>",
    "a": [
      "Il faut écrire <code>p.prix()</code>.",
      "Le getter est appelé et retourne 20.",
      "Erreur car une propriété ne peut pas être lue.",
      "Le code affiche l'adresse mémoire de <code>p</code>."
    ],
    "r": 1,
    "exp": "Avec <code>@property</code>, on lit la valeur comme un attribut, sans parenthèses."
  },
  {
    "day": 2,
    "q": "Un setter associé à une propriété s'écrit avec :",
    "a": [
      "<code>@property.setter</code>",
      "<code>@nom.setter</code>",
      "<code>@setter</code>",
      "<code>@classmethod.setter</code>"
    ],
    "r": 1,
    "exp": "Le setter doit être associé à la propriété concernée, par exemple <code>@prix_ht.setter</code>."
  },
  {
    "day": 2,
    "q": "Quel est l'objectif de ce setter ?\n<pre><code>@prix_ht.setter\ndef prix_ht(self, valeur):\n    if valeur &lt;= 0:\n        raise ValueError(\"Le prix doit être positif\")\n    self._prix_ht = valeur</code></pre>",
    "a": [
      "Convertir tous les prix en chaînes.",
      "Valider la donnée avant de modifier l'état interne.",
      "Créer un attribut de classe.",
      "Rendre l'objet itérable."
    ],
    "r": 1,
    "exp": "Le setter sert ici à empêcher des prix incohérents."
  },
  {
    "day": 2,
    "q": "Quelle exception convient le mieux si un setter reçoit une valeur négative alors qu'elle devrait être positive ?",
    "a": [
      "ImportError",
      "AttributeError",
      "ValueError",
      "StopIteration"
    ],
    "r": 2,
    "exp": "La valeur a le bon type mais un contenu invalide : <code>ValueError</code> est adaptée."
  },
  {
    "day": 2,
    "q": "Quelle exception convient le mieux si un setter reçoit une chaîne alors qu'il attend un entier ?",
    "a": [
      "TypeError",
      "ZeroDivisionError",
      "RuntimeError",
      "SyntaxError"
    ],
    "r": 0,
    "exp": "Le problème porte sur le type de la donnée fournie, donc <code>TypeError</code>."
  },
  {
    "day": 2,
    "q": "Que va faire ce code ?\n<pre><code>@reference.setter\ndef reference(self, valeur):\n    self._reference = valeur.upper()</code></pre>",
    "a": [
      "Supprimer la référence.",
      "Normaliser la valeur en majuscules avant stockage.",
      "Empêcher toute lecture future.",
      "Convertir la référence en entier."
    ],
    "r": 1,
    "exp": "Le setter applique ici une transformation avant l'enregistrement."
  },
  {
    "day": 2,
    "q": "Pourquoi recommande-t-on souvent d'écrire dans le constructeur :\n<pre><code>self.prix_ht = prix_ht</code></pre>\nplutôt que\n<pre><code>self._prix_ht = prix_ht</code></pre> ?",
    "a": [
      "Pour déclencher la validation définie dans la propriété.",
      "Parce que Python interdit toujours les attributs commençant par un underscore.",
      "Pour transformer l'attribut en méthode magique.",
      "Pour éviter l'héritage."
    ],
    "r": 0,
    "exp": "Passer par la propriété permet de réutiliser les contrôles dès l'instanciation."
  },
  {
    "day": 2,
    "q": "Une propriété calculée sans setter est généralement :",
    "a": [
      "Un attribut de classe obligatoire.",
      "Une propriété en lecture seule.",
      "Une méthode statique.",
      "Un attribut privé inaccessible."
    ],
    "r": 1,
    "exp": "Si seule la lecture est définie, toute tentative d'écriture lèvera une erreur."
  },
  {
    "day": 2,
    "q": "Que va-t-il se passer ici ?\n<pre><code>class Produit:\n    @property\n    def prix_ttc(self):\n        return 120\n\np = Produit()\np.prix_ttc = 100</code></pre>",
    "a": [
      "La valeur 100 remplace 120.",
      "Une <code>AttributeError</code> est levée car aucun setter n'existe.",
      "Une <code>TypeError</code> est levée automatiquement.",
      "Le code modifie l'attribut de classe."
    ],
    "r": 1,
    "exp": "Une propriété sans setter est en lecture seule."
  },
  {
    "day": 2,
    "q": "La convention <code>nom</code>, <code>_nom</code>, <code>__nom</code> correspond respectivement à :",
    "a": [
      "Public, protégé par convention, privé avec name mangling.",
      "Privé, public, protégé.",
      "Méthode, propriété, classe.",
      "Instance, classe, abstraction."
    ],
    "r": 0,
    "exp": "C'est la convention classique rappelée dans le cours."
  },
  {
    "day": 2,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    def __init__(self):\n        self.__cout = 15\n\np = Produit()\nprint(hasattr(p, \"__cout\"))</code></pre>",
    "a": [
      "True",
      "False",
      "15",
      "Erreur de syntaxe"
    ],
    "r": 1,
    "exp": "Le name mangling renomme l'attribut en interne ; <code>__cout</code> n'existe pas littéralement sous ce nom."
  },
  {
    "day": 2,
    "q": "Une propriété calculée comme :\n<pre><code>@property\ndef valeur_stock(self):\n    return self._prix_ht * self._stock</code></pre>\na pour avantage de :",
    "a": [
      "Toujours recalculer une valeur cohérente à partir de l'état actuel.",
      "Remplacer définitivement les attributs internes.",
      "Créer automatiquement une base de données.",
      "Éviter toute opération arithmétique."
    ],
    "r": 0,
    "exp": "Une propriété calculée reste à jour sans stockage supplémentaire."
  },
  {
    "day": 2,
    "q": "Pourquoi l'encapsulation est-elle utile dans le cas d'un stock ?",
    "a": [
      "Pour empêcher toute lecture du stock.",
      "Pour garantir qu'on ne mette pas un texte ou une quantité négative sans contrôle.",
      "Pour rendre toutes les modifications plus lentes.",
      "Pour éviter l'utilisation de listes."
    ],
    "r": 1,
    "exp": "Le but est de préserver un état valide et cohérent."
  },
  {
    "day": 3,
    "q": "L'héritage permet à une classe enfant de :",
    "a": [
      "Récupérer les attributs et méthodes d'une classe parente.",
      "Supprimer la classe parente.",
      "Interdire le polymorphisme.",
      "Créer automatiquement un Singleton."
    ],
    "r": 0,
    "exp": "Une classe enfant hérite du comportement et de l'état définis dans la classe parente."
  },
  {
    "day": 3,
    "q": "La syntaxe correcte pour faire hériter <code>ProduitElectronique</code> de <code>Produit</code> est :",
    "a": [
      "<code>class ProduitElectronique - Produit:</code>",
      "<code>class ProduitElectronique(Produit):</code>",
      "<code>class ProduitElectronique extends Produit:</code>",
      "<code>class ProduitElectronique =&gt; Produit:</code>"
    ],
    "r": 1,
    "exp": "En Python, l'héritage se déclare entre parenthèses."
  },
  {
    "day": 3,
    "q": "Que fait l'appel suivant dans une sous-classe ?\n<pre><code>super().__init__(reference, nom, prix_ht, stock)</code></pre>",
    "a": [
      "Il crée une seconde instance du parent.",
      "Il appelle le constructeur de la classe parente pour initialiser la partie héritée.",
      "Il remplace définitivement le parent.",
      "Il convertit l'objet en classe abstraite."
    ],
    "r": 1,
    "exp": "C'est l'usage standard de <code>super()</code> dans <code>__init__</code>."
  },
  {
    "day": 3,
    "q": "Que risque-t-on si une sous-classe redéfinit <code>__init__</code> sans appeler <code>super().__init__()</code> alors qu'elle dépend des attributs du parent ?",
    "a": [
      "Aucun risque particulier.",
      "Les attributs hérités peuvent ne jamais être initialisés.",
      "Python ajoute automatiquement les attributs manquants.",
      "L'héritage est transformé en composition."
    ],
    "r": 1,
    "exp": "Si le parent initialise des attributs essentiels, ils n'existeront pas dans l'enfant si on n'appelle pas son constructeur."
  },
  {
    "day": 3,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    def afficher(self):\n        return \"Produit\"\n\nclass ProduitElectronique(Produit):\n    pass\n\np = ProduitElectronique()\nprint(p.afficher())</code></pre>",
    "a": [
      "Produit",
      "ProduitElectronique",
      "Erreur",
      "None"
    ],
    "r": 0,
    "exp": "La méthode n'étant pas redéfinie, la sous-classe hérite de celle du parent."
  },
  {
    "day": 3,
    "q": "Quand une sous-classe redéfinit une méthode du parent avec la même signature, on parle de :",
    "a": [
      "Surcharge ou redéfinition de méthode.",
      "Encapsulation.",
      "Name mangling.",
      "Abstraction totale."
    ],
    "r": 0,
    "exp": "La sous-classe remplace le comportement hérité pour cette méthode."
  },
  {
    "day": 3,
    "q": "Que va afficher ce code ?\n<pre><code>class A:\n    def f(self):\n        return \"A\"\n\nclass B(A):\n    def f(self):\n        return \"B\"\n\nprint(B().f())</code></pre>",
    "a": [
      "A",
      "B",
      "AB",
      "Erreur"
    ],
    "r": 1,
    "exp": "La méthode de l'enfant prend le dessus : c'est la surcharge."
  },
  {
    "day": 3,
    "q": "Le polymorphisme signifie principalement que :",
    "a": [
      "Tous les objets doivent avoir exactement la même implémentation.",
      "La même interface peut produire des comportements différents selon le type d'objet.",
      "Une méthode ne peut exister que dans une seule classe.",
      "Les classes abstraites sont inutiles."
    ],
    "r": 1,
    "exp": "Plusieurs classes peuvent partager une même interface tout en ayant des comportements adaptés."
  },
  {
    "day": 3,
    "q": "Dans une boucle qui appelle <code>calculer_frais_livraison()</code> sur plusieurs produits de types différents, l'intérêt du polymorphisme est de :",
    "a": [
      "Supprimer le besoin de toute classe parente.",
      "Pouvoir appeler la même méthode sans connaître tous les détails concrets de chaque type.",
      "Empêcher l'héritage.",
      "Forcer chaque produit à renvoyer le même résultat."
    ],
    "r": 1,
    "exp": "Le code client manipule une interface commune, pas des cas particuliers câblés partout."
  },
  {
    "day": 3,
    "q": "Que va afficher ce code ?\n<pre><code>class Produit:\n    pass\n\nclass ProduitElectronique(Produit):\n    pass\n\np = ProduitElectronique()\nprint(isinstance(p, ProduitElectronique), isinstance(p, Produit))</code></pre>",
    "a": [
      "True False",
      "False True",
      "True True",
      "False False"
    ],
    "r": 2,
    "exp": "<code>p</code> est une instance de sa classe concrète et aussi de la classe parente."
  },
  {
    "day": 3,
    "q": "À quoi sert principalement <code>isinstance(obj, Classe)</code> ?",
    "a": [
      "Créer une instance.",
      "Vérifier si un objet appartient à une classe ou à l'une de ses classes parentes.",
      "Remplacer <code>super()</code>.",
      "Définir un attribut de classe."
    ],
    "r": 1,
    "exp": "Cette fonction sert à tester le type d'un objet de manière sûre dans une hiérarchie d'héritage."
  },
  {
    "day": 3,
    "q": "Une classe abstraite est une classe qui :",
    "a": [
      "Doit toujours être instanciée avant les autres.",
      "Ne peut pas être instanciée tant que ses méthodes abstraites ne sont pas implémentées.",
      "Ne peut contenir aucune méthode concrète.",
      "Interdit l'héritage."
    ],
    "r": 1,
    "exp": "Une classe abstraite sert de modèle et impose certains comportements à ses sous-classes."
  },
  {
    "day": 3,
    "q": "Le décorateur <code>@abstractmethod</code> indique qu'une méthode :",
    "a": [
      "Doit être supprimée dans l'enfant.",
      "Doit être obligatoirement implémentée par les sous-classes concrètes.",
      "Devient une méthode statique.",
      "Ne peut pas avoir de nom."
    ],
    "r": 1,
    "exp": "C'est un contrat imposé aux classes concrètes."
  },
  {
    "day": 3,
    "q": "Que se passe-t-il si l'on tente d'instancier une classe abstraite qui possède encore des méthodes abstraites non implémentées ?",
    "a": [
      "Python crée l'objet avec des méthodes vides.",
      "Python lève une erreur de type.",
      "Python transforme la classe en interface.",
      "Le programme continue sans rien faire."
    ],
    "r": 1,
    "exp": "Une <code>TypeError</code> est levée dans ce cas."
  },
  {
    "day": 3,
    "q": "Dans le cours, pourquoi l'héritage évite-t-il le copier-coller catastrophique ?",
    "a": [
      "Parce qu'il supprime tous les constructeurs.",
      "Parce que le code commun reste centralisé dans la classe parente.",
      "Parce qu'il interdit les méthodes spécifiques.",
      "Parce qu'il remplace les propriétés par des listes."
    ],
    "r": 1,
    "exp": "L'héritage factorise le code commun et réduit la duplication."
  },
  {
    "day": 3,
    "q": "Dans quel cas <code>super().afficher()</code> est particulièrement utile ?",
    "a": [
      "Quand on veut supprimer l'affichage du parent.",
      "Quand on veut réutiliser l'affichage du parent puis ajouter des détails spécifiques dans l'enfant.",
      "Quand on veut rendre la méthode abstraite.",
      "Quand on veut lire un attribut privé d'une autre classe sans convention."
    ],
    "r": 1,
    "exp": "On étend ainsi le comportement du parent au lieu de tout réécrire."
  },
  {
    "day": 3,
    "q": "Quelle relation décrit le mieux l'héritage dans ce cours ?",
    "a": [
      "A un",
      "Est un",
      "Contient toujours",
      "Observe"
    ],
    "r": 1,
    "exp": "Une classe enfant représente souvent une spécialisation de la classe parente : 'est un'."
  },
  {
    "day": 3,
    "q": "Quel est le but principal d'une hiérarchie de produits avec une classe abstraite <code>Produit</code> et des classes concrètes spécialisées ?",
    "a": [
      "Empêcher toute spécialisation.",
      "Garantir un socle commun tout en laissant chaque type implémenter ses spécificités.",
      "Supprimer la notion de méthode.",
      "Stocker les produits dans des tuples uniquement."
    ],
    "r": 1,
    "exp": "On combine contrat commun, spécialisation et polymorphisme."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__str__</code> sert principalement à :",
    "a": [
      "Donner une représentation lisible pour l'utilisateur.",
      "Créer l'objet.",
      "Comparer deux objets.",
      "Rendre la classe abstraite."
    ],
    "r": 0,
    "exp": "<code>__str__</code> est utilisée notamment par <code>print()</code> pour un affichage humain."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__repr__</code> vise plutôt :",
    "a": [
      "L'affichage destiné au débogage et au développeur.",
      "Le calcul du prix TTC.",
      "La suppression de l'objet.",
      "La gestion du stockage JSON."
    ],
    "r": 0,
    "exp": "<code>__repr__</code> fournit une représentation plus technique et explicite."
  },
  {
    "day": 4,
    "q": "Que va utiliser <code>print(obj)</code> en priorité si la classe définit à la fois <code>__str__</code> et <code>__repr__</code> ?",
    "a": [
      "<code>__repr__</code> en priorité absolue.",
      "<code>__str__</code> d'abord.",
      "<code>__len__</code> puis <code>__repr__</code>.",
      "Aucune méthode spéciale."
    ],
    "r": 1,
    "exp": "Pour l'affichage utilisateur, Python privilégie <code>__str__</code>."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__len__</code> permet à un objet de :",
    "a": [
      "Être appelé comme une fonction.",
      "Être utilisé avec <code>len()</code>.",
      "Être trié automatiquement.",
      "Être transformé en Singleton."
    ],
    "r": 1,
    "exp": "<code>len(objet)</code> appelle <code>objet.__len__()</code>."
  },
  {
    "day": 4,
    "q": "Que retourne idéalement <code>__len__</code> ?",
    "a": [
      "Une chaîne descriptive.",
      "Un entier représentant une taille ou un nombre d'éléments.",
      "Toujours un booléen.",
      "Un tuple."
    ],
    "r": 1,
    "exp": "<code>__len__</code> doit fournir une taille, en pratique un entier."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__bool__</code> permet de personnaliser :",
    "a": [
      "L'affichage de l'objet.",
      "Son comportement dans un contexte booléen comme <code>if objet:</code>.",
      "Sa destruction en mémoire.",
      "Son héritage multiple."
    ],
    "r": 1,
    "exp": "Elle définit comment l'objet est évalué comme vrai ou faux."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__getitem__</code> rend possible :",
    "a": [
      "La comparaison avec <code>==</code>.",
      "L'accès avec la syntaxe <code>objet[index]</code>.",
      "La création d'un nouvel objet avec <code>()</code>.",
      "L'usage de <code>sorted()</code>."
    ],
    "r": 1,
    "exp": "Elle est utilisée pour l'indexation ou l'accès par clé."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__setitem__</code> permet :",
    "a": [
      "De modifier une valeur via la syntaxe <code>objet[index] = valeur</code>.",
      "De rendre un objet abstrait.",
      "D'appeler le parent.",
      "De valider automatiquement tous les setters."
    ],
    "r": 0,
    "exp": "C'est l'équivalent d'une affectation indexée sur un conteneur personnalisé."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__eq__</code> est appelée lors de l'utilisation de :",
    "a": [
      "<code>+</code>",
      "<code>&lt;</code>",
      "<code>==</code>",
      "<code>len()</code>"
    ],
    "r": 2,
    "exp": "Elle définit la logique d'égalité entre deux objets."
  },
  {
    "day": 4,
    "q": "Pourquoi est-il pertinent, dans ce cours, de comparer deux produits sur leur référence dans <code>__eq__</code> ?",
    "a": [
      "Parce que la référence identifie logiquement un produit.",
      "Parce qu'un nom ne peut jamais être comparé.",
      "Parce que Python impose cette règle.",
      "Parce que <code>__eq__</code> ne peut pas accéder aux attributs."
    ],
    "r": 0,
    "exp": "La référence joue le rôle d'identifiant métier plus stable qu'un simple nom ou un prix."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__lt__</code> correspond à l'opérateur :",
    "a": [
      "<code>==</code>",
      "<code>&lt;</code>",
      "<code>+</code>",
      "<code>in</code>"
    ],
    "r": 1,
    "exp": "<code>lt</code> signifie 'less than', donc inférieur à."
  },
  {
    "day": 4,
    "q": "Pourquoi implémenter <code>__lt__</code> est-il suffisant pour de nombreux tris dans ce projet ?",
    "a": [
      "Parce que <code>sorted()</code> peut s'appuyer sur la relation d'ordre définie par <code>&lt;</code>.",
      "Parce que cela crée automatiquement toutes les autres méthodes magiques.",
      "Parce que <code>sorted()</code> ignore complètement les objets.",
      "Parce que Python transforme alors l'objet en liste."
    ],
    "r": 0,
    "exp": "Une comparaison cohérente via <code>&lt;</code> suffit souvent pour trier une collection."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__add__</code> permet de surcharger :",
    "a": [
      "La lecture d'un attribut.",
      "L'opérateur <code>+</code>.",
      "La création d'une classe.",
      "Le mot-clé <code>for</code>."
    ],
    "r": 1,
    "exp": "Elle définit le comportement de l'addition entre objets."
  },
  {
    "day": 4,
    "q": "La méthode spéciale <code>__iadd__</code> est utilisée pour :",
    "a": [
      "<code>==</code>",
      "<code>&lt;</code>",
      "<code>+=</code>",
      "<code>len()</code>"
    ],
    "r": 2,
    "exp": "Elle gère l'addition en place, comme dans <code>panier += produit</code>."
  },
  {
    "day": 4,
    "q": "Dans une implémentation correcte de <code>__iadd__</code>, que faut-il généralement retourner ?",
    "a": [
      "Toujours <code>None</code>.",
      "Un booléen.",
      "L'objet modifié, souvent <code>self</code>.",
      "Le nom de la classe sous forme de chaîne."
    ],
    "r": 2,
    "exp": "Pour que <code>+=</code> reste cohérent, on retourne l'objet mis à jour."
  },
  {
    "day": 4,
    "q": "Une <code>@classmethod</code> reçoit comme premier argument :",
    "a": [
      "<code>self</code>",
      "<code>cls</code>",
      "<code>obj</code>",
      "Aucun argument implicite"
    ],
    "r": 1,
    "exp": "Elle travaille au niveau de la classe, pas d'une instance particulière."
  },
  {
    "day": 4,
    "q": "Une <code>@staticmethod</code> reçoit comme premier argument implicite :",
    "a": [
      "Toujours <code>self</code>.",
      "Toujours <code>cls</code>.",
      "Aucun argument implicite.",
      "L'attribut de classe principal."
    ],
    "r": 2,
    "exp": "Une méthode statique est une fonction utilitaire rangée dans la classe."
  },
  {
    "day": 4,
    "q": "Quel est l'intérêt principal d'une factory method comme :\n<pre><code>@classmethod\ndef from_string(cls, chaine): ...</code></pre>",
    "a": [
      "Créer une instance à partir d'un autre format d'entrée tout en restant compatible avec l'héritage.",
      "Supprimer le constructeur.",
      "Interdire les sous-classes.",
      "Remplacer toutes les propriétés par des dictionnaires."
    ],
    "r": 0,
    "exp": "<code>cls</code> permet de construire la bonne classe, y compris dans une hiérarchie."
  },
  {
    "day": 4,
    "q": "Pourquoi implémenter <code>__hash__</code> lorsque l'on redéfinit l'égalité logique d'un objet ?",
    "a": [
      "Pour rendre l'objet compatible avec les <code>set</code> et les clés de dictionnaire.",
      "Pour accélérer automatiquement tout le programme.",
      "Pour empêcher toute comparaison future.",
      "Pour remplacer <code>__repr__</code>."
    ],
    "r": 0,
    "exp": "Un objet hashable peut être utilisé dans les structures fondées sur le hachage, comme les ensembles."
  },
  {
    "day": 5,
    "q": "Le pattern Singleton a pour but de :",
    "a": [
      "Créer autant d'instances que possible.",
      "Garantir qu'une classe n'a qu'une seule instance partagée dans l'application.",
      "Empêcher toute méthode spéciale.",
      "Supprimer la POO au profit du procédural."
    ],
    "r": 1,
    "exp": "Le Singleton centralise l'accès à une ressource unique ou à un gestionnaire global."
  },
  {
    "day": 5,
    "q": "Dans ce code, pourquoi <code>__new__</code> est-il utilisé dans un Singleton ?\n<pre><code>class Gestionnaire:\n    _instance = None\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance</code></pre>",
    "a": [
      "Parce que <code>__new__</code> intervient au moment de la création effective de l'instance.",
      "Parce que <code>__init__</code> ne peut pas exister en Python.",
      "Parce qu'un Singleton ne doit jamais retourner d'objet.",
      "Parce que <code>__new__</code> remplace les propriétés."
    ],
    "r": 0,
    "exp": "<code>__new__</code> permet de contrôler si une nouvelle instance doit être créée ou si l'existante doit être réutilisée."
  },
  {
    "day": 5,
    "q": "Que va afficher ce code de Singleton ?\n<pre><code>g1 = GestionnaireInventaire()\ng2 = GestionnaireInventaire()\nprint(g1 is g2)</code></pre>",
    "a": [
      "False",
      "True",
      "Erreur",
      "None"
    ],
    "r": 1,
    "exp": "L'opérateur <code>is</code> vérifie l'identité. Dans un Singleton, les deux variables pointent vers le même objet."
  },
  {
    "day": 5,
    "q": "Le principal intérêt du pattern Factory est de :",
    "a": [
      "Centraliser et abstraire la création des objets.",
      "Remplacer les classes abstraites.",
      "Éviter complètement l'héritage.",
      "Rendre tous les objets uniques."
    ],
    "r": 0,
    "exp": "La Factory évite de disperser la logique de création dans tout le code."
  },
  {
    "day": 5,
    "q": "Dans ce cours, la Factory est particulièrement utile parce qu'elle permet :",
    "a": [
      "D'ajouter un nouveau type de produit sans modifier le code client partout.",
      "De supprimer toute validation.",
      "D'interdire la spécialisation des produits.",
      "De rendre inutiles les constructeurs."
    ],
    "r": 0,
    "exp": "Le code appelant demande un type de produit, sans connaître tous les détails des classes concrètes."
  },
  {
    "day": 5,
    "q": "Le pattern Observer permet à plusieurs objets de :",
    "a": [
      "Partager exactement la même mémoire.",
      "Être automatiquement notifiés lorsqu'un sujet change d'état.",
      "Fusionner leurs classes.",
      "Remplacer l'encapsulation."
    ],
    "r": 1,
    "exp": "Les observateurs réagissent à des événements sans couplage fort avec le sujet."
  },
  {
    "day": 5,
    "q": "Dans le contexte PyInventory, un observateur de stock bas sert à :",
    "a": [
      "Supprimer les produits sans stock.",
      "Déclencher automatiquement une alerte quand un seuil est franchi.",
      "Créer une nouvelle catégorie à chaque vente.",
      "Empêcher toute modification du stock."
    ],
    "r": 1,
    "exp": "C'est l'idée d'une réaction automatique à un événement métier."
  },
  {
    "day": 5,
    "q": "La composition exprime plutôt une relation :",
    "a": [
      "Est un",
      "A un",
      "Est toujours abstrait",
      "Vaut zéro"
    ],
    "r": 1,
    "exp": "Par exemple, un produit alimentaire a un gestionnaire de stock et un gestionnaire de péremption."
  },
  {
    "day": 5,
    "q": "Pourquoi le cours conseille-t-il souvent de préférer la composition en cas de doute ?",
    "a": [
      "Parce qu'elle est généralement plus flexible que des hiérarchies d'héritage profondes.",
      "Parce qu'elle interdit toutes les classes abstraites.",
      "Parce qu'elle rend les objets plus lents.",
      "Parce qu'elle supprime les méthodes."
    ],
    "r": 0,
    "exp": "La composition assemble des comportements sans rigidifier autant la structure du programme."
  },
  {
    "day": 5,
    "q": "Dans le principe SOLID, le S de SRP signifie :",
    "a": [
      "Static Responsibility Principle",
      "Single Responsibility Principle",
      "Simple Reuse Principle",
      "Standard Representation Principle"
    ],
    "r": 1,
    "exp": "SRP : une classe devrait avoir une seule responsabilité principale."
  },
  {
    "day": 5,
    "q": "Le principe Open/Closed signifie qu'un code doit être :",
    "a": [
      "Ouvert à la modification permanente, fermé à l'extension.",
      "Ouvert à l'extension, fermé à la modification du code existant validé.",
      "Toujours fermé dans un dépôt privé.",
      "Limité aux méthodes statiques."
    ],
    "r": 1,
    "exp": "On cherche à étendre le comportement sans casser ni retoucher partout le code déjà stable."
  },
  {
    "day": 5,
    "q": "Le principe de substitution de Liskov implique qu'une sous-classe doit :",
    "a": [
      "Toujours changer complètement le comportement du parent.",
      "Pouvoir remplacer sa classe parente sans casser le code client qui attend le parent.",
      "Supprimer les méthodes abstraites.",
      "Interdire toute spécialisation."
    ],
    "r": 1,
    "exp": "Une sous-classe correcte respecte le contrat attendu par le code qui manipule la classe parente."
  },
  {
    "day": 5,
    "q": "Dans le cours, pourquoi une interface d'observateur avec une seule méthode <code>mise_a_jour()</code> illustre-t-elle bien l'Interface Segregation ?",
    "a": [
      "Parce qu'elle évite d'imposer de nombreuses méthodes inutiles aux classes qui l'implémentent.",
      "Parce qu'elle interdit l'héritage.",
      "Parce qu'elle force tous les observateurs à être des Singletons.",
      "Parce qu'elle remplace les exceptions."
    ],
    "r": 0,
    "exp": "Une petite interface ciblée est plus saine qu'une grosse interface fourre-tout."
  },
  {
    "day": 5,
    "q": "Le principe de Dependency Inversion est mieux respecté si le gestionnaire dépend :",
    "a": [
      "De classes concrètes codées en dur uniquement.",
      "D'abstractions comme une interface ou une classe de base, plutôt que de détails concrets.",
      "D'aucune classe du tout.",
      "Uniquement de méthodes statiques globales."
    ],
    "r": 1,
    "exp": "Dépendre d'abstractions rend le code plus modulable et testable."
  },
  {
    "day": 5,
    "q": "Parmi ces choix, lequel relève de la composition ?",
    "a": [
      "<code>class ProduitNumerique(Produit)</code>",
      "<code>self.stock = GestionStock(...)</code>",
      "<code>@abstractmethod</code>",
      "<code>super().__init__()</code>"
    ],
    "r": 1,
    "exp": "Ici l'objet possède un autre objet comme composant interne : c'est une relation 'a un'."
  },
  {
    "day": 5,
    "q": "Le pattern le plus adapté pour centraliser l'inventaire dans une seule instance partagée est :",
    "a": [
      "Observer",
      "Factory",
      "Singleton",
      "Decorator"
    ],
    "r": 2,
    "exp": "Le Singleton garantit l'unicité de l'instance de gestion."
  },
  {
    "day": 5,
    "q": "Le pattern le plus adapté pour créer différents types de produits à partir d'un type demandé est :",
    "a": [
      "Observer",
      "Factory",
      "Singleton",
      "Adapter"
    ],
    "r": 1,
    "exp": "La Factory décide quelle classe concrète instancier selon le besoin."
  },
  {
    "day": 5,
    "q": "Le pattern le plus adapté pour réagir automatiquement à une rupture de stock ou à un stock faible est :",
    "a": [
      "Singleton",
      "Factory",
      "Observer",
      "Builder"
    ],
    "r": 2,
    "exp": "L'Observer diffuse un événement à plusieurs abonnés sans les coupler directement."
  }
];