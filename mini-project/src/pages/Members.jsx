import React from 'react'
import Header from '../components/Header'
import MembersContent from '../components/MembersContent'

const Members = () => {
  return (
    <>
        <div>
            <Header />
        </div>
        <div>
          <main>
            <MembersContent />
          </main>
        </div>
    </>
  )
}

export default Members