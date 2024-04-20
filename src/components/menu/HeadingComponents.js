/*** HeadingComponents.js ***/

import Grid from '@mui/material/Grid';
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";

export const HeadingGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
    },
}));

export const HeadingContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));

export const MenuHeading = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(0.75),
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
}));
