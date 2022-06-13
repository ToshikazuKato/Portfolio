import React, { Component } from 'react';
import Works from './Works';
// import Canvas from './Canvas';
class Project extends Component {

	// state = {
	// 	project:[]
	// };
	constructor(props) {
		super(props);
		this.state = { project: props.location.state.project };
	}
	componentDidUpdate(){
		if (this.state.project !== this.props.location.state.project){
			this.updateContents();
		}
	}
	updateContents = () => {
		this.setState({
			project: this.props.location.state.project
		},()=>{
			console.log(this.state,'state');
			
		});

	}
	render(){
		return (
			<div id='project'>
			{/* <Canvas/> */}
				<div className='project'>
					<h1 className='heading-primary'>
						{this.state.project.title}
					</h1>
					<div className='project__container'>
						<img
							srcSet={`${this.state.project.images[0]} 800w,
								${this.state.project.images[1]} 2000w,
								${this.state.project.images[2]} 4000w`}
							src={this.state.project.images[1]}
							alt={this.state.project.title}
							className='project__image'
						></img>
						
						<div className='project__description'>
							<h2 className="heading-secondary">Description</h2>
							<p className='project__description-paragraph'>
								{this.state.project.description}
							</p>
							<a
								className='project__description-link'
								href={this.state.project.live_link}
								target='_blank'
								rel='noopener noreferrer'
								style={{color:this.state.project.color}}
							>
								Visit website <span>&rarr;</span>
							</a>
						</div>

						<div className='project__tags'>
						<h2 className="heading-secondary">Skills</h2>
							<ul className='project__list'>
								{this.state.project.tags && this.state.project.tags.length > 0
									? this.state.project.tags.map(
										(v, i) => {
											return (<li key={i} className='project__item' style={{backgroundColor:this.state.project.color}} >{v}</li>);
										}
									  )
									: null}
							</ul>
						</div>
					</div>
					{/* <div className="project-description">
						<p>{this.state.project.description}</p>
					</div> */}

					{/* `<div className="project-link">
						<a rel="noopener noreferrer" href={this.state.project.live_link} target="_blank" className="link"> </a>
						<a rel="noopener noreferrer" href={this.state.project.github_link} target="_blank" className="github"> </a>
					</div>` */}
					<h2 className="heading-primary">Other projects</h2>
					<Works {...this.props} />
				</div>
			</div>
		);
	}
}

export default Project;