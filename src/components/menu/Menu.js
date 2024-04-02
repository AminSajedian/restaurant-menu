// Importing React and Material-UI modules
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from "@mui/material/styles/styled";

// *** Importing Styled Components of each section ***
import { HeadingGrid, HeadingContainer, } from "./HeadingComponents";
import { SearchGrid, SearchContainer, } from "./SearchComponents";
import { NavigationGrid, NavigationContainer, } from "./NavigationComponents";
import { ContentGrid, ContentContainer, } from "./ContentComponents";

// *** Styled Container for the entire menu ***
export const MenuContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(1) // theme.spacing(1) === "8px"
}));

// *** Menu Component ***
export default function Menu() {
    return (
        <MenuContainer>
            <Grid container spacing={1}>
                {/* Heading Section */}
                <HeadingGrid item xs={12} md={3}>
                    <HeadingContainer>Heading</HeadingContainer>
                </HeadingGrid>

                {/* Search Section */}
                <SearchGrid item xs={12} md={9}>
                    <SearchContainer>Search</SearchContainer>
                </SearchGrid>

                {/* Navigation Section */}
                <NavigationGrid item xs={12} md={3}>
                    <NavigationContainer>Navigation</NavigationContainer>
                </NavigationGrid>

                {/* Content Section */}
                <ContentGrid item xs={12} md={9}>
                    <ContentContainer>Content</ContentContainer>
                </ContentGrid>
            </Grid>
        </MenuContainer>
    );
}