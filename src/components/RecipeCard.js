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

class RecipeCard extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      categories: PropTypes.array
    })
  };

  render() {
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
    };

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
            src={this.props.details.image}
            alt={this.props.details.title}
          />
          <CardBody>
            <CardTitle>{this.props.details.title}</CardTitle>
            {/* <CardText>
              <div style={ratingStyle}>⭐⭐⭐⭐⭐</div>
              {this.props.details.shortDesc}
            </CardText> */}
            <Button outline color="secondary" size="sm" style={buttonStyle}>
              more...
            </Button>
          </CardBody>
          <CardFooter>
            {this.props.details.categories.map(cat => (
              <Badge color="light" style={badgeStyle} key={cat}>
                {cat}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

export default RecipeCard;
