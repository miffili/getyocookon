import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import { Container, CardDeck } from "reactstrap";
import recipes from "../recipes";

class App extends Component {
  state = {
    recipes
  };


  render() {
    return (
      <div className="App">
        <Container
          style={{
            margin: "2rem auto"
          }}
        >
          <CardDeck>
            {Object.keys(this.state.recipes).map(key =>
              <RecipeCard
                key={key}
                details={this.state.recipes[key]}
              />
            )}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default App;
