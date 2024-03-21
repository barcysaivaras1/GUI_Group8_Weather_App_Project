import React from 'react'
import "./searchResultsList.css"

export const SearchCountryResultsList = ({results, searchTerm, handleCountryChange}) => {
    // const { countries, selectedCountry, cityArray, handleCountryChange } = useCitySelector();
    return <div className='results-list'>
        {results
            .filter(country => country.name.toLowerCase().startsWith(searchTerm.toLowerCase())) //filters countries by searchTerm
            .map((country, id) => {
                return (<div className='country' onClick={() => handleCountryChange({ target: { value: country.iso2 } })} key={id} >{country.name}</div>)
        })}
    </div>
}
