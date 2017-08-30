import React, { Component } from 'react';

import PageStore from "../dataStore/PageStore";

import '../assets/style.97f2c2099c4fe49fe51b2eb25aecfcf7.min.css';
import "../assets/styling.css";

import Headermain from "./minions/header/Headermain"
import ContentContainer from "./minions/MainContainer/ContentContainer";
import Footer from "./minions/footer/mainFooter";
import CookieConsent from "./minions/extras/cookieConsent";

// //extras 
// import {MiniBasket, Overlay} from "./minions/extras/Extras"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageData: PageStore.getPageData()
    };
  }

  componentWillMount() {
    PageStore.on("NewPageDataAvailable", () => {
      this.setState({
        pageData: PageStore.getPageData()
      })
    });
  }

  componentWillUnmount() {
    PageStore.removeListener("NewPageDataAvailable");
  }

  render() {
    if(this.state.pageData)
      document.title = this.state.pageData.dynamicPage.content.window_title;

    return (
      <div className="wrapper">
        <Headermain />
        <ContentContainer />
        <Footer />
        {/*<MiniBasket />
          <Overlay/>*/}
        <CookieConsent />
      </div>
    );
  }
}

export default App;
