import React, {Component} from 'react';

const { projects } = require('../projects.json');

class Works extends Component{

	state = {
		data:[]
	};

	componentDidMount(){
		this.getPortfolios();
	}

	getPortfolios = () => {
		const title = this.props.match.url.replace('/portfolio/', '');

		const prj = projects.filter(v => v.title !== title);
		this.setState({ data: projects});
	}

	renderProjectDetails = (e, val) => {
		e.preventDefault();
		e.stopPropagation();
		window.scroll({
			top:0,
			left:0,
			behavior:'smooth'
		});
		this.props.history.push(`/portfolio/${val.title}`,{
			project : val
		});
	}

	render(){
		return(
			<div id="works">
				{
					this.state.data.map( (v,i) => {
						
						return  <div className="container" key={i} onClick={(e) => this.renderProjectDetails(e, v)}>
									<img className="image" src={v.image} alt="Project"></img>
									<div className="overlay">
										<p>{v.title}</p>
									</div>
								</div>
					})
				}
			</div>
		);
	}
}


export default Works;