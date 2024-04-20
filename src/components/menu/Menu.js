/*** Menu.js ***/

// Importing React and Material-UI modules
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from "@mui/material/styles/styled";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

import SearchIcon from "@mui/icons-material/Search";

// *** Importing Styled Components of each section ***
import { HeadingGrid, HeadingContainer, MenuHeading } from "./HeadingComponents";
import { SearchGrid, SearchContainer, SearchPaneWrapper, IconWrapper, SearchField, SearchPaneDivider } from "./SearchComponents";
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
                    <HeadingContainer>
                        <ListRoundedIcon />
                        <MenuHeading variant="h6">Menu</MenuHeading>
                    </HeadingContainer>
                </HeadingGrid>

                {/* Search Section */}
                <SearchGrid item xs={12} md={9}>
                    <SearchContainer>
                        <SearchPaneWrapper elevation={2} component="form">
                            <IconWrapper>
                                <SearchIcon />
                            </IconWrapper>
                            <SearchPaneDivider orientation="vertical" />
                            <SearchField
                                placeholder="Search in menu"
                                inputProps={{ "aria-label": "search in menu" }}
                                type="search"
                            // value={searchTerm}
                            // onChange={handleSearchInputChange}
                            />
                        </SearchPaneWrapper>
                    </SearchContainer>
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