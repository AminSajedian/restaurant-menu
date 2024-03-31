import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from "@mui/material/styles/styled";

// ************ Menu ************
const MenuContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(1)
}));

// ************ Heading ************
const HeadingGrid = styled(Grid)({});

const HeadingContainer = styled(Grid)(({ theme }) => ({
    border: "purple 2px solid",
    borderRadius: "8px",
    color: "purple",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

// ************ Search ************
const SearchGrid = styled(Grid)({});

const SearchContainer = styled(Grid)(({ theme }) => ({
    border: "blue 2px solid",
    borderRadius: "8px",
    color: "blue",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

// ************ Navigation ************
const NavigationGrid = styled(Grid)({});

const NavigationContainer = styled(Grid)(({ theme }) => ({
    border: "red 2px solid",
    borderRadius: "8px",
    color: "red",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

// ************ Content ************
const ContentGrid = styled(Grid)({});

const ContentContainer = styled(Grid)(({ theme }) => ({
    border: "green 2px solid",
    borderRadius: "8px",
    color: "green",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export default function Menu() {
    return (
        <MenuContainer>
            <Grid container spacing={1}>
                <HeadingGrid item xs={12} md={3}>
                    <HeadingContainer>Heading</HeadingContainer>
                </HeadingGrid>
                <SearchGrid item xs={12} md={9}>
                    <SearchContainer>Search</SearchContainer>
                </SearchGrid>
                <NavigationGrid item xs={12} md={3}>
                    <NavigationContainer>Navigation</NavigationContainer>
                </NavigationGrid>
                <ContentGrid item xs={12} md={9}>
                    <ContentContainer>Content</ContentContainer>
                </ContentGrid>
            </Grid>
        </MenuContainer>
    );
}
