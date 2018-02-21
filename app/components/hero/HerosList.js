import React , {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../../actions/stuffActions';
import Title from '../shared/Title';
import Card from '../shared/Card';
class HerosList extends Component{
  constructor(props) {
   super(props);

   this.state = {heros: []};
 }
 componentDidMount() {
   this.props.stuffActions.fetchHeros();
 }
  render() {
    const herosList = this.props.heros.map(hero => {
      return(<div key={"hero"+ hero.id} className="col-sm-6 col-md-4 col-lg-3 mt-4"><Card heroId={hero.id} content={hero.name} imageSrc={hero.thumbnail.path} /></div>
      )
    });
    return(<div className="container"><Title color={"#ec008c"} content={"Liste des super héros :"} /><div className="row">{herosList}</div></div>
    );
  }
}
HerosList.propTypes = {
    stuffActions: PropTypes.object,
    heros: PropTypes.array
};
function mapStateToProps(state) {
    return {
        heros: state.heros
    };
}
function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HerosList);