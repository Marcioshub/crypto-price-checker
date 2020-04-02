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
import Panel from "../components/Panels";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
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
    markets: [],
    success: false,
    error: ""
  });

  // eth
  const [ETH_USD, SET_ETH_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  // bit cash
  const [BCH_USD, SET_BCH_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  // lite coin
  const [LTC_USD, SET_LTC_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  // dash
  const [DASH_USD, SET_DASH_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  // doge
  const [DOGE_USD, SET_DOGE_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  // monero
  const [XMR_USD, SET_XMR_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  // ripple
  const [XRP_USD, SET_XRP_USD] = useState({
    price: "",
    change: "",
    volume: "",
    markets: [],
    success: false,
    error: ""
  });

  async function getData() {
    const btc_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/btc-usd"
    );

    const eth_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/eth-usd"
    );

    const bch_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/bch-usd"
    );

    const ltc_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/ltc-usd"
    );

    const dash_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/dash-usd"
    );

    const doge_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/doge-usd"
    );

    const xmr_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/xmr-usd"
    );

    const xrp_usd = await axios(
      "https://api.cryptonator.com/api/full/ticker/xrp-usd"
    );

    SET_BTC_USD({
      price: btc_usd.data.ticker.price,
      change: btc_usd.data.ticker.change,
      volume: btc_usd.data.ticker.volume,
      markets: btc_usd.data.ticker.markets,
      success: btc_usd.data.success,
      error: btc_usd.data.error
    });

    SET_ETH_USD({
      price: eth_usd.data.ticker.price,
      change: eth_usd.data.ticker.change,
      volume: eth_usd.data.ticker.volume,
      markets: eth_usd.data.ticker.markets,
      success: eth_usd.data.success,
      error: eth_usd.data.error
    });

    SET_BCH_USD({
      price: bch_usd.data.ticker.price,
      change: bch_usd.data.ticker.change,
      volume: bch_usd.data.ticker.volume,
      markets: bch_usd.data.ticker.markets,
      success: bch_usd.data.success,
      error: bch_usd.data.error
    });

    SET_LTC_USD({
      price: ltc_usd.data.ticker.price,
      change: ltc_usd.data.ticker.change,
      volume: ltc_usd.data.ticker.volume,
      markets: ltc_usd.data.ticker.markets,
      success: ltc_usd.data.success,
      error: ltc_usd.data.error
    });

    SET_DASH_USD({
      price: dash_usd.data.ticker.price,
      change: dash_usd.data.ticker.change,
      volume: dash_usd.data.ticker.volume,
      markets: dash_usd.data.ticker.markets,
      success: dash_usd.data.success,
      error: dash_usd.data.error
    });

    SET_DOGE_USD({
      price: doge_usd.data.ticker.price,
      change: doge_usd.data.ticker.change,
      volume: doge_usd.data.ticker.volume,
      markets: doge_usd.data.ticker.markets,
      success: doge_usd.data.success,
      error: doge_usd.data.error
    });

    SET_XMR_USD({
      price: xmr_usd.data.ticker.price,
      change: xmr_usd.data.ticker.change,
      volume: xmr_usd.data.ticker.volume,
      markets: xmr_usd.data.ticker.markets,
      success: xmr_usd.data.success,
      error: xmr_usd.data.error
    });

    SET_XRP_USD({
      price: xrp_usd.data.ticker.price,
      change: xrp_usd.data.ticker.change,
      volume: xrp_usd.data.ticker.volume,
      markets: xrp_usd.data.ticker.markets,
      success: xrp_usd.data.success,
      error: xrp_usd.data.error
    });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
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
                    <ListItem>
                      <Panel markets={BTC_USD.markets} />
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
                    <ListItem>
                      <Panel markets={ETH_USD.markets} />
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
                    <ListItem>
                      <Panel markets={BCH_USD.markets} />
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
                    <ListItem>
                      <Panel markets={LTC_USD.markets} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>

            {/******/}
            <Grow
              in={DASH_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  DASH-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${DASH_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${DASH_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${DASH_USD.change}`} />
                    </ListItem>
                    <ListItem>
                      <Panel markets={DASH_USD.markets} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>

            {/******/}
            <Grow
              in={DOGE_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  DOGE-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${DOGE_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${DOGE_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${DOGE_USD.change}`} />
                    </ListItem>
                    <ListItem>
                      <Panel markets={DOGE_USD.markets} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>

            {/******/}
            <Grow
              in={DOGE_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  XMR-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${XMR_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${XMR_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${XMR_USD.change}`} />
                    </ListItem>
                    <ListItem>
                      <Panel markets={XMR_USD.markets} />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grow>

            {/******/}
            <Grow
              in={DOGE_USD.success}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 2000 }}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  XRP-USD
                </Typography>
                <div className={classes.demo}>
                  <List dense={false}>
                    <ListItem>
                      <ListItemText primary={`Price: $${XRP_USD.price}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Volume: ${XRP_USD.volume}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Change: ${XRP_USD.change}`} />
                    </ListItem>
                    <ListItem>
                      <Panel markets={XRP_USD.markets} />
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
