import {
  Box,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../redux/apiSlice";
import { BsGlobe } from "react-icons/bs";
import millify from "millify";
function CoinDetails() {
  const { id } = useParams();
  const { data, isFetching } = useGetCoinDetailsQuery(id);
  const coin = data?.data?.coin;
  console.log(coin);
  return (
    <Fragment>
      <Container>
        <Paper
          variant="elevation"
          elevation={3}
          sx={{ mt: 4, p: 2, border: "1px solid rgb(254, 119, 47)" }}
        >
          <Typography variant="h3" fontWeight="400" textTransform="uppercase">
            Coin details
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            mt: 3,
            p: 3,
            border: `1px solid ${coin?.color ? coin?.color : ""}`,
          }}
        >
          <Box>
            <Stack direction="row" spacing={3} alignItems="start">
              <Box width="60px">
                <img
                  src={coin?.iconUrl}
                  alt="icon"
                  style={{ maxWidth: "100%" }}
                />
              </Box>
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  {coin?.name}
                </Typography>
                <Typography variant="body1">{coin?.symbol}</Typography>
                <Typography variant="body1" fontWeight="bold">
                  ${millify(coin?.price)}
                </Typography>
              </Box>
              <a href={coin?.websiteUrl} target="_blank">
                <IconButton>
                  <BsGlobe />
                </IconButton>
              </a>
            </Stack>
          </Box>
          <Divider />
          <Box>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: coin?.description }}
            >
              {}
            </Typography>
          </Box>
          <Divider />

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
                  {millify(coin?.totalCoins)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Bitcoin Dominance
                </Typography>
                <Typography variant="body1">
                  {millify(coin?.btcDominance)}%
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold">
                   Market Cap
                </Typography>
                <Typography variant="body1">
                  {millify(coin?.marketCap)}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total Markets
                </Typography>
                <Typography variant="body1">
                  {millify(coin?.totalMarkets)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total Exchanges
                </Typography>
                <Typography variant="body1">
                  {millify(coin?.totalExchanges)}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Total 24HRS Volume
                </Typography>
                <Typography variant="body1">
                  {millify(coin?.total24hVolume)}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default CoinDetails;
