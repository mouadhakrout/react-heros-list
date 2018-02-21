import React , {Component} from 'react';
import {browserHistory} from 'react-router';
import PropTypes from "prop-types";
class Card extends Component{
  handleOnClick = () => {
    browserHistory.push("/hero/" + this.props.heroId);
  }
  render() {
    const cardStyle = {
      width: '400px',
    };
    return(
      <div className="card" style={cardStyle} role="button">
        <img className="card-img-top" src={this.props.imageSrc + "/portrait_xlarge.jpg"}onClick={this.handleOnClick} alt="Hero Card image" />
        <div className="card-block">
          <h4 className="card-title">{this.props.content}</h4>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
    heroId: PropTypes.number,
    content: PropTypes.string,
    imageSrc: PropTypes.string
};
export default Card;
