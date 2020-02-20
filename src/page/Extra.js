import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function InteractiveList() {
  const classes = useStyles();

  // bitcoin
  const [BTC_USD, SET_BTC_USD] = useState({
    price: "",
    change: "",
    volume: "",
    success: false,
    error: ""
  });

  // eth
  const [ETH_USD, SET_ETH_USD] = useState({
    price: "",
    change: "",
    volume: "",
    success: false,
    error: ""
  });

  // bit cash
  const [BCH_USD, SET_BCH_USD] = useState({
    price: "",
    change: "",
    volume: "",
    success: false,
    error: ""
  });

  // lite coin
  const [LTC_USD, SET_LTC_USD] = useState({
    price: "",
    change: "",
    volume: "",
    success: false,
    error: ""
  });

  async function getData() {
    const btc_usd = await axios(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );

    const eth_usd = await axios(
      "https://api.cryptonator.com/api/ticker/eth-usd"
    );

    const bch_usd = await axios(
      "https://api.cryptonator.com/api/ticker/bch-usd"
    );

    const ltc_usd = await axios(
      "https://api.cryptonator.com/api/ticker/ltc-usd"
    );

    SET_BTC_USD({
      price: btc_usd.data.ticker.price,
      change: btc_usd.data.ticker.change,
      volume: btc_usd.data.ticker.volume,
      success: btc_usd.data.success,
      error: btc_usd.data.error
    });

    SET_ETH_USD({
      price: eth_usd.data.ticker.price,
      change: eth_usd.data.ticker.change,
      volume: eth_usd.data.ticker.volume,
      success: eth_usd.data.success,
      error: eth_usd.data.error
    });

    SET_BCH_USD({
      price: bch_usd.data.ticker.price,
      change: bch_usd.data.ticker.change,
      volume: bch_usd.data.ticker.volume,
      success: bch_usd.data.success,
      error: bch_usd.data.error
    });

    SET_LTC_USD({
      price: ltc_usd.data.ticker.price,
      change: ltc_usd.data.ticker.change,
      volume: ltc_usd.data.ticker.volume,
      success: ltc_usd.data.success,
      error: ltc_usd.data.error
    });
  }

  useEffect(() => {
    getData();

    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className={classes.root}>
          <Grid container spacing={2}>
            {/******/}
            <Grow
              in={BTC_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 500 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  BTC-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${BTC_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${BTC_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${BTC_USD.change}`} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>
            {/******/}
            <Grow
              in={ETH_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  ETH-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${ETH_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${ETH_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${ETH_USD.change}`} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>

            {/******/}
            <Grow
              in={BCH_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1500 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  BCH-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${BCH_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${BCH_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${BCH_USD.change}`} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>

            {/******/}
            <Grow
              in={LTC_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  LTC-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${LTC_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${LTC_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${LTC_USD.change}`} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
