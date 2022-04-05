import React from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import PieceFeed from '../components/piecefeed'
import gethitokoto from './api/hello'

import Data from './api/data'

const Home = () => {
  const dataElement = Data.map((data: any) => {
    console.log(data)
    return (
      <PieceFeed
        key={data.key}
        author={data.author}
        discription={data.discription}
        likes={data.likes}
        comments={data.comments}
        isLiked={data.isLiked}
        isCommented={data.isCommented}
        image={data.image}
      />
    )
  })

  const HitokotoElement = () => {
    return (
      <>
        <button onClick={gethitokoto}>get hitokoto</button>
        <p id="hitokoto_text" className={styles.hitokoto}></p>
      </>
    )
  }

  return (
    <div>
      <Header />
      {dataElement}
      <HitokotoElement />
      <Footer />
    </div>
  )
}
export default Home
