import React , {Component} from 'react';
import {Link} from 'react-router';
import Title from '../components/shared/Title';
class HeroDetails extends Component{
  constructor(props) {
   super(props);
   console.log(this.props , this.state);
 }
  render() {
    return(
        <div className="container">
          <Link to ="/"><h3>Retour</h3></Link>
          <Title color = {"#FF00FF"} content = {"Fiche identité :"}/>
            <div><h2>{this.props.params.name}</h2></div>
        </div>
    );
  }
}
export default HeroDetails;
