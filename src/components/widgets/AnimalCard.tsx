import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'

interface Props {
  id: number | string
  name: string
  cover: string
}
function AnimalCard ({ id, name, cover }: Props): JSX.Element {
  return (
    <article>
      <Link to={`/dogs/${id}`}>
        <LazyImage
          className='pets-cover'
          src={cover}
          alt={name}
          effect='opacity'
        />
        {name}
      </Link>
    </article>
  )
}

export default AnimalCard
