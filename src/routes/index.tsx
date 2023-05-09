import App from '@/App'
import { DogScreen, ShowDogScreen } from '@/features/dog'

import { createBrowserRouter } from 'react-router-dom'

const rootRoutes = createBrowserRouter([
  {
    path: '/category',
    children: [
      {
        path: 'dogs',
        children: [
          { index: true, element: <DogScreen /> },
          { path: ':id', element: <ShowDogScreen /> }
        ]
      }, {
        path: 'cats',
        element: <h2>Gatos</h2>
      }
    ]

  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '*', element: <h1>404</h1>
  }
])

export default rootRoutes
