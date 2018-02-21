import React , {Component} from 'react';
import Title from '../components/shared/Title';
import Card from '../components/shared/Card';
var CryptoJS = require("crypto-js");
var PRIV_KEY = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
var PUBLIC_KEY = "298bab46381a6daaaee19aa5c8cafea5";
var ts = new Date().getTime();
var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
var url = 'http://gateway.marvel.com/v1/public/characters';
class HerosList extends Component{
  constructor(props) {
   super(props);

   this.state = {heros: []};
 }
 componentDidMount() {
   this.getHeros();
 }

 getHeros() {
   const that = this;
   $.getJSON(url, {
   ts: ts,
   apikey: PUBLIC_KEY,
   hash: hash,
   })
   .done(function(response) {
     that.setState({heros : response.data.results});
     console.log(that.state)
   })
   .fail(function(err){
     // error logs
     console.log(err);
   });
 }
  render() {
    const herosList = this.state.heros.map(hero => {
      return(
        <div key={"hero"+ hero.id} className="col-sm-6 col-md-4 col-lg-3 mt-4">
          <Card  content={hero.name} imageSrc={hero.thumbnail.path}/>
        </div>
      )
    });
    return(
        <div className="container">
          <Title color = {"#FF00FF"} content = {"Liste des super héros :"}/>
          <div className="row">
            {herosList}
          </div>
        </div>
    );
  }
}
export default HerosList;
