import React from 'react';
import {
  GlobalStyles,
  H0,
  H1,
  Box,
  Small,
  Panel
} from '@bigcommerce/big-design';
import './styles/main.scss';
import BigCommerce_Logo from './BigCommerce_logo.svg';
import GatsbyJS_Logo from './gatsbyjs_logo.svg';
import WordPress_Logo from './wordpress_logo.svg';
import Drupal_Logo from './drupal_logo.svg';
import GitHub_Logo from './github_logo.svg';
function App() {
  return (
    <div>
      <GlobalStyles />
      <Box backgroundColor="brand" padding="xxLarge">
        <H0 color="primary">BigCom.Dev</H0>
      </Box>
      <H1>Apps</H1>
      <div id="apps">
        <div class="block">
          <Panel>
            <a href="https://store.bigcom.dev">
              <BigCommerce_Logo />
              <br></br>
              Base Store (Cornerstone Light 4.1.1)
            </a>
            <br></br>
            <div class="github">
              <GitHub_Logo />
            </div>
          </Panel>
        </div>
        <div class="block">
          <Panel>
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
          </Panel>
        </div>
        <div class="block">
          <Panel>
            <a href="https://wp.bigcom.dev">
              <WordPress_Logo />
              <br></br>
              WordPress
            </a>
            <br></br>
            <div class="github">
              <GitHub_Logo />
            </div>
          </Panel>
        </div>
        <div class="block">
          <Panel>
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
          </Panel>
        </div>
      </div>
    </div>
  );
}
export default App;
