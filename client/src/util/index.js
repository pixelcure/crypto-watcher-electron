  ////////////////////////////////////////
 // UTILITY /////////////////////////////
////////////////////////////////////////



// Available Options
export const options = {
    currencies : [
	    {
	        name : 'ETH',
	        label : 'Ethereum',
	        enabled : true
	    },
	    {
	        name : 'LTC',
	        label : 'Litecoin',
	        enabled : true
	    },
	    {
	        name : 'BTC',
	        label : 'Bitcoin',
	        enabled : true
	    }
    ],
    conversions : [
	    {
	        name : 'USD',
	        label : 'US Dollar',
	        enabled : true
	    },
	    {
	        name : 'EUR',
	        label : 'Euro',
	        enabled : false
	    }
    ],
    tickerIntervals : [
		{
		    interval : 10000,
		    label : '10 seconds',
		    enabled : false
		},
		{
		    interval : 30000,
		    label : '30 seconds',
		    enabled : false
		},
		{
		    interval : 60000,
		    label : '1 minute',
		    enabled : false
		},
	    {
	        interval : 300000,
	        label : '5 minutes',
	        enabled : false
	    },
	    {
	        interval : 600000,
	        label : '10 minutes',
	        enabled : false
	    },
	    {
	        interval : 900000,
	        label : '15 minutes',
	        enabled : false
	    },
	    {
	        interval : 1800000,
	        label : '30 minutes',
	        enabled : false
	    }
    ],
    tickerOn : true,
    detailOptions : [
	    {
	        name : 'MARKET',
	        label : 'Market',
	        enabled : false
	    },
	    {
	        name : 'LASTVOLUME',
	        label : 'Last Volume',
	        enabled : false
	    },
	    {
	        name : 'LASTVOLUMETO',
	        label : 'Last Volume Price %',
	        enabled : false
	    },
	    {
	        name : 'LASTTRADEID',
	        label : 'Last Trade ID',
	        enabled : false
	    },
	    {
	        name : 'VOLUME24HOUR',
	        label : '24hr Volume Price',
	        enabled : false
	    },
	    {
	        name : 'VOLUME24HOURTO',
	        label : '24hr Volume %',
	        enabled : false
	    },
	    {
	        name : 'OPEN24HOUR',
	        label : 'Open 24hr Price',
	        enabled : false
	    },
	    {
	        name : 'HIGH24HOUR',
	        label : 'High 24hr Price',
	        enabled : false
	    },
	    {
	        name : 'LOW24HOUR',
	        label : 'Low 24hr Price',
	        enabled : false
	    },
	    {
	        name : 'CHANGE24HOUR',
	        label : 'Change in 24hr Price',
	        enabled : false
	    },
	    {
	        name : 'CHANGEPCT24HOUR',
	        label : 'Change in 24hr %',
	        enabled : false
	    },
	    {
	        name : 'SUPPLY',
	        label : 'Coin Supply',
	        enabled : false
	    },
	    {
	        name : 'MKTCAP',
	        label : 'Market Cap',
	        enabled : false
	    }
    ]
}

// Out of the box Settings
export const defaultSettings = {
	currencies : [
		{
			name : 'ETH',
			label : 'Ethereum',
			enabled : true
		},
		{
			name : 'LTC',
			label : 'Litecoin',
			enabled : true
		},
		{
			name : 'BTC',
			label : 'Bitcoin',
			enabled : false
		}
	],
	conversions : [
		{
			name : 'USD',
			label : 'US Dollar',
			enabled : true
		},
		{
			name : 'EUR',
			label : 'Euro',
			enabled : false
		}
	],
	details : [
	    {
	        name : 'CHANGEPCT24HOUR',
	        label : 'Change in 24hr %',
	        enabled : true
	    },
	    {
	        name : 'SUPPLY',
	        label : 'Coin Supply',
	        enabled : true
	    }
	],
	ticker : {
		interval : 300000,
		label : '5 minutes',
		enabled : true
	},
	tickerOn : true
}