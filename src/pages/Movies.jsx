import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box, Slide } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import AllMediaSlide from "../components/common/AllMediaSlide";

const Movies = () => {

    return (
        <>
            <center>

                <HeroSlide mediaType={tmdbConfigs.mediaType.movies} mediaCategory={tmdbConfigs.popular} />

                <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
                    <Container header="فیلمەکان">
                        <AllMediaSlide mediaType={tmdbConfigs.mediaType.movies} mediaCategory={tmdbConfigs.mediaCategory.popular} />
                    </Container>

                </Box>

            </center>
        </>

    );
};

export default Movies;