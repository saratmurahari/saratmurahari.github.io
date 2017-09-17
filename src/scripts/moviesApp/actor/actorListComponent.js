import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import servicePaths from './../../config/servicepaths.js';

class ActorListComponent extends React.Component{
  constructor(props) {
  	super(props);
  	this.state={
  		actorList:[]
  	}
  }
  render(){
  	var _this=this;
	  let actorList= _this.state.actorList.map((actor) =>
		
    <li key={actor.Id} className="tf-actor-wrapper">
      <Link to={`/actors/${actor.Id}`}>
        <div className="tf-actor-block">
          <span className="tf-actor-name">{actor.Name}</span>
          <span className="tf-actor-rating">{actor.Rating}</span>
        </div>
      </Link>
    </li>
	);
  	
    return (
    <div>
      <h1>Top 10 Actors of Bollywood!</h1>
      <ul className="tf-actors-list">
        {actorList}
      </ul>
    </div>

		
      )
  }
  componentDidMount() {

  	var _this=this;
  	this.actorsUrl=servicePaths.actorList;
  	axios.get(_this.actorsUrl)
  	.then(res => {
  		this.setState({
  			actorList:res.data
  		})
  	});
  }		
}

export default ActorListComponent;

