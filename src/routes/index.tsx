
import App from '@/App'
import { createBrowserRouter } from 'react-router-dom'

const rootRoutes = createBrowserRouter([

  {
    path: '/',
    element: <App />
  },
  {
    path: '*', element: <h1>404</h1>
  }
])

export default rootRoutes
