/*** SearchComponents.js ***/

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import styled from "@mui/material/styles/styled";

export const SearchGrid = styled(Grid)(({ theme }) => ({
    // this position: "sticky" is for desktop screen
    position: "sticky",
    left: 0,
    top: 0,
    zIndex: 1,
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0.25),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, 1.8),
    },
}));

export const IconWrapper = styled("div")(() => ({
    display: "inline-flex",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.54)",
}));

export const SearchField = styled(InputBase)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    paddingRight: theme.spacing(1.5),
    flex: theme.spacing(1),
}));

export const SearchPaneWrapper = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

export const SearchPaneDivider = styled(Divider)(({ theme }) => ({
    height: 28,
    marginRight: 0.5,
}));
