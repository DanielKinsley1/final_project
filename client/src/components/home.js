import React from 'react'
import Featured from './Featured'
import TopPicks from './TopPicks'
import Meal from './Meal'
import Categories from './Categories'
import TopNav from './TopNav'
import ErrorPage from './Error'


function Home() {
    return (
        <div>
            <TopNav />
            <Featured />
            <TopPicks />
            <Meal />
            <Categories />
            <ErrorPage />




        </div>
    )
}

export default Home