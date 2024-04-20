/*** NavigationComponents.js ***/

import Grid from '@mui/material/Grid';
import styled from "@mui/material/styles/styled";

export const NavigationGrid = styled(Grid)({});

export const NavigationContainer = styled(Grid)(({ theme }) => ({
    border: "red 2px solid",
    borderRadius: "8px",
    color: "red",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));