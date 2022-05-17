import React from 'react'
import "./Graph.scss"

const Graph = () => {
    return (
        <div className='graph'>
            <p className='graph__day'>Today</p>

            <div className='graph__image'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZAOTJsDSPMooXnQmZ6quwkCD51iQRPgV_Q&usqp=CAU" alt="weather graph" />
            </div>

            <div className='graph__time'>
                <ul>
                    <li>10am</li>
                    <li>11am</li>
                    <li>12pm</li>
                    <li>1pm</li>
                    <li>2pm</li>
                    <li>3pm</li>
                </ul>
            </div>

        </div>
    )
}

export default Graph