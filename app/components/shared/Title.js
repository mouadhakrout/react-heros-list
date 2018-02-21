import React , {Component} from 'react';
import PropTypes from "prop-types";
class Title extends Component{
  render() {
    const titleStyle = {
      color: this.props.color,
    };
    return(
        <div><h2 style={titleStyle}>{this.props.content}</h2></div>
    );
  }
}
Title.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string,
};
export default Title;
