import React , {Component} from 'react';
import Title from "./Title";
import PropTypes from "prop-types";
class Panel extends Component{
    render() {
        return(
            <div className="card card-header">
                <div className="card-block"><Title content={this.props.title}/>
                <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
Panel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
export default Panel;
