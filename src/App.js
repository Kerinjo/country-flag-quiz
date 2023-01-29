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

  return (
    <div>
      <ul>
        {countries.map(country => 
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
