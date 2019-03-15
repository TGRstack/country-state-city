# country-state-city

Basic library for Country, State and City

## Forked from https://github.com/harpreetkhalsagtbit/country-state-city

## Changes:

1. Start `meta.json` to get a country's subregion title per country
2. Add `getStateTitleOfCountry(countryId)` for accessing meta details
3. Add more helper functions `getCountryByName(name)`, `getCountryBySortname(sortname)` - caseINsensitive

## Versioning

1. I cut a new minor version for the fork `0.2.0` from `0.1.2`

## ORIGINAL

Data taken from:

https://github.com/hiiamrohit/Countries-States-Cities-database

### Install
`npm i country-state-city`

### Docs

getCountryById(id), getCountryByName(name), getCountryBySortname(sortname)
---------------

Respectively, each function expects a `CountryId`,  `CountryName`,  `CountrySortname` and returns *Country Details*

CountryName and CountrySortname can be called case insensitively (searches are formed w/ value.toLowerCase())

type: *json*

```js
{
	"id": "4",
	"sortname": "AS",
	"name": "American Samoa",
	"phonecode": "1684"
}
```

getStateById(id)
---------------

It accepts a valid `StateId` and   returns *State Details*

type: *json*

```js
{
	"id": 4119,
	"name": "Midlands",
	"country_id": "246"
}
```

getCityById(id)
---------------

It accepts a valid `CityId` and   returns *City Details*

type: *json*

```js
{
	"id": "3",
	"name": "Port Blair",
	"state_id": "1"
}
```

getStatesOfCountry(countryId)
---------------

It accepts a valid `CountryId` and   returns *all States* as Array of JSON

type: *array of json*

```js
[
  {
    "id": 4119,
    "name": "Midlands",
    "country_id": "246"
  }
]
```

getStateTitleOfCountry(countryId)
---------------

It accepts a valid `CountryId` and returns *meta state title* as String

type: *string*

```js
'Provinces'
```

```js
'States'
```

getCitiesOfState(stateId)
---------------

It accepts a valid `CityId` and   returns *all Cities* as Array of JSON

type: *array of json*

```js
[
  {
    "id": "3",
    "name": "Port Blair",
    "state_id": "1"
  }
]

```

getAllCountries
---------------
It returns *all Countries*

type: *array of json*

```js
[
  {
    "id": "4",
    "sortname": "AS",
    "name": "American Samoa",
    "phonecode": "1684"
  }
]
```

Change Logs
---------------

**V0.1.0**
1. Fix: [#2](https://github.com/harpreetkhalsagtbit/country-state-city/issues/2)
2. Fix: [#3](https://github.com/harpreetkhalsagtbit/country-state-city/issues/3)
3. Added some missing states and cities for Canada and US
