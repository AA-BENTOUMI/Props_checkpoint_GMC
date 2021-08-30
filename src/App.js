// CSS
import "./App.css";
import React, { useState } from "react";
import MoviesCards from "./MoviesComponents/MoviesCard";
import NavBar from "./NavBarComponenets/NavBar";
import Footer from "./FooterComponents/Footer";
import ModalMovies from "./ModalComponents/ModalMovies";
// data
import { listMovies } from "./Consts/ConstMovieLisit";
function App() {
  const [list, setList] = useState(listMovies);
  const [searchedhWord, setSearchedhWord] = useState("");
  const [rateStars, setRateState] = useState("");
  /*********** add movies function  **********************/
  const addItem = (item) => {
    setList([item, ...list]);
  };

  return (
    <div className="App">
      <NavBar SearchedhWord={setSearchedhWord} setRateState={setRateState} />
      <ModalMovies addItem={addItem} />
      <MoviesCards
        list={list}
        searchedhWord={searchedhWord}
        rateStars={rateStars}
      />
      <Footer />
    </div>
  );
}

export default App;
