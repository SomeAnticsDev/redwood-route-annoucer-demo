import { QueryClientProvider, QueryClient, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {
  FetchConfigProvider,
  useFetchConfig,
  GraphQLHooksProvider,
} from '@redwoodjs/web'
import { getOperationAST } from 'graphql'
import { GraphQLClient } from 'graphql-request'

export const getQueryName = (query) => getOperationAST(query)?.name?.value

const useQueryAdapter = (
  query,
  { variables, ...options } = { variables: undefined }
) => {
  const name = getQueryName(query)
  const { uri } = useFetchConfig()
  const client = new GraphQLClient(uri)
  const res = useQuery(
    [name, variables],
    () => client.request(query, variables),
    options
  )
  return {
    loading: res.isLoading,
    ...res,
    variables,
  }
}

const queryClient = new QueryClient()
window.queryClient = queryClient

const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchConfigProvider>
        <GraphQLHooksProvider useQuery={useQueryAdapter}>
          {children}
          <ReactQueryDevtools />
        </GraphQLHooksProvider>
      </FetchConfigProvider>
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
export { queryClient }
