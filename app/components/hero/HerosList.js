import React , {Component} from 'react';
import Title from '../shared/Title';
import Card from '../shared/Card';
const credentials = require('../shared/credentials');
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
   $.getJSON(credentials.url, {
   ts: credentials.ts,
   apikey: credentials.PUBLIC_KEY,
   hash: credentials.hash,
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
      return(<div key={"hero"+ hero.id} className="col-sm-6 col-md-4 col-lg-3 mt-4"><Card heroId={hero.id} content={hero.name} imageSrc={hero.thumbnail.path} /></div>
      )
    });
    return(<div className="container"><Title color={"#ec008c"} content={"Liste des super héros :"} /><div className="row">{herosList}</div></div>
    );
  }
}
export default HerosList;
