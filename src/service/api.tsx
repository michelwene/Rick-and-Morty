import {
  ApolloClient,
  InMemoryCache,
  from,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, link]),
});

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

export function ApolloClientProvider({ children }: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
