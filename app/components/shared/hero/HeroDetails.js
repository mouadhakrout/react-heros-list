import React , {Component} from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import Title from '../Title';
import Panel from '../Panel';
import DetailsList from "../DetailsList";
const credentials = require('../credentials');
class HeroDetails extends Component{
  constructor(props) {
   super(props);
   this.state = {hero: [] , isLoading: true};
 }
    componentWillMount() {
        this.getHero();
    }

    getHero() {
        const that = this;
        $.getJSON(credentials.url + "/" + this.props.params.id, {
            ts: credentials.ts,
            apikey: credentials.PUBLIC_KEY,
            hash: credentials.hash,
        })
            .done(function(response) {
                that.setState({hero : response.data.results[0],  isLoading: false});
            })
            .fail(function(err){
                // error logs
                console.log(err);
            });
    }
    render() {
    return(<div className="container">
      <Link to="/"><h3>Retour</h3></Link>
      <Title color={"#FF00FF"} content={"Fiche identité :"} />
            {!this.state.isLoading &&
            <div className="row">
                <div className="col-lg-4">
                    <img className="card-img-top" src={this.state.hero.thumbnail.path + "/portrait_xlarge.jpg"} alt="Hero Card image"/>
                </div>
                <div className="col-lg-8">
                        <Panel title={this.state.hero.name} description={this.state.hero.description}></Panel>
                        <DetailsList title={"Comics"} details={this.state.hero.comics}></DetailsList>
                        <DetailsList title={"Series"} details={this.state.hero.series}></DetailsList>
                </div>
            </div>
            }
    </div>
    );
  }
}
HeroDetails.propTypes = {
    id: PropTypes.number,
    imageSrc: PropTypes.string
};
export default HeroDetails;
