import { PageLayout } from '@components/shared'
import './App.css'
import { HomeFeed } from './features'

function App (): JSX.Element {
  return (
    <PageLayout>
      <HomeFeed />
    </PageLayout>
  )
}

export default App
