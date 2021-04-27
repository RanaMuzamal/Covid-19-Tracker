import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
const Cards = ({ data }) => {
  if (!data) {
    return "Loading ......";
  }
  return (
    <div className={`container-fluid px-0 mx-0 mb-5 ${styles.card}`}>
      <Grid container spacing={1} justify="center">
        <Grid item component={Card} xs={12} md={3}  className={`mx-4 mb-2 ${styles.infected}`} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={-875.039}
                end={data.confirmed.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Active Cases by Covid-19
            </Typography>
          </CardContent>
        </Grid>
        
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={`mx-4 mb-2 ${styles.recovered}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoveries
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={-875.039}
                end={data.recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recoveries by Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={`mx-4 mb-2 ${styles.deaths}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={-875.039}
                end={data.deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Deaths by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
