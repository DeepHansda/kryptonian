import React from "react";
import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import millify from "millify";
import CoinCard from "../UI/CoinCard";
import { useGetGlobalDataQuery } from "../redux/apiSlice";

function GlobalData() {
  const { data, isFetching, error } = useGetGlobalDataQuery();
  const globalData = data?.data;
  return (
    <Box>
      <Container>
        <Paper
          variant="elevation"
          elevation={3}
          sx={{ mt: 2, p: 2, border: "1px solid rgb(254, 119, 47)" }}
        >
          <Typography variant="h3" fontWeight="400" textTransform="uppercase">
            Global Crypto Stats
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ mt: 5, p: 3 }}>
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              sx={{
                "& .MuiBox-root": {
                  margin: "20px 40px",
                },
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total Cryptocurrencies
                </Typography>
                <Typography variant="body1">
                  {millify(globalData?.totalCoins)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Bitcoin Dominance
                </Typography>
                <Typography variant="body1">
                  {millify(globalData?.btcDominance)}%
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total Market Cap
                </Typography>
                <Typography variant="body1">
                  {millify(globalData?.totalMarketCap)}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total Markets
                </Typography>
                <Typography variant="body1">
                  {millify(globalData?.totalMarkets)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total Exchanges
                </Typography>
                <Typography variant="body1">
                  {millify(globalData?.totalExchanges)}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total 24HRS Volume
                </Typography>
                <Typography variant="body1">
                  {millify(globalData?.total24hVolume)}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider />
          <Box my={3}>
            <Typography variant="h4">Tranding Coins</Typography>

            <Stack
              direction="row"
              sx={{
                mt: 2,
                "& .MuiBox-root": {
                  margin: "10px 20px",
                },
              }}
            >
              {globalData?.bestCoins?.map((coin, index) => (
                <CoinCard
                  key={index}
                  id={coin.uuid}
                  img={coin.iconUrl}
                  name={coin.name}
                  symbol={coin.symbol}
                />
              ))}
            </Stack>
          </Box>

          <Divider />
          <Box mt={3}>
            <Typography variant="h4">New Coins</Typography>

            <Stack
              direction="row"
              sx={{
                mt: 2,
                "& .MuiBox-root": {
                  margin: "10px 20px",
                },
              }}
            >
              {globalData?.newestCoins?.map((coin, index) => (
                <CoinCard
                  key={index}
                  id={coin.uuid}
                  img={coin.iconUrl}
                  name={coin.name}
                  symbol={coin.symbol}
                />
              ))}
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default GlobalData;
