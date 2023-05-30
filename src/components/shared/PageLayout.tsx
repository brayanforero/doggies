import { Navigation } from '.'

interface Props {
  children: React.ReactNode
}

function PageLayout ({ children }: Props): JSX.Element {
  return (
    <>
      <Navigation />
      <main>
        <div className='container'>
          {children}
        </div>
      </main>
    </>
  )
}

export default PageLayout
