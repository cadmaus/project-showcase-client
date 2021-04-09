import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DisplayProjects from '../DisplayProjects/DisplayProjects'
import './MainPage.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const MainPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="main-page">
            <Grid spacing={3}>
                <Grid item s={12} md={8}>
                    {/* <Paper className={classes.paper}>xs=12</Paper> */}
                    <DisplayProjects/>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage
