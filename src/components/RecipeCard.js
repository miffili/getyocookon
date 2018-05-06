import React from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  // CardText,
  // CardSubtitle,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row
} from "reactstrap";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      categories: PropTypes.array
    })
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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

    const {
      image,
      title,
      categories,
      shortDesc,
      ingredients,
      preparation
    } = this.props.details;
    return (
      <Col xs={12} md={4} xl={3}>
        <Card style={{ margin: "0.5rem 0" }}>
          <img width="100%" src={image} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            {/* <CardText>
              <div style={ratingStyle}>⭐⭐⭐⭐⭐</div>
              {shortDesc}
            </CardText> */}
            <Button
              outline
              color="secondary"
              size="sm"
              style={buttonStyle}
              onClick={this.toggle}
            >
              more...
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              centered={true}
              size="lg"
            >
              <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
              <ModalBody>
                <Row>
                  <Col sm="8">
                    <p>{shortDesc}</p>
                    <h6>Ingredients</h6>
                    <ul>
                      {ingredients.map(el => (
                        <li key={el} style={{ textTransform: "capitalize" }}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col sm="4">
                    <CardImg
                      src={image}
                      alt={title}
                      style={{ marginBottom: "0.5rem" }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ margin: "0 auto" }}>
                    <h6>Preparation</h6>
                    <ol>{preparation.map(el => <li key={el}>{el}</li>)}</ol>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button
                  outline
                  color="secondary"
                  size="sm"
                  style={buttonStyle}
                  onClick={this.toggle}
                >
                  close
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
          <CardFooter>
            {categories.map(cat => (
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
