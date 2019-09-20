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
		if (this.state.project !== this.props.location.state.project){
			this.updateContents();
		}
	}
	updateContents = () => {
		this.setState({
			project: this.props.location.state.project
		});
		console.log(this.state,'state');
	}
	render(){
		return <div id="project">
					<h2>{this.state.project.title}</h2>
					<img src={this.state.project.image} alt={this.state.project.title}></img>
					{/* <div className="project-description">
						<p>{this.state.project.description}</p>
					</div> */}

					{/* `<div className="project-link">
						<a rel="noopener noreferrer" href={this.state.project.live_link} target="_blank" className="link"> </a>
						<a rel="noopener noreferrer" href={this.state.project.github_link} target="_blank" className="github"> </a>
					</div>` */}
					{/* <div className="tech">
						<ul>
							{
								this.state.project.technologies && this.state.project.technologies.length > 0 ?
									this.state.project.technologies.map((v, i) => {
										console.log(v, 'dddd');
										return <li key={i}>{v}</li>
									}) :
									null
							}
						</ul>
					</div> */}
					<Works {...this.props} />
			   </div>
			
	}
}

export default Project;