
interface Props {
  children: React.ReactNode
  title?: string
}
function AnimalSection ({ title = '', children }: Props): JSX.Element {
  return (
    <section className='animal-section'>
      {
        title !== '' && <h1 className='animal-section__title'>{title}</h1>
      }
      {children}
    </section>
  )
}

export default AnimalSection
