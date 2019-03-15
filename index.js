var countryList = require("./lib/country.json")
var stateList = require("./lib/state.json")
var cityList = require("./lib/city.json")
var metaList = require("./lib/meta.json")

var country_state_city = {
	getCountryById: function (id) {
		return _findEntry(countryList, 'id', id);
	},
	getCountryByName: function (name) {
		return _findEntry(countryList, 'name', name);
	},
	getCountryBySortname: function (sortname) {
		return _findEntry(countryList, 'sortname', sortname);
	},
	getStateById: function (id) {
		return _findEntry(stateList, 'id', id);
	},
	getCityById: function (id) {
		return _findEntry(cityList, 'id', id);
	},
	getStatesOfCountry: function (countryId) {
		var states = stateList.filter(function (value, index) {
			return value.country_id == countryId
		})
		return states.sort(compare)
	},
	getStateTitleOfCountry: function (countryId) {
		var meta = metaList.find(function (value, index) {
			return value.country_id == countryId
		})
		return meta.subregion
	},
	getCitiesOfState: function (stateId) {
		var cities = cityList.filter(function (value, index) {
			return value.state_id == stateId
		})
		return cities.sort(compare)
	},
	getAllCountries: function () {
		return countryList;
	}

}

let _findEntry = (source, key, value) => {
	const lowerVal = value.toLowerCase()
	const t1 = !isNaN(value) || (typeof(value) === 'string' && value.length > 0)
	if (t1 && source != null) {
		let idx = source.findIndex((c) => c[key].toLowerCase() === lowerVal)
		return (idx !== -1) ? source[idx] : "";
	}
	else return "";
}

function compare(a, b) {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
}

module.exports = country_state_city;