import React from 'react'
import "./Graph.scss"
import graphImg from "../../assets/images/graph.png"
const Graph = () => {
	return (
		<div className='graph'>
			<p className='graph__day'>Today</p>

			<div className='graph__image'>
				<img src={graphImg} alt="weather graph" />
			</div>

			<div className='graph__time'>
				<ul>
					<li>10 am</li>
					<li>11 am</li>
					<li>12 pm</li>
					<li>1 pm</li>
					<li>2 pm</li>
					<li>3 pm</li>
				</ul>
			</div>

		</div>
	)
}

export default Graph