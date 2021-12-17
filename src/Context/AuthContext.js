import { createContext, useEffect, useState } from "react";
import {
    HttpLink, ApolloLink,
    concat,
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    from
  } from "@apollo/client";
//   import { ApolloClient, InMemoryCache,  } from '@apollo/client';

// import { REFRESH_TOKEN } from "../graphql/mutations";

const AuthContext = createContext();
export function AuthContextProvider(props) {
  const [token, settoken] = useState("");

  // const [refresh_token,{data,loading,error}]=useMutation(REFRESH_TOKEN)
  // const firsLogin = false
  async function setToken(tok) {
    localStorage.setItem("firstLogin", true);
    settoken(tok);
  }
  // async  function refreshToken(){

  //     const firstLogin =localStorage.getItem("firstLogin")
  //     if(firstLogin){
  //         const res=await refresh_token()
  //          console.log(res)
  //     }
  //     console.log("hi")

  //     settoken(r)
  // }

  //httplink
//   const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       'x-access-token': token || null,
//     }
//   }));

//   return forward(operation);
// })


const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql',credentials: 'include' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token|| null,
    }
  }));

  return forward(operation);
})
  
  const client = new ApolloClient({

    // uri: 'http://localhost:4000/graphql',
    // credentials: 'include',
    cache: new InMemoryCache(),
    link: from([
      authMiddleware,
      // activityMiddleware,
      httpLink
    ]),
    // link: concat(authMiddleware, httpLink),

  });

  return (
    <AuthContext.Provider value={{ token, setToken }}>
        <ApolloProvider client={client}>
        {props.children}

        </ApolloProvider>
      

    </AuthContext.Provider>
  );
}
export default AuthContext;
