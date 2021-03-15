import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    let commentList;

    if (dish !== null) {
      if (dish.comments !== null) {
        commentList = dish.comments.map((com) => {
          return (
            <div key={com.id}>
              <ul className="list-unstyled">
                <li>{com.comment}</li>
                <li>
                  -- {com.author}, {com.date.substr(0, 10)}
                </li>
              </ul>
            </div>
          );
        });
      } else {
        return <div></div>;
      }

      return <div>{commentList}</div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
