import React from "react";
import { Button, Thumbnail, Col } from 'react-bootstrap';
import spatula from '../spatula.png';
import spatulaFull from '../spatula_full.png';

const RecipeCard = (props) => {
  const buttonStyle = {
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "0.2rem"
  };
  const ratingStyle = {
    display: "flex",
    justifyContent: "start",
    width: "100%"
  }

  const fullSpatula = {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem",
    backgroundImage: `url('${spatulaFull}')`,
    backgroundSize: "contain"
  }

  const emptySpatula = {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem",
    backgroundSize: "contain",
    backgroundImage: `url('${spatula}')`
  }

  return (
    <Col xs={6}  md={3}>
      <Thumbnail
        src={`images/${props.img}`}
        alt="homemade pizza on wooden board"
        className="thumbnail"
      >
        <div style={ratingStyle}>
          <div style={fullSpatula} />
          <div style={fullSpatula} />
          <div style={fullSpatula} />
          <div style={fullSpatula} />
          <div style={emptySpatula} />
            </div>
            <h3>Pizza Vegetaria</h3>
            <p>
          <Button bsStyle="default" style={buttonStyle}>more...</Button>
        </p>
      </Thumbnail>
    </Col>
  );
}

export default RecipeCard;
