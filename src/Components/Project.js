import React, { Component } from 'react';
import Works from './Works';

class Project extends Component {

	state = {
		project:[]
	};
	componentDidMount(){
		this.updateContents();
	}
	componentDidUpdate(){
		if (this.state.project !== this.props.history.location.state.project){
			this.updateContents();
		}
	}
	updateContents = () => {
		this.setState({
			project: this.props.history.location.state.project
		});
	}
	render(){
		return <div id="project">
					<h2>{this.state.project.title}</h2>
					<Works {...this.props} />
			   </div>
			
	}
}

export default Project;