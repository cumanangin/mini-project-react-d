import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mini-project-001.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "AnkgFsb4BfSWCLh1S9s3EJfFVBvaeeAuiFFIvMlKouwMRmGBW1hhyuA0f1X76JjP",
  },
});

export default client;
