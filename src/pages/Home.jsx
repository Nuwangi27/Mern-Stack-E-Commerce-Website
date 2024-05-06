import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular1 from '../Components/Popular/Popular1'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
const Home = () => {
  return (
    <div>
      <Hero/>
     <Popular1/>
     <Offers/>
     <NewCollections/>
     <NewsLetter/>
      
    </div>
  )
}

export default Home
