// CSS
import "./App.css";
import React, { useState } from "react";
import MoviesCards from "./MoviesComponents/MoviesCard";
import NavBar from "./NavBarComponenets/NavBar";
import Footer from "./FooterComponents/Footer";
import ModalMovies from "./ModalComponents/ModalMovies";
import { Route } from "react-router-dom";
import Trailer from "./Description/Trailer";
// data
import { listMovies } from "./Consts/ConstMovieLisit";
import { Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <ModalMovies addItem={addItem} />
          <MoviesCards
            list={list}
            searchedhWord={searchedhWord}
            rateStars={rateStars}
          />
        </Route>
        <Route
          path="/trailer/:id"
          render={(props) => <Trailer {...props} list={list} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
