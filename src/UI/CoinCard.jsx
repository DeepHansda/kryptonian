import { Box, Divider, Stack, Typography } from "@mui/material";
import millify from "millify";
import React from "react";
import { useNavigate } from "react-router-dom";

function CoinCard({
  id,
  img,
  name,
  marketCap,
  price,
  day,
  rank,
  symbol,
  color,
}) {
  const navigate = useNavigate();
  const navi = () => {
    navigate(`/coinDetails/${id}`);
  };
  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: `1px solid ${color ? color : "rgba(0, 0, 0, 0.3)"}`,
      }}
      onClick={() => navi()}
    >
      <Stack direction="row">
        <Box width="40px">
          <img src={img} alt="icon" style={{ maxWidth: "100%" }} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Typography variant="body1" fontWeight="bold">
            {name}
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <Box>
        {rank && (
          <Stack direction="row" spacing={4}>
            <Typography variant="body1" fontWeight="bold">
              Rank :
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {"#" + rank}
            </Typography>
          </Stack>
        )}
        {price && (
          <Stack direction="row" spacing={4}>
            <Typography variant="body1" fontWeight="bold">
              Price :
            </Typography>
            <Typography variant="body1">{millify(price)}</Typography>
          </Stack>
        )}
        {symbol && (
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" fontWeight="bold">
              Symbol :
            </Typography>
            <Typography variant="body1">{symbol}</Typography>
          </Stack>
        )}

        {marketCap && (
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" fontWeight="bold">
              Market Cap :
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {millify(marketCap)}
            </Typography>
          </Stack>
        )}

        {day && (
          <Stack direction="row" spacing={2}>
            <Typography variant="body1" fontWeight="bold">
              24h Volume :
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {millify(day)}
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default CoinCard;
