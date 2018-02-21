import React , {Component} from 'react';
class Title extends Component{
  render() {
    let titleStyle = {
      color: this.props.color,
    };
    return(
        <div><h2 style={titleStyle}>{this.props.content}</h2></div>
    );
  }
}
export default Title;
