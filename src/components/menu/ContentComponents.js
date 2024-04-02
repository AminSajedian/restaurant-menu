import Grid from '@mui/material/Grid';
import styled from "@mui/material/styles/styled";

export const ContentGrid = styled(Grid)({});

export const ContentContainer = styled(Grid)(({ theme }) => ({
    border: "green 2px solid",
    borderRadius: "8px",
    color: "green",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));