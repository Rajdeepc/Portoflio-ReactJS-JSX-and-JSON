import React, { Component } from 'react';
import ContactList from './ContactList';
import './App.css';
let contacts = [
    {
      id:1,
        heading:'Fireabase-Chat--SSO',
        description:'The aim of the project is to built an app for bi directional communication.The awesome features it has is offline data cache and real time data sync with Firebase SDK. The app has been built with Bulma.io CSS framework and hosted on Fireabase Hosting.IT has a Facebook and a Google SSO feature enabled.',
        link:'https://github.com/Rajdeepc/Fireabase-Chat--SSO',
         colors:'#673ab7'
    },
    {
       id:2,
        heading:'Angular2-with-Firebase2',
        description:'This example shows a sync between Angular2 app with Firebase 2 database where there is a realtime sync Edit',
        link:'https://github.com/Rajdeepc/Angular2-with-Firebase2',
        colors:'#e91e63'
    },
    {
       id:3,
        heading:'ToDo-App-with-React-Webpack-and-Babel',
        description:'The app incluldes from basic react lifecycle methods rendering to state and props examples to React Routing',
        link:'https://github.com/Rajdeepc/ToDo-App-with-React-Webpack-and-Babel',
        colors:'#ffc107'
    },
    {
       id:4,
        heading:'Angular_Searchv1',
        description:'This demo is to do a Angular Search over name over the data called from an API and can do a toggle sort Edit',
        link:'https://github.com/Rajdeepc/Angular_Searchv1/tree/master',
        colors:'#4caf50'
    },
    {
       id:5,
        heading:'CRUD with Angular2',
        description:'This example gets your started with the basics of Angular 2 Events,Service,CRUD',
        link:'https://github.com/Rajdeepc/add-del-angular2',
        colors:'#795548'
    },
    {
       id:6,
        heading:'Multilevel-PushMenu',
        description:'This is an example of Multilevel push menu built with Javascript and inspired by Metronic Theme',
        link:'https://github.com/Rajdeepc/Multilevel-PushMenu',
        colors:'#607d8b'
    },
    {
       id:7,
        heading:'Project-OWL',
        description:'Project OWL is an open source project undder development by myself. Its is an aggregator of Cloud Services',
        link:'https://github.com/Rajdeepc/Project-OWL',
        colors:'#cddc39'
    },
     {
       id:7,
        heading:'ShoppingCart-With-ng-cart',
        description:'Shopping Cart example built on Angular JS ng-Cart.js',
        link:'https://github.com/Rajdeepc/ShoppingCart-With-ng-cart',
        colors:'#f44336'
    },
     {
       id:8,
        heading:'Bug Tracker',
        description:'Internal Bug tracker with Angular JS',
        link:'https://github.com/Rajdeepc/TodoApp',
        colors:'#ffc107'
    }
]
class App extends Component {

  render() {
    return (
      <div className="App">
       <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
