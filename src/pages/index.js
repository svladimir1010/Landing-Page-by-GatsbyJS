import * as React from 'react'
import FeaturedImage from '../components/FeaturedImage'
import Footer from '../components/Footer'
import IntroBlock from '../components/IntroBlock'
import Navbar from '../components/Navbar'
import '../sass/basics.scss'


const IndexPage = () => {
    return (
        <>
            <Navbar/>
            <IntroBlock/>
            <FeaturedImage/>
            <Footer/>
        </>
    )
}

export default IndexPage
