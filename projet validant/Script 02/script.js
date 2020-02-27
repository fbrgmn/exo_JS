// 2.2. Opérations & boucles
// 2.2.1 Calculs rapides


var n = prompt("Donne moi un chiffre que je calcule le factoriel:")

function factoriel(n) {
  if (n < 0) {
    window.alert("Merci de taper un chiffre positif");
    console.log("Le chiffre n'est pas positif, on a renvoyé une boite d'erreur à l'user.")
  } else {
    return (n != 1) ? n * factoriel(n - 1): 1;
  }

}
console.log(factoriel(n))
