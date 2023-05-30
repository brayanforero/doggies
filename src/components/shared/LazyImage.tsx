
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'

interface Props extends LazyLoadImageProps {
  caption?: string
}

function LazyImage ({ caption, ...restOfProps }: Props): JSX.Element {
  return (
    <div className='animal-cover'>
      <LazyLoadImage
        {...restOfProps}
        decoding='async'
        useIntersectionObserver
      />
    </div>
  )
}

export default LazyImage
