import { createContext, useEffect, useState } from "react";
import {
  HttpLink,
  ApolloLink,
  concat,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import axios from "axios";
axios.defaults.withCredentials = true;


const AuthContext = createContext();
export function AuthContextProvider(props) {
  const [profile, setProfile] = useState({
    email: '',
    role: ''
  })
  const [token, settoken] = useState("");

  async function setToken(toks) {
    localStorage.setItem("firstLogin", true);
    settoken(toks);
  }
  async function setProfileData(emails, roles) {
    setProfile({ email: emails, role: roles })
    // setProfile({...profile,role})
  }

  // const httpLink = new HttpLink({
  //   uri: "http://localhost:4000/graphql",
  //   credentials: "include",
  // });

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false
    })
  });

  // const authMiddleware = new ApolloLink((operation, forward) => {
  //   // add the authorization to the headers
  //   operation.setContext(async ({ headers = {} }) => {

  //     // const firsLogin=localStorage.getItem('firstLogin')
  //     // if(firsLogin){
  //     //        const tok = await axios.post("http://localhost:4000/graphql", {
  //     //         query: `
  //     //         mutation Mutation {
  //     //          generateAccessToken {
  //     //          token  
  //     //          }
  //     //        }
  //     //         `,
  //     //       },{
  //     //         headers:{
  //     //           authorization : token || null
  //     //         }
  //     //       })
  //     //       setToken(tok.data.data.generateAccessToken.token)

  //     // }


  //     return {
  //       headers: {
  //         ...headers,
  //         authorization: token || null,
  //       },
  //     };
  //   });

  //   return forward(operation);
  // });

  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link: from([
  //     authMiddleware,
  //     httpLink,
  //   ]),
  // });
  useEffect(async () => {

    const firsLogin = localStorage.getItem('firstLogin')
    if (firsLogin) {
      const tok = await axios.post("http://localhost:4000/graphql", {
        query: `
            mutation Mutation {
             generateAccessToken {
             token  
             email
             role
             }
           }
            `,
      }, {
        headers: {
          authorization: token
        }
      })
      settoken(tok.data.data.generateAccessToken.token)
      setProfileData(tok.data.data.generateAccessToken.email, tok.data.data.generateAccessToken.role)

    }

  }, [token])

  return (
    <AuthContext.Provider value={{ token, setToken, profile, setProfileData }}>

      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </AuthContext.Provider>
  );
}
export default AuthContext;
