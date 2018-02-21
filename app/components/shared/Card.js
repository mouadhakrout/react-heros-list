import React , {Component} from 'react';
import {browserHistory} from 'react-router';
class Card extends Component{
  handleOnClick = () => {
    browserHistory.push('/hero/' + this.props.content);
  }
  render() {
    let cardStyle = {
      width: '400px',
    };
    return(
      <div className="card" style={cardStyle} role="button">
        <img className="card-img-top" src={this.props.imageSrc + "/portrait_xlarge.jpg"}  onClick={this.handleOnClick} alt="Hero Card image"/>
        <div className="card-block">
          <h4 className="card-title">{this.props.content}</h4>
        </div>
      </div>
    );
  }
}
export default Card;
