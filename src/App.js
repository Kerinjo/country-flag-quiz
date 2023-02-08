import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })   
  }, [])

  const getRandomCountries = (countries, num) => {
    const shuffled = [...countries].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
  }

  const random_countries = getRandomCountries(countries, 4)

  return (
    <div>
      <ul>
        {random_countries.map(country => 
          <li key={country.cca2}>
            {country.name.common}
            {country.flag}
          </li>
        )}        
      </ul>
    </div>
  )
}

export default App;
