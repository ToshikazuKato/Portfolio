import React, {Component} from 'react';

class Works extends Component{

	state = {
		data:[]
	};

	componentDidMount(){
		this.getPortfolios();
	}

	getPortfolios = () => {
		const data = [
			{
				url:"images/Travel.jpg",
				title:"Travel",
			},
			{
				url: "images/Coffee.jpg",
				title: "Coffee",
			},
			{
				url: "images/Japan.jpg",
				title: "Japan",
			},
			{
				url: "images/Engineer.jpg",
				title: "Engineer",
			},
		];
		this.setState({data:data});
	}

	render(){
		return(
			<div id="works">
				{
					this.state.data.map( (v,i) => {
						
						return <div className="container" key={i}>
									<img className="image" src={v.url}></img>
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