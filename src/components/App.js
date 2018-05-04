import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import { Container, CardDeck, Row } from "reactstrap";
import "../App.css";

class App extends Component {
  render() {
    return (
      // <div className="App" style={{fontSize: "3rem"}}>
      //   Yellow! ☺
      // </div>
      <div className="App">
        <Container
          style={{
            margin: "2rem auto"
          }}
        >
          <CardDeck>
            <RecipeCard img="pizza.jpg" />
            <RecipeCard img="veganPho.jpg" />
            <RecipeCard img="avocadoToast.jpg" />
            <RecipeCard img="blueberryScones.jpg" />
            <RecipeCard img="deliSandwich.jpg" />
            <RecipeCard img="healthyGazpacho.jpg" />
            <RecipeCard img="pizza.jpg" />
            <RecipeCard img="deliSandwich.jpg" />
            <RecipeCard img="flankSteakTacos.jpg" />
            <RecipeCard img="deliSandwich.jpg" />
            <RecipeCard img="flankSteakTacos.jpg" />
            <RecipeCard img="veganPho.jpg" />
            <RecipeCard img="melonGrapeSalad.jpg" />
            <RecipeCard img="avocadoToast.jpg" />
            <RecipeCard img="healthyGazpacho.jpg" />
            <RecipeCard img="deliSandwich.jpg" />
            <RecipeCard img="blueberryScones.jpg" />
            <RecipeCard img="healthyGazpacho.jpg" />
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default App;
