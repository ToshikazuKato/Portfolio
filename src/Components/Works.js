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
		console.log(title, 'title');

		const prj = projects.filter(v => v.title !== title);
		console.log(prj,'prj');
		this.setState({ data: projects});
		
	}

	renderProjectDetails = (e, val	) => {
		e.preventDefault();
		e.stopPropagation();
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