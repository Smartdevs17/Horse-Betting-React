import React from 'react'

import Navbar from '../Components/Navbar'
import TwoButtons from '../Components/TwoButtons'
import Banner from '../Components/Banner'
import Iframe from '../Components/Iframe'
import InfiniteText from '../Components/InfiniteText'
import Footer from '../Components/Footer'

const HomePage = () => {

    return (
       <React.Fragment>
           <Navbar text={'HomePage'}/>
           <TwoButtons />
           <Banner />
           <Iframe />
           <InfiniteText />
           <Footer />
       </React.Fragment>
    )
}

export default HomePage
