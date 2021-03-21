// import { AuthProvider } from '@redwoodjs/auth'
// import netlifyIdentity from 'netlify-identity-widget'
import { FatalErrorBoundary } from '@redwoodjs/web'
// import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'
// import { isBrowser } from '@redwoodjs/prerender/browserUtils'

// react query
//------------------------
import { QueryClientProvider, QueryClient } from 'react-query'
import { RedwoodReactQueryProvider } from 'redwoodjs-react-query-provider'
const queryClient = new QueryClient()

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

// isBrowser && netlifyIdentity.init()

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    {/* <AuthProvider client={netlifyIdentity} type="netlify"> */}
    {/* <RedwoodApolloProvider> */}
    <QueryClientProvider client={queryClient}>
      <RedwoodReactQueryProvider>
        <Routes />
      </RedwoodReactQueryProvider>
    </QueryClientProvider>
    {/* </RedwoodApolloProvider> */}
    {/* </AuthProvider> */}
  </FatalErrorBoundary>
)

export default App
