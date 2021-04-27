import React from 'react';

import Cards from './components/Card/Card';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css'
import fetch_Data  from './api/index'

class App extends React.Component{
    state = {
        data : {},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetch_Data();
        this.setState({data:fetchedData})
    }
    handleCountryChange=async(country)=>{
        const fetchedData = await fetch_Data(country);
        this.setState({data:fetchedData,country:country})
       
    } 
    render(){
        const {data}=this.state;
        return (
            <div className={styles.container}>
                <Cards data={this.state.data}/> 
                <Chart />
                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                
            </div>
        )
    }
}

export default App

