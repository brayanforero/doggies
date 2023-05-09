import { useEffect, useState } from 'react'
import { AnimalSection, PageLayout } from '@/components/layouts'
import { useParams } from 'react-router-dom'
import { LazyImage } from '@/components/widgets'
import dogs from '@/mocks/dogs/breeds.json'
function ShowDogScreen (): JSX.Element {
  const params = useParams()
  const [animal, setAnimal] = useState<typeof dogs[0]>()

  useEffect(() => {
    const { id } = params

    setAnimal(
      dogs.find(d => d.id === Number(id))
    )
  }, [params])

  if (animal == null) return <h3>Loading...</h3>

  return (
    <PageLayout>
      <AnimalSection title={animal.name}>
        <div>
          <LazyImage src={animal.image.url} alt={`${animal.name} breed`} />
        </div>
        <div>
          <h2>Descripción</h2>
          <p>Temperamento: {animal.temperament}</p>
          <p>Años de vida: {animal.life_span}</p>
          <p>Grupo: {animal.breed_group}</p>
          <p>Originario de: {animal.origin !== '' ? animal.origin : 'Desconocido'}</p>
          <p>Soy un gran: {animal.bred_for}</p>
        </div>
      </AnimalSection>
    </PageLayout>
  )
}

export default ShowDogScreen
