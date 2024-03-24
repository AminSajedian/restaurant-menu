import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from "@mui/material/styles/styled";

const GridContainer = styled(Grid)(({ theme }) => ({
    "& .MuiGrid-item": {
        marginTop: 5,
        marginBottom: 5
    }
}));

const HeadingGrid = styled(Grid)(({ theme }) => ({
    border: "purple 2px solid",
    textAlign: "center",
    borderRadius: "8px",
    color: "purple",
}));

const SearchGrid = styled(Grid)(({ theme }) => ({
    border: "blue 2px solid",
    textAlign: "center",
    borderRadius: "8px",
    color: "blue",
}));

const NavGrid = styled(Grid)(({ theme }) => ({
    border: "red 2px solid",
    textAlign: "center",
    borderRadius: "8px",
    color: "red",
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
    border: "green 2px solid",
    textAlign: "center",
    borderRadius: "8px",
    color: "green",
}));

export default function Menu() {
    return (
        <Container>
            <GridContainer container>
                <HeadingGrid item xs={12} md={3}>
                    Heading
                </HeadingGrid>
                <SearchGrid item xs={12} md={9}>
                    Search
                </SearchGrid>
                <NavGrid item xs={12} md={3}>
                    Navigation
                </NavGrid>
                <ContentGrid item xs={12} md={9}>
                    Content
                </ContentGrid>
            </GridContainer>
        </Container>
    );
}
