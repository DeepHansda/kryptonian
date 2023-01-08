import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./App.css";
import { useGetAllCoinsQuery, useGetGlobalDataQuery } from "./redux/apiSlice";
import millify from "millify";
import CoinCard from "./UI/CoinCard";
import GlobalData from "./components/GlobalData";
import Coins from "./components/Coins";
import { Fragment } from "react";
import Navbar from "./UI/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/coinDetails/:id" element={<CoinDetails/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
