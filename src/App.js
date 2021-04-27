import React from "react";
import styles from "./App.module.css";

import Cards from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetch_Data } from "./api/";

class App extends React.Component {
  state = {};
  async componentDidMount() {
    fetch_Data().then((data) => {
      this.setState({ data: data, country: "global" });
    });
  }
  handleCountryChange = async (country) => {
    fetch_Data(country).then((data) => {
      this.setState({ data: data, country: country });
    });
  };
  render() {
    return (
      <div className={styles.container}>
        
        <Cards data={this.state.data} />
        <Chart data={this.state.data} country={this.state.country}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
