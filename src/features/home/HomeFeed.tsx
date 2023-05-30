import './HomeFeed.css'

const COVER_URL = 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg'
function HomeFeed (): JSX.Element {
  return (
    <section className='home-feed section'>
      <img className='home--feed__cover' src={COVER_URL} alt='#' />
      <h1 className='home--feed__title'>Lorem ipsum dolor sit amet.</h1>
      <p className='home--feed__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt dolores reprehenderit?</p>
      <button className='home-feed__cta'>Go to</button>
    </section>

  )
}

export default HomeFeed
