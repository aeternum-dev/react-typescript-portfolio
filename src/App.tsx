import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import MyLogo from './components/myLogo';

function App() {
  const placeholder = "Én tudok főzni, én áldoztam ezért. Reggel hétkor fölkeltem, marhát pucoltam, az, hogy egy faszszopó geci kurva elment a retkes kurva anyjába engem nem érdekel. 260 kilómétert utaztak a cigányok, hát nehogy már olyan nyerjen bazdmeg aki nem tud főzni. Én aki reggel óta főzök, hát menjetek a faszomba bazdmeg. A gecibe. eközben felrúgja a díszletet Szorakoztok velem? Hagyjátok már bazdmeg mi a faszt szavazzak? Ez egy főzőverseny baszki. Há mit szavazzak? Mit szavazzak bazdmeg? Mit? Hogy a pincér csinálja meg az étterembe? Hétkor pucoltam a marhapörköltet faszszopó. Baszki eközben újra bele rúg a díszletbe Gyere ide! Gyere ide kisköcsög most mond el! Aki erős itt meg áll előttem. Hétkor elkezdtem pucolni a marhapörköltet, mi a faszomnak szavazzak. Há kinek van igaza gyerekek? Egy verseny. Én ezért nem aludtam egy, kettő, három napot. mutatja az ujján a menyasszonyomat nyüstöltem, hogy pucolja a krumplit, érted? Pucolta a krumplit a Papp Dani úgy, hogy neki családi programja volt bazdmeg. Rohangált ide, hogy a térítést ide hozza. Én könyörögtem, hogy... Ne csitítgass Timike, üjjé le! Akkor szavazzuk meg! Hát nyerjen olyan aki nem tud főzni? Nyerjen a Rómeó? Ez egy egy főző verseny? A Rómeó tud úgy főzni mint én? Rómeó, szerinted tudsz úgy főzni mint én? Akkor a Győző nyert, jó éjszakát sziasztok";
  return (
    <div className="App">
      <Navbar/>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
      <p>{placeholder}</p>
    </div>
  );
}

export default App;
