import React , {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Slider from 'react-slick';
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
      const settings = {
          dots: false,
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          speed: 200,
          slidesToShow: 4,
          slidesToScroll: 1
      };
    const herosList = this.props.heros.map(hero => {
      return(<div key={"hero"+ hero.id} ><Card heroId={hero.id} links={hero.urls} content={hero.name} imageSrc={hero.thumbnail.path} /></div>)
    });
      return(<div className="container"><Title color={"#ec008c"} content={"Liste des super héros :"} />
        <Slider ref={c => this.slider = c} {...settings}>{herosList}</Slider>
      </div>);
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