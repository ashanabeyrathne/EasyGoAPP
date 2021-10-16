import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
           <Card plain>
           <CardHeader plain color="success">
            <h4 className={classes.cardTitleWhite}>
             Dashboard
            </h4>
          </CardHeader>
          </Card>
          </GridItem>
        <GridItem xs={12} sm={6} md={3}> 
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <DirectionsBusIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Active Buses</p>
              <h3 className={classes.cardTitle}>
                49 <small>CTB</small>
                
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <div>
                <Update />
                </div>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AccountBalanceIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <SentimentDissatisfiedIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
              Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    
    </div>
  );
}
