import React , {Component} from 'react';
import Title from "./Title";
import PropTypes from "prop-types";
class DetailsList extends Component{
    render() {
        const details = this.props.details;
        const items = details.items.map(item => {
            return (<li key={item.name}>{item.name}</li>);
        });

        return(
            <div>
            <Title content={this.props.title}/>
                {items}
            </div>

        );
    }
}
DetailsList.propTypes = {
    details: PropTypes.object,
    title: PropTypes.string,
};
export default DetailsList;
