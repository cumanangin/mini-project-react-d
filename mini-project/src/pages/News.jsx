import React from 'react'
import Header from '../components/Header'
import NewsContent from '../components/NewsContent'

const News = () => {
  return (
    <>
        <div>
            <Header />
        </div>
        <div>
          <main>
            <NewsContent />
          </main>
        </div>
    </>
  )
}

export default News