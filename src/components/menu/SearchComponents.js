/*** SearchComponents.js ***/

import Grid from '@mui/material/Grid';
import styled from "@mui/material/styles/styled";

export const SearchGrid = styled(Grid)({});

export const SearchContainer = styled(Grid)(({ theme }) => ({
    border: "blue 2px solid",
    borderRadius: "8px",
    color: "blue",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));