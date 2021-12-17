import { createContext, useEffect, useState } from "react";
import {
  HttpLink,
  ApolloLink,
  concat,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
} from "@apollo/client";
import axios from "axios";

const AuthContext = createContext();
export function AuthContextProvider(props) {
  const [token, settoken] = useState("");
  axios.defaults.withCredentials = true;

  async function setToken(tok) {
    localStorage.setItem("firstLogin", true);
    settoken(tok);
  }

  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(async ({ headers = {} }) => {
      // const firstLogin =localStorage.getItem("firstLogin")
      const firstLogin = localStorage.getItem("firstLogin");
      if (firstLogin) {
        const tok = await axios.post("http://localhost:4000/graphql", {
          query: `
          mutation Mutation {
           generateAccessToken {
           token  
           }
         }
          `,
        });

        settoken(tok.data.data.generateAccessToken.token);
      }

      return {
        headers: {
          ...headers,
          authorization: token || null,
        },
      };
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    // uri: 'http://localhost:4000/graphql',
    // credentials: 'include',
    cache: new InMemoryCache(),
    link: from([
      authMiddleware,
      // activityMiddleware,
      httpLink,
    ]),
    // link: concat(authMiddleware, httpLink),
  });

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </AuthContext.Provider>
  );
}
export default AuthContext;
