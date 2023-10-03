import { Route, Routes } from "react-router-dom";
import Box from "../components/Box";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import Signup from "../pages/Signup";

export const Hero = () => (
  <Grid>
    <Box>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
      </main>
    </Box>
  </Grid>
);
