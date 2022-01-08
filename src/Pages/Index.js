import React from 'react'

import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import MainPage from '../Components/MainPage'
import InfiniteText from '../Components/InfiniteText'
import Footer from '../Components/Footer'

const Index = () => {
    return (
      <React.Fragment>
          <Navbar text={'Index'}/>
          <Banner />
          <MainPage />
          <InfiniteText />
           <Footer />
      </React.Fragment>
    )
}

export default Index
