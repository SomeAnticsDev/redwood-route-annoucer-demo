import { FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import ReactQueryProvider from './ReactQueryProvider'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <ReactQueryProvider>
      <Routes />
    </ReactQueryProvider>
  </FatalErrorBoundary>
)

export default App
