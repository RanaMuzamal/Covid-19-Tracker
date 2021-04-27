import { Card,CardContent,Grid, Typography } from '@material-ui/core';
import React from 'react';
import ReactCountUp from 'react-countup-v2';
import styles from './Cards.module.css';
import cx from 'classnames';
const Cards = ({data :{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return "Loading ......"
    }
    return(
        <div className={styles.container}>
            <Grid container spacing ={1} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <ReactCountUp start={0} end ={confirmed.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases by Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant="h5">
                            <ReactCountUp start={0} end={recovered.value} duration={2.5} seperator=","/>
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoveries by Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <ReactCountUp start={0} end={deaths.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        
    )
}
export default Cards;