import { Box, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useGetAllCoinsQuery } from "../redux/apiSlice";
import CoinCard from "../UI/CoinCard";

function Coins() {
  const { data, isFetching } = useGetAllCoinsQuery();
  const coins = data?.data?.coins;
  console.log(data);
  return (
    <Fragment>
      <Box>
        <Container>
          <Paper
            variant="elevation"
            elevation={3}
            sx={{ mt: 4, p: 2, border: "1px solid rgb(254, 119, 47)" }}
          >
            <Typography variant="h3" fontWeight="400" textTransform="uppercase">
              top 12 coins
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{ mt: 3, p: 3 }}>
            <Chip label="Show All Coins" variant="outlined" clickable />
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{
                mt: 2,
                "& .MuiBox-root": {
                  margin: "10px 20px",
                },
              }}
            >
              {coins?.slice(0, 12).map((coin, index) => (
                <CoinCard
                  key={index}
                  id={coin.uuid}
                  img={coin.iconUrl}
                  name={coin.name}
                  price={coin.price}
                  color={coin.color}
                  symbol={coin.symbol}
                  rank={coin.rank}
                  marketCap={coin.marketCap}
                />
              ))}
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Fragment>
  );
}

export default Coins;
