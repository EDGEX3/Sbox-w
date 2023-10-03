import { Route, Routes } from "react-router-dom";
import Box from "../components/Box";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import Auth from "./Auth";

export const Hero = () => (
  <Grid>
    <Box>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="auth/*" element={<Auth/>}/>      
        </Routes>
      </main>
    </Box>
  </Grid>
);
