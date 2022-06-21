import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const url =
  "https://api-sa-east-1.graphcms.com/v2/cl4o5o6dg0psl01xmepakcsx1/master";

const httpsLink = createHttpLink({
  uri: url,
});

const client = new ApolloClient({
  link: httpsLink,
  cache: new InMemoryCache(),
});

export default client;
