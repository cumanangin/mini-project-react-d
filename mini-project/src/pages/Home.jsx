import React, {Component} from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import HomeContent from '../components/HomeContent'

const Home = () => {
  return (
    <>
        <div>
            <Header />
        </div>
        
        <div>
            <main>
                <Carousel />
                <HomeContent />
            </main>
        </div>
    </>
  )
}

export default Home