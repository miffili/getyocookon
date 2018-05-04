import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Col
} from "reactstrap";

const RecipeCard = props => {
  const buttonStyle = {
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "0.2rem"
  };

  const ratingStyle = {
    display: "flex",
    justifyContent: "start",
    width: "100%"
  };

  return (
    <Col xs={12} md={4} xl={3}>
      <Card style={{ margin: "0.5rem 0" }}>
        <CardBody>
          <CardTitle>Delicious Dish</CardTitle>
        </CardBody>
        <img
          width="100%"
          src={`images/${props.img}`}
          alt="homemade pizza on wooden board"
        />
        <CardBody>
          <div style={ratingStyle}>⭐⭐⭐⭐⭐</div>
          <CardText>
            <Button outline color="secondary" style={buttonStyle}>
              more...
            </Button>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecipeCard;
