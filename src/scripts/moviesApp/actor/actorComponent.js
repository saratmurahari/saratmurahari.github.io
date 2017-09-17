import React from 'react';
import axios from 'axios';
import servicePaths from './../../config/servicepaths.js';

class ActorComponent extends React.Component{
  constructor(props) {
  	super(props);
  	this.state={
  		actorMovieList:[]
  	}
  }
  render(){
  	var _this=this;
	let actorMovieList= _this.state.actorMovieList.map((movie) =>
		<li key={movie.Id} className="tf-movie-wrapper">
			
		</li>
	);
  	
    return (
		<ul className="tf-movie-list">
			{actorMovieList}
 		</ul>
      )
  }
  componentWillMount(){
  	
  }
  componentDidMount() {

  	var _this=this;
  	let id=_this.props.match.params.id;
  	this.actorDetailsUrl=servicePaths.actorMovieList.replace("{actorId}",id);
	axios.get(_this.actorDetailsUrl)
	.then(res => {
		this.setState({
			actorMovieList:res.data
		})
	});
  }		
}

export default ActorComponent;

