import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import AML from "./components/aml/AML";
import MemberInPractice from "./components/memberInPractice/MemberInPractice";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import PricingAndPackages from "./components/priceingAndPackages/PricingAndPackages";
import FormTabs from "./components/newClientsTabs/FormTabs";
import ContactUs from "./components/contactUs/ContactUs";

class App extends Component {
  render() {
    return (
        <Router>
            <div style={{paddingTop:80}}>
                <Header/>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/memberInPractice" component={MemberInPractice} />
                        <Route exact path="/aml" component={AML} />
                        <Route exact path="/whoWeAre" component={WhoWeAre} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/pricing" component={PricingAndPackages} />
                        <Route exact path="/newClients" component={FormTabs} />
                        <Route exact path="/contactUs" component={ContactUs} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
