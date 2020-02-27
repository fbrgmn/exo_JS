// Pyramides
let etage = prompt("Salut, bienvenue dans ma super pyramide !Combien d'étages veux-tu ?");
const palier = 1;
const space = " ";
const hashtag= "#";
let e = etage - palier;
let d = 1;

while (e >= 0) {
console.log(space.repeat(e)+ hashtag.repeat(d));
e -=1
d +=1
}
