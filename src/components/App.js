import React, { Component } from 'react';
import RecipeCard from "./RecipeCard";
import { Grid, Row } from 'react-bootstrap';
import '../App.css';

class App extends Component {
  render() {
    return (
      // <div className="App" style={{fontSize: "3rem"}}>
      //   Yellow! ☺
      // </div>
      <div className="App">
        <Grid>
          <Row>
            <RecipeCard img="pizza.jpg"/>
            <RecipeCard img="veganPho.jpg"/>
            <RecipeCard img="avocadoToast.jpg"/>
            <RecipeCard img="blueberryScones.jpg"/>
            <RecipeCard img="deliSandwich.jpg"/>
            <RecipeCard img="flankSteakTacos.jpg"/>
            <RecipeCard img="healthyGazpacho.jpg"/>
            <RecipeCard img="melonGrapeSalad.jpg"/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
