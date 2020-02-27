const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// function pour permettre l'ordre dynamique "strings" d'un objet avec des arrays
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    }
}

// function pour permettre l'ordre dynamique "values" d'un objet avec des arrays
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// variable pour enregistrer l'objet dans l'ordre souhaité
let booksListAZ = books.sort(compareValues("rented", "desc"))
// console.log(entrepreneursList) // Test
let booksTotal = books.length
// console.log(total)
let booksRented = 0

// (1) les livres ont été au moins empruntés une fois
books.forEach(book => {
  if (book.rented > 0) {
    booksRented++
    console.log('"' + book.title + '" a été loué au moins une fois');
  }
});
console.log(`%cSur un total de ${booksTotal} livres, ${booksRented} ont été loués au moins une fois`, 'background: black; color: red;')

// (2) livre le plus emprunté
console.log(`%c${booksListAZ[0].title} a été le livre le plus emprunté`, 'background: black; color: green;')

// (3) livre le moins emprunté
console.log(`%c${booksListAZ[booksTotal - 1].title} a été le livre le moins emprunté`, 'background: black; color: red;')

// (4) livre avec l'ID: 873495
books.forEach(book => {
  if (book.id === 873495) {
    console.log("Livre avec l'id 873495 : " + book.title + ` (${book.id})`);
  }
});

// (5) Supprime le livre avec l'ID: 133712
// source: https://stackoverflow.com/a/10024926
books.splice(books.findIndex(i => i.id === 133712), 1);
console.log(`books.length ${books.length}`);

// (6) Trie les livres par ordre alphabétique
let booksList = books.sort(dynamicSort("title"))

booksList.forEach(book => {
  console.log(book.id + " - " + book.title);
});
