import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.API_URL || "https://strapi.100xdev.xyz/graphql/",
  cache: new InMemoryCache(),
});
