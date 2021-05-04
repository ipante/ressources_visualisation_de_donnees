/* PYTHON -> JS */

// environnement (web & node)

// JS & Python sont sensibles à la casse

// quand mettre des ";" ?
// aussi souvent que possible
// compter sur les retours à la ligne

// commentaires

// commentaires sur une seule ligne
/* commentaires sur plusieurs lignes */

// indentation
d3.select('div').data(donnees)
    .enter()
    .append('div')
        .attr('name','valeur');

// variables & scope

// ANCIENNE manière de faire

// variable déclarée dans l'espace global
nombre = 13;
var nombre = 13;

if(g < 10){
    // variable non limitée à ce bloc
    var nombre = 13;
}

function comparer(){
    // variable est limitée à cette fonction
    var nombre = 13;
}


// NOUVELLE manière de faire
let nombre = 13;
const nombre = 13;
// dans les deux le scope est respecté
// == le scope attendu

// objets (== lists)
let individu = {
    prenom : 'Eric',
    nom : 'Dumieux'
}

// modifier une propriété
individu.prenom = 'Charlène';

// récupérer une propriété
let prenom = individu.prenom;

// ajouter une propriété
individu.age = 32;

// notation alternative pour
individu['age'] = 32

// des propriétés avec caractères spéciaux
pays['produit intérieur brut'];

// des propriétés dynamiques
pays[individu.prenom];

// tableaux (== dict)
let tableau = ['a',2];
let tableau = new Array();
// accès aux propriétés
tableau[0]; // 'a'
tableau[1]; // 2

// opérations sur tableaux (map, filter, reduce)

// ? est-ce un map ou un objet tableau ?
// dans la console tester avec typeof nomVariable
// hors de la console tester avec console.log(idem);

// exemple de transformation

// exemple de filtrage
let t = [3,4,5,6];
let plus_grand_que_4 = t.filter(function(v){
    if(v > 4){
        return v;
    }
});

// exemple de multiplication par 3
t.map(function(v){return v*3});

// fonctions

// écriture explicite
function test(p1,p2){}; // hoisting
// let test = function(p1,p2){};

// écriture en ES6
// fonctions fléchées (== lambda)
t.map(function(v){return v*3});
t.map(v => v*3);

// boucles & conditions
if(individu.prenom === 'Eric' && individu.nom !== 'Dumieux'){}

// opérateurs
// and c'est &&
// or c'est ||
// la négation c'est !
if(nombre > 5){}
else if(nombre < 0){}
else{}

// promesses
Promise.all([
    d3.csv("/data/cities.csv"),
    d3.tsv("/data/animals.tsv")
  ]).then(function(data) {
    console.log(data[0][0])  // first row of cities
    console.log(data[1][0])  // first row of animals
  });

// décomposition
let {prenom,nom} = individu;
// du coup, prenom contient individu.prenom
// du coup, nom contient individu.nom

// paramètre du reste

// utile pour récupérer un nombre variable de paramètres
function sommeVariable(x,...y){
    console.log('valeur de x',x);
    console.log('valeur de ...y',y);
}

// utile pour aplatir des tableaux
let t1 = [4,5,6];
let t2 = [7,8,9];
let t1_et_t2 = [...t1,...t2];
// ou passer plus de paramètres à une fonction
// qui normalement n'accepte pas de tableaux

// debug
