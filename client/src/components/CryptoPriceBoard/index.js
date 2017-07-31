  //////////////////////////////////////////////
 // CRYPTO PRICE BOARD COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CSS
import './CryptoPriceBoard.css';

// Actions
import * as mapDispatchToProps from '../../actions/priceCardActions';

// Components
import PriceCardDetails from '../PriceCardDetails';
import PriceBoardDashboard from '../PriceBoardDashboard';
// import Checkbox from '../Checkbox';

// PriceCard HOC
import PriceCard from '../../hocs/PriceCard';

// Enhanced Price Card Details
const EnhancedPriceCardDetails = PriceCard(PriceCardDetails)

// mapStateToProps
const mapStateToProps = (state) => ({
	priceCards : state.priceCard.priceCards,
	settings : state.settings.settings
})

// <CryptoPriceBoard /> Component
class CryptoPriceBoard extends Component {
	
	componentWillMount() {
		// Fetch board settings
		this.props.fetchSettings()
	}

	renderError() {
		return (
			<strong className="error">{ this.props.error }</strong>
		);
	}

	render() {
		return(
			<div className="price-board">
				{ this.props.settings ?  <PriceBoardDashboard {...this.props} /> : '' }
				{ this.props.priceCards ? <EnhancedPriceCardDetails /> : '' }
				{ this.props.error ? this.renderError() : '' }
			</div>
		);
	}

}



// Export CryptoPriceBoard Container
export default connect(mapStateToProps, mapDispatchToProps)(CryptoPriceBoard);