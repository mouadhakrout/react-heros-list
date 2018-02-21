import React , {Component} from 'react';
import Title from "./Title";
class DetailsList extends Component{
    render() {
        const details = this.props.details;
        const items = details.items.map(item => {
            return (<li>{item.name}</li>);
        });

        return(
            <div>
            <Title content={this.props.title}/>
                {items}
            </div>

        );
    }
}
export default DetailsList;
