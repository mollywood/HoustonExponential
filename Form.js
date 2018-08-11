const investor = {
	Type,
	Themes,
	InvestmentRange,
	ManagedAssets,
	PortfolioSize,
	Founded,
	Location,// Address, Neighborhood, Latitude/Longitude
	Contact,
	Description 		
}

const startup = {
	Name,
	Logo,
	Description,
	Category,
	Location, //→ Address, Neighborhood, Latitude/Longitude
	Employees,
	FundingStage,
	Founded,
	BusinessModel, //(B2B2C, B2G)
	ProductStage,
	Website,
	ContactInfo //Phone, Email
}

const hub = {
		Type, //(Accelerator, Incubator, Co-working Space)
		BatchSize,
		Founded,
		Location, //→ Address, Neighborhood, Latitude/Longitude
		Academia, //Supported?
		Contact,
		Description 
};
const form = (input) => {
	if (input.id == "startup") {
		return "startup";
	} else if (input.id == "investor") {
		return "investor";
	} else if (input.id == "hub") {
		return "hub";
	} else {
		throw error;
	}
}