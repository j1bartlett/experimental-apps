import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components'
import {Main} from './components/GridBlocks'
import HeaderBlock from './components/HeaderBlock'
import FooterBlock from './components/FooterBlock'
import SectionBlock from './components/SectionBlock'
/*import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
*/

const GlobalStyle = createGlobalStyle`
html,
  body,
  #app,
  .main {
    min-height: 100vh;
    height: 100%;
  }


html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }
  body {
  	background-color:#000000;
    margin: auto;
    padding: 0;
    min-width: 500px;
    /*max-width: 800px;*/
    color: #444;
    font-size: 0.9em;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;


class App extends Component {
	render() {
		return(
			<div className="App">
			<GlobalStyle/>
			<Main>
			<HeaderBlock/>
			<SectionBlock/>
			<FooterBlock/>
			</Main>
			</div>
			)
	}
}
export default App;