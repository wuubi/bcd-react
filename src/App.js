import React from 'react';
import {
  GlobalStyles,
  H0,
  H1,
  H2,
  H3,
  Box,
  Small,
  Panel,
  Grid
} from '@bigcommerce/big-design';
import './styles/main.scss';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
// or you can use `import gql from 'graphql-tag';` instead
import { ApolloProvider } from '@apollo/react-hooks';
import BigCommerce_Logo from './BigCommerce_logo.svg';
import GatsbyJS_Logo from './gatsbyjs_logo.svg';
import WordPress_Logo from './wordpress_logo.svg';
import Drupal_Logo from './drupal_logo.svg';
import GitHub_Logo from './github_logo.svg';

import BigCommerce from 'node-bigcommerce';

const bigCommerce = new BigCommerce({
  logLevel: 'info',
  clientId: '1bykg19d1bwle8ilver5yo78m3adhy5',
  accessToken: 'g9zkkr0r3s8w28rapcz71758b09svvc',
  secret: 'd2bcfc05d3d7723ec64bf09389d4dae2e262ccaea0602e95e0aa316e8dc92e6d',
  storeHash: 'bq4uczryb8',
  responseType: 'json',
  apiVersion: 'v3' // Default is v2
});


function getToken() {
  try {
    let token;
    const tokenReq = {
    channel_id: 313342,
    expires_at:1609286400,
    allowed_cors_origins: [
      "https://react.bigcom.dev"
    ]
}
  bigCommerce.post('/storefront/api-token', tokenReq)
  .then(data => {
  token = data.token;
  console.log(token);
  });
  }
  catch (err) {console.log(err)};
}
const token = getToken();

const client = new ApolloClient({
  uri: 'https://store.bigcom.dev/graphql',
  headers: {
    Authorization: 'Bearer ' + token
  },
});
client
  .query({
    query: gql`
      query apolloBC {
              site {
                products (entityId: 80) {
                  edges {
                    product: node {
                      ...ProductFields
                      }
                    }
                }
                settings {
                  storeName
                  url {
                    vanityUrl
                  }
                }
              }
            }
          fragment ProductFields on Product {
            id
            entityId
            name
            sku
            path
            defaultImage {
              img320px: url(width: 320)
              img640px: url(width: 640)
              img960px: url(width: 960)
              img1280px: url(width: 1280)
              altText
            }
            prices {
              price {
              value
              currencyCode
              }
            retailPrice {
              value
              currencyCode
            }
          }
        }
    `
  })
  .then(result => console.log(result));

function App() {
  const template = `
  "head head" 180px
  "nav  main" 700px
  "foot  foot" 50px
  / 1fr 5fr;
`;
  return (
    <div>
      <GlobalStyles />
      
      <Grid gridTemplate={template}>
      <Grid.Item gridArea="head">
      <Box backgroundColor="brand" padding="xLarge">
        <H0 color="primary">BigCom.Dev</H0>
      </Box>
      <H1>Apps</H1>
      </Grid.Item>
      <Grid.Item gridArea="nav">
        <Small>Whisklist Widget</Small>
      </Grid.Item>
      <Grid.Item gridArea="main">
        <div id="apps">
      <Panel>
        

        <H2>Storefronts</H2>
        <Grid gridColumns="repeat(3,1fr)">
        <Grid.Item>
        <div class="block">
          <H3>BigCommerce Storefronts</H3>
            <a href="https://store.bigcom.dev">
              <BigCommerce_Logo />
              <br></br>
              Base Store (Cornerstone Light 4.1.1)
            </a>
            <br></br>
            <div class="github">
              <a href="https://github.com/bigcommerce/bigcommerce-for-wordpress">
                <GitHub_Logo /> <Small>Cornerstone</Small>
              </a>
            </div>
          
        </div>
        </Grid.Item>
        </Grid>
        <H3>Headless Storefronts</H3>
        <Grid gridColumns="repeat(3,1fr)">
        <Grid.Item>
        <div class="block">
         
            <a href="https://gatsby.bigcom.dev">
              <GatsbyJS_Logo />
              <br></br>
              GatsbyJS
            </a>
            <br></br>
            <div class="github">
              <a href="https://github.com/obrien-k/bcd-gatsby">
                <GitHub_Logo /> <Small>GitHub Starter Repo</Small>
              </a>
            </div>
          
        </div>
        </Grid.Item>
        <Grid.Item>
        <div class="block">
          
            <a href="https://wp.bigcom.dev">
              <WordPress_Logo />
              <br></br>
              WordPress
            </a>
            <br></br>
            <div class="github">
              <a href="https://github.com/bigcommerce/bigcommerce-for-wordpress">
              <GitHub_Logo /> <Small>BigCommerce for WordPress plugin</Small>
              </a>
            </div>
        </div>
        </Grid.Item>
        <Grid.Item>
        <div class="block">
            <a href="https://drupal.bigcom.dev">
              <Drupal_Logo />
              <br></br>
              Drupal
            </a>
            <br></br>
            <div class="github">
              <a href="https://github.com/obrien-k/bcd-drupal8">
                <GitHub_Logo /> <Small>GitHub Starter Repo</Small>
              </a>
            </div>
         
        </div>
        </Grid.Item>
        </Grid>
        </Panel>
       
      </div>
      </Grid.Item>
      <Grid.Item gridArea="foot">
        Footer
      </Grid.Item>
      
      </Grid>

      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>
    </div>
  );
}
export default App;
