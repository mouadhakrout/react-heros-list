import React , {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import Title from '../shared/Title';
import Panel from '../shared/Panel';
import DetailsList from "../shared/DetailsList";
import * as stuffActions from "../../actions/stuffActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
class HeroDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {hero: null};
    }
    componentDidMount() {
        this.props.stuffActions.fetchHeroById(this.props.params.id);
    }
    render() {
        return(<div className="container">
                <Link to="/"><h3>Retour</h3></Link>
                <Title color={"#ec008c"} content={"Fiche identité :"} />
                {this.props.hero &&
                <div className="row">
                    <div className="col-lg-2">
                        <img
                            className="card-img-top" ref={img => this.img = img} src={this.props.hero.thumbnail.path + "/portrait_xlarge.jpg"} alt="Hero Card image"
                            onError={() => this.img.src = '../../../assets/img/not-found.png'}style={{width: '150px'}} onClick={this.handleOnClick}
                        />
                    </div>
                    <div className="col-lg-10">
                        <Panel title={this.props.hero.name} description={this.props.hero.description} />
                        <DetailsList title={"Comics"} details={this.props.hero.comics} />
                        <DetailsList title={"Series"} details={this.props.hero.series} />
                    </div>
                </div>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        hero: state.hero
    };
}
function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}
HeroDetails.propTypes = {
    stuffActions: PropTypes.object,
    hero: PropTypes.object,
    id: PropTypes.number,
    imageSrc: PropTypes.string
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeroDetails);