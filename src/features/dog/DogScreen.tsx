import { AnimalSection, PageLayout } from '@/components/layouts'
import dogs from '../../mocks/dogs/breeds.json'
import LazyImage from '@/components/widgets/LazyImage'
import { Link } from 'react-router-dom'
function DogScreen (): JSX.Element {
  return (
    <PageLayout>
      <AnimalSection title='Perros'>
        <div className='animal-grid'>
          {
            dogs.map(d => (
              <article key={d.id} className='animal'>
                <LazyImage src={d.image.url} alt={`Image about ${d.name} breed`} />
                <div>
                  <Link to={`./${d.id}`}>
                    <h2>{d.name}</h2>
                  </Link>
                </div>
              </article>
            ))
          }
        </div>
      </AnimalSection>
    </PageLayout>
  )
}

export default DogScreen
