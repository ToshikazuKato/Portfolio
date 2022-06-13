import React, {Component} from 'react';

const { projects } = require('../projects.json');

class Works extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		this.getPortfolios();
	}

	getPortfolios = () => {
		// const title = this.props.match.url.replace('/portfolio/', '');
		// const prj = projects.filter(v => v.title !== title);
<<<<<<< HEAD
		this.setState({ data: projects });
	};

	changeBtnColor = (target,color) => {
		target.style = `border:3px solid ${color};`;
	};

	changeBtnHover = (target,color) => {
		target.style = `background-color:${color};border:3px solid ${color};`;
	};
=======
		this.setState({ data: projects});
	}
>>>>>>> develop

	renderProjectDetails = (e, val) => {
		e.preventDefault();
		e.stopPropagation();
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		this.props.history.push(`/portfolio/${val.title}`, {
			project: val,
		});
	};

<<<<<<< HEAD
	render() {
		return (
			<div className='portfolio__container'>
				{this.state.data.map((v, i) => {
					const btnStyle = { border: `3px solid ${v.color}` };
					return (
						<div
							className='card'
							key={i}
							// onClick={(e) => this.renderProjectDetails(e, v)}
						>
							{/* <picture className='portfolio__image'>
									<source srcSet={v.images[0]} media="max-width: 800px" />
									<source srcSet={v.images[1]} media="max-width: 1200px" />
									<source srcSet={v.images[2]} media="max-width: 2000px" /> */}
							<div className='card__front'>
								<img
									className='card__image'
									srcSet={`${v.images[0]} 800w,
											${v.images[1]} 2000w,
											${v.images[2]} 4000w`}
									alt='Project'
									key={i}
									src={v.images[1]}
								></img>
							</div>
							{/* </picture> */}
							<div className='card__back'>
								<div className='card__back--top'>
									<h3 className='card__title'>{v.title}</h3>
									<p className='card__text' style={{ color: v.color }}>{v.skills}</p>
								</div>
								<div className='card__back--bottom'>
									<button
										className='card__btn'
										style={btnStyle}
										onMouseEnter={(e) =>this.changeBtnHover(e.target,v.color)}
										onMouseLeave={(e) =>this.changeBtnColor(e.target,v.color)}
										onClick={(e) =>this.renderProjectDetails(e, v)}
									>
										LEARN MORE
									</button>
=======
	render(){
		return(
			<div id="works">
				{
					this.state.data.map( (v,i) => {
						
						return  <div className="container" key={i} onClick={(e) => this.renderProjectDetails(e, v)}>
									<img className="image" src={v.images[0]} alt="Project"></img>
									<div className="overlay">
										<p>{v.title}</p>
									</div>
>>>>>>> develop
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}


export default Works;
{/* <img className='image' src={img} alt='Project'></img> */}