  //////////////////////////////////////////////
 // PRICE BOAR DASHBOARD ELEMENT //////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';

// Components
import Checkbox from '../Checkbox';

// CSS
import './PriceBoardDashboard.css';



// <PriceBoardDashboard /> Element
const PriceBoardDashboard = (props) => {
	return(
		<ul className="dashboard">
			<li className="toggle-feed">
				<form>
					<Checkbox
						onChange={props.onChange}
						checked={props.enabled}
						name={props.name}
						label={props.label}
					/>
				</form>
			</li>
			<li className="refresh-feed">
				<button 
					title="Refresh Board" 
					className="refresh-board"
					onClick={() => props.onClick(props.currencies, props.conversion)}
				>
					<span className="icon icon-refresh"></span>
				</button>
			</li>
		</ul>
	);
}



export default PriceBoardDashboard;