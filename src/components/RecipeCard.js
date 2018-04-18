import React from "react";
import { Button, Thumbnail, Col } from 'react-bootstrap';

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
  const spatulaStyle = {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem"
  }

  return (
    <Col xs={6}  md={3}>
      <Thumbnail
        src={`images/${props.img}`}
        alt="homemade pizza on wooden board"
        className="thumbnail"
      >
        <div style={ratingStyle}>
          <div style={spatulaStyle} className="full-spatula" />
          <div style={spatulaStyle} className="full-spatula" />
          <div style={spatulaStyle} className="full-spatula" />
          <div style={spatulaStyle} className="full-spatula" />
          <div style={spatulaStyle} className="empty-spatula" />
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
