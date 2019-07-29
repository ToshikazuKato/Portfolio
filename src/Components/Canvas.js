import React, { Component } from 'react';
import { CanvasSpace, Form, Line, Vector, Const } from 'ptjs'



class Canvas extends Component {

	 floatySpace = () => {

		// 1. Define Space and Form
		 var colors = [
			 "#ff1e78", "#00dbe2", "#2E55C1"
		 ];
		const space = new CanvasSpace("#canvas").setup({ bgcolor: "#FFF"});
		var form = new Form(space);
		
		// 2. Create ELements
		const pts = [];
		const center = space.size.$divide(1.8);
		const angle = -(window.innerWidth * 0.5);
	    let count = window.innerWidth * 0.02;
		if (count > 150) count = 150
		const line = new Line(0, angle).to(space.size.x,0);
		 var mouse = center.clone();
		const r = Math.min(space.size.x, space.size.y) * 0.8;
		for(let i=0; i<count; i++){
			const p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
			p.moveBy(center).rotate2D(i * Math.PI / count, center);
			p.brightness = 0.3;
			pts.push(p);
		}
		// 3. Visualize, Animate, Interact
		 space.add({
			 animate: function (time, fps, context) {
				 for (var i = 0; i < pts.length; i++) {
					 // rotate the points slowly
					 var pt = pts[i];
					 pt.rotate2D(Const.one_degree / 16, center);
					 form.stroke(false).fill(colors[i%3]).point(pt,2,true,false,true);
					
					 // get line from pt to the mouse line
					 var ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

					 // opacity of line derived from distance to the line
					 var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

					 if (distFromMouse < 50) {
						 if (pts[i].brightness < 0.3) pts[i].brightness += 0.045;
					 } else {
						 if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01;
					 }

					 var color = "rgba(102,102,102," + pts[i].brightness + ")"
					 form.stroke(color).fill(true).line(ln);
				 }
			 },

			 onMouseAction: function (type, x, y, evt) {
				 if (type === "move") {
					 mouse.set(x, y);
				 }
			 },

			 onTouchAction: function (type, x, y, evt) {
				 this.onMouseAction(type, x, y);
			 }
		 });

		 // 4. Start playing
		 space.bindMouse();
		 space.bindTouch();
		 space.play();

	}

	componentDidMount(){
		this.floatySpace();
	}

	render(){
		return <div id="pt" className="canvas">
					<canvas id="canvas"></canvas>
				</div>
	}
}

export default Canvas;