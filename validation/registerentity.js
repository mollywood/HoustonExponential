Handlebars.registerHelper('checked_eq', function(x, y){
	if (x === y){
	   return ' checked="checked"';
	}
	return ''
  })

// const Validator = require('validator');
// const isEmpty = require('./is-empty');

// module.exports = function validateRegisterInput(data) {
// 	let errors = {};
// 	let startup = data.startup
// 	let investor = data.investor
// 	let hub = data.hub
// 	if (startup) {
// 		$( ".startupInput" ).show();
// 		$( ".investorInput" ).hide();
// 		$( ".hubInput" ).hide();
// 		console.log('startup')
// 	} else if (investor) {
// 		$( ".investor" ).show();
// 		$( ".startup" ).hide();
// 		$( ".hub" ).hide();
// 		console.log('investor')

// 	} else if (hub) {
// 		$( ".hub" ).show();
// 		$( ".startup" ).hide();
// 		$( ".investor" ).hide();
// 	}
// }
// const investor = {
// 	Type,
// 	Themes,
// 	InvestmentRange,
// 	ManagedAssets,
// 	PortfolioSize,
// 	Founded,
// 	Location,// Address, Neighborhood, Latitude/Longitude
// 	Contact,
// 	Description 		
// }

// const startup = {
// 	Name,
// 	Logo,
// 	Description,
// 	Category,
// 	Location, //→ Address, Neighborhood, Latitude/Longitude
// 	Employees,
// 	FundingStage,
// 	Founded,
// 	BusinessModel, //(B2B2C, B2G)
// 	ProductStage,
// 	Website,
// 	ContactInfo //Phone, Email
// }

// const hub = {
// 		Type, //(Accelerator, Incubator, Co-working Space)
// 		BatchSize,
// 		Founded,
// 		Location, //→ Address, Neighborhood, Latitude/Longitude
// 		Academia, //Supported?
// 		Contact,
// 		Description 
// };
// const form = (input) => {
// 	if (input.id == "startup") {
// 		return "startup";
// 	} else if (input.id == "investor") {
// 		return "investor";
// 	} else if (input.id == "hub") {
// 		return "hub";
// 	} else {
// 		throw error;
// 	}
// }
