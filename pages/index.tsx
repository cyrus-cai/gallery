import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import PieceFeed from '../components/piecefeed'

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

  return (
    <div>
      <Header />
      {dataElement}
      <Footer />
    </div>
  )
}

export default Home
