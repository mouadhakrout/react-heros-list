import React , {Component} from 'react';
import {browserHistory} from 'react-router';
import PropTypes from "prop-types";
class Card extends Component{
  handleOnClick = () => {
    browserHistory.push("/hero/"+ this.props.heroId);
  }
  render() {
    const cardStyle = {
        height: '400px', textAlign: 'center',borderRadius: '5px',background:'lightgray', boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5',
        marginLeft: '10px' , marginRight: '10px'
    };
    const cardBlockStyle = {
        background:'#FFF',height: '175px',
        boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5'
    }
    const cardTitleStyle = {whiteSpace: 'nowrap' ,overflow: 'hidden' , textOverflow: 'ellipsis'}
    const heroLinks = this.props.links.map(link => {
      return(
        <a key={link.type} href={link.url} ><p>{link.type}</p></a>
      )
    });
    return(
      <div className="card" style={cardStyle} role="button">
        <img
          role="button" aria-pressed="true" className="card-img-top" ref={img => this.img = img} src={this.props.imageSrc+"/portrait_xlarge.jpg"}
          onError={() => this.img.src = '../../../assets/img/not-found.png'}style={{height: '225px', width: 'inherit'}} onClick={this.handleOnClick} alt="Hero Card image"
        />
        <div className="card-block" style={cardBlockStyle}>
          <h4 className="card-title" style={cardTitleStyle}>{this.props.content}</h4>
          <div className="card-text">{heroLinks}</div>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
    heroId: PropTypes.number,
    content: PropTypes.string,
    imageSrc: PropTypes.string,
    links:PropTypes.array,
};
export default Card;
