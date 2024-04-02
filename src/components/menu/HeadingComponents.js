import Grid from '@mui/material/Grid';
import styled from "@mui/material/styles/styled";

export const HeadingGrid = styled(Grid)({});

export const HeadingContainer = styled(Grid)(({ theme }) => ({
    border: "purple 2px solid",
    borderRadius: "8px",
    color: "purple",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
