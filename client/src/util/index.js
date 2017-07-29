  ////////////////////////////////////////
 // UTILITY /////////////////////////////
////////////////////////////////////////



// Available Options
export const options = {
    currencies: [{
        currency: 'ETH',
        name: 'Ethereum',
        enabled: true
    }, {
        currency: 'LTC',
        name: 'Litecoin',
        enabled: true
    }, {
        currency: 'BTC',
        name: 'Bitcoin',
        enabled: true
    }],
    conversions: [{
        currency: 'USD',
        name: 'US Dollar',
        enabled: true
    }, {
        currency: 'EUR',
        name: 'Euro',
        enabled: false
    }],
    tickerIntervals: [{
        interval: 5000,
        label: '5 seconds',
        enabled: false
    }, {
        interval: 10000,
        label: '10 seconds',
        enabled: false
    }, {
        interval: 20000,
        label: '20 seconds',
        enabled: false
    }, {
        interval: 30000,
        label: '30 seconds',
        enabled: false
    }, {
        interval: 60000,
        label: '1 minute',
        enabled: false
    }, {
        interval: 120000,
        label: '2 minutes',
        enabled: false
    }, {
        interval: 180000,
        label: '3 minutes',
        enabled: false
    }, {
        interval: 240000,
        label: '4 minutes',
        enabled: false
    }, {
        interval: 300000,
        label: '5 minutes',
        enabled: false
    }, {
        interval: 600000,
        label: '10 minutes',
        enabled: false
    }, {
        interval: 900000,
        label: '15 minutes',
        enabled: false
    }, {
        interval: 1200000,
        label: '20 minutes',
        enabled: false
    }, {
        interval: 1800000,
        label: '30 minutes',
        enabled: false
    }],
    ticker: true,
    detailOptions: [{
        detailKey: 'MARKET',
        detailTitle: 'Market',
        detailVisible: false
    }, {
        detailKey: 'LASTVOLUME',
        detailTitle: 'Last Volume',
        detailVisible: false
    }, {
        detailKey: 'LASTVOLUMETO',
        detailTitle: 'Last Volume Price %',
        detailVisible: false
    }, {
        detailKey: 'LASTTRADEID',
        detailTitle: 'Last Trade ID',
        detailVisible: false
    }, {
        detailKey: 'VOLUME24HOUR',
        detailTitle: '24hr Volume Price',
        detailVisible: false
    }, {
        detailKey: 'VOLUME24HOURTO',
        detailTitle: '24hr Volume %',
        detailVisible: false
    }, {
        detailKey: 'OPEN24HOUR',
        detailTitle: 'Open 24hr Price',
        detailVisible: false
    }, {
        detailKey: 'HIGH24HOUR',
        detailTitle: 'High 24hr Price',
        detailVisible: false
    }, {
        detailKey: 'LOW24HOUR',
        detailTitle: 'Low 24hr Price',
        detailVisible: false
    }, {
        detailKey: 'CHANGE24HOUR',
        detailTitle: 'Change in 24hr Price',
        detailVisible: false
    }, {
        detailKey: 'CHANGEPCT24HOUR',
        detailTitle: 'Change in 24hr %',
        detailVisible: false
    }, {
        detailKey: 'SUPPLY',
        detailTitle: 'Coin Supply',
        detailVisible: false
    }, {
        detailName: 'MKTCAP',
        detailTitle: 'Market Cap',
        detailVisible: false
    }]
}

// Out of the box Settings
export const defaultSettings = {
	currencies : [
		{
			currency : 'ETH',
			name : 'Ethereum',
			enabled : true
		},
		{
			currency : 'LTC',
			name : 'Litecoin',
			enabled : true
		},
		{
			currency : 'BTC',
			name : 'Bitcoin',
			enabled : true
		}
	],
	conversions : [{
		currency : 'USD',
		name : 'US Dollar',
		enabled : true
	},
	{
		currency : 'EUR',
		name : 'Euro',
		enabled : false
	}],
	detailOptions : [],
	tickInterval : 5000,
	ticker : true
}