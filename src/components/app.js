import React, { Component } from 'react';
import SearchBar from '../container/searchBar';
import WeatherList from '../container/weather_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
