import React , {Component} from 'react';
import Title from "./Title";
class Panel extends Component{
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body"><Title content={this.props.title}/>
                <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
export default Panel;
