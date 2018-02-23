import React , {Component} from 'react';
import {browserHistory} from 'react-router';
import PropTypes from "prop-types";
class Card extends Component{
  handleOnClick = () => {
    browserHistory.push("/hero/"+ this.props.heroId);
  }
  render() {
    const cardStyle = {
        height: '300px', textAlign: 'center',borderRadius: '5px',background:'lightgray', boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5'
    };
    const cardBlockStyle = {
        background:'#FFF',
        boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5'
    }
    return(
      <div className="card" style={cardStyle} role="button">
        <img role="button" className="card-img-top"  ref={img => this.img = img} src={this.props.imageSrc+"/portrait_xlarge.jpg"}
             onError={() => this.img.src = '../../../assets/img/not-found.png'}style={{height: 'auto'}} onClick={this.handleOnClick} alt="Hero Card image" />
          <div className="card-block"style={cardBlockStyle}>
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
