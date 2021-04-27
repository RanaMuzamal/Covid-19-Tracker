import React,{useEffect,useState} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api'
const CountryPicker =({handleCountryChange})=>{
    const [fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            const country_list = await fetchCountries()
            setfetchedCountries(country_list);
        }
        fetchAPI();
    },[]);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue=" " onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>   
                {fetchedCountries?.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl> 
    )
}
export default CountryPicker;
