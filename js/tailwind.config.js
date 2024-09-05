let memberlist =
[
    "Rifat",
    "Fahim",
    " Golam Rahman",
    "Bilkis",
    "Tanvir",
    "Alif"

];
function grettings(membername) {
    let utterance = new SpeechSynthesisUtterance(`Hello  ${membername} `);
speechSynthesis.speak(utterance);
  console.log(`welcome ${membername}`);

}

for (let i = 0; i < memberlist.length; i++) {
   grettings(memberlist[i]);    
}
