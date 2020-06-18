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
import BigCommerce_Logo from './BigCommerce_logo.svg';
import GatsbyJS_Logo from './gatsbyjs_logo.svg';
import WordPress_Logo from './wordpress_logo.svg';
import Drupal_Logo from './drupal_logo.svg';
import VueJS_Logo from './vuejs_logo.svg';
import GitHub_Logo from './github_logo.svg';
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
        <H0 color="primary">BigCom.DEV</H0>
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
              Modified Cornerstone 4.4.0
            </a>
            <br></br>
            <div class="github">
              <a href="https://github.com/obrien-k/sf-multi-cart">
                <GitHub_Logo /> <Small>Cornerstone Modified</Small>
              </a>
            </div>
          
        </div>
        </Grid.Item>
        <Grid.Item>
        <div class="block">
            <a href="https://cornerstone-light-demo.mybigcommerce.com/">
              <BigCommerce_Logo />
              <br></br>
              Cornerstone Light 4.4.0
            </a>
            <br></br>
            <div class="github">
              <a href="https://github.com/bigcommerce/cornerstone">
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
                <Grid.Item>
                  <div class="block">
                    <a href="https://bigcom.dev/#">
                      <VueJS_Logo />
                      <br></br>
                      Vue.js
                    </a>
                    <br></br>
                    <div class="github">
                      <a href="https://github.com/obrien-k/bcd-vue">
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
    </div>
  );
}
export default App;
