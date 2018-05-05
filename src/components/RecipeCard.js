import React from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  // CardImg,
  CardTitle,
  // CardText,
  // CardSubtitle,
  Col
} from "reactstrap";

const RecipeCard = props => {
  // console.log(props)
  const buttonStyle = {
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "0.2rem"
  };
  const badgeStyle = {
    margin: "0.1rem",
    fontWeight: "inherit",
    border: "1px solid lightgray",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  }

  //
  // const ratingStyle = {
  //   display: "flex",
  //   justifyContent: "start",
  //   width: "100%"
  // };

  return (
    <Col xs={12} md={4} xl={3}>
      <Card style={{ margin: "0.5rem 0" }}>
        <img
          width="100%"
          src={props.details.image}
          alt={props.details.title}
        />
        <CardBody>
          <CardTitle>{props.details.title}</CardTitle>
          {/* <CardText>
            <div style={ratingStyle}>⭐⭐⭐⭐⭐</div>
            {props.details.shortDesc}
          </CardText> */}
          <Button outline color="secondary" size="sm" style={buttonStyle}>
            more...
          </Button>
        </CardBody>
        <CardFooter>
          {props.details.categories.map(cat =>
            <Badge
              color="light"
              style={badgeStyle}
              key={cat}>{cat}</Badge>
          )}
        </CardFooter>
      </Card>
    </Col>
  );
};

RecipeCard.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categories: PropTypes.array
  })
}

export default RecipeCard;
