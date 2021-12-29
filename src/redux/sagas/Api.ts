import axios from 'axios'

export default async function getCountriesApi() {
  try {
    const countryResopnse = await axios.get('https://restcountries.com/v2/all')
    const countries = await countryResopnse.data
    return countries
  } catch (error) {
    console.log(error)
  }
}
