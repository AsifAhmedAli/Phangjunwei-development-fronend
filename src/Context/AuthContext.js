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
  axios.defaults.withCredentials = true;


const AuthContext = createContext();
export function AuthContextProvider(props) {
  const [token, settoken] = useState("");

  async function setToken(toks) {
    localStorage.setItem("firstLogin", true);
    settoken(toks);
  }

  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(async({ headers = {} }) => {

      const firsLogin=localStorage.getItem('firstLogin')
      if(firsLogin){
             const tok = await axios.post("http://localhost:4000/graphql", {
              query: `
              mutation Mutation {
               generateAccessToken {
               token  
               }
             }
              `,
            },{
              headers:{
                authorization : token
              }
            })
            setToken(tok.data.data.generateAccessToken.token)
            
      }
        

         return {
        headers: {
          ...headers,
          authorization: token||null ,
        },
      };
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      authMiddleware,
      httpLink,
    ]),
  });
  useEffect(async() => {
    
    const firsLogin=localStorage.getItem('firstLogin')
    if(firsLogin){
           const tok = await axios.post("http://localhost:4000/graphql", {
            query: `
            mutation Mutation {
             generateAccessToken {
             token  
             }
           }
            `,
          },{
            headers:{
              authorization : token 
            }
          })
          setToken(tok.data.data.generateAccessToken.token)
          
    }
    
  },[token] )

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </AuthContext.Provider>
  );
}
export default AuthContext;
