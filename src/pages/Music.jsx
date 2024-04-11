import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box, Slide } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/AllMediaSlide";

const Music = () => {

    return (
        <>
            <center>

                <HeroSlide mediaType={tmdbConfigs.mediaType.movies} mediaCategory={tmdbConfigs.popular} />

                <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
                    <Container header="گۆرانیەکان">
                        <MediaSlide mediaType={tmdbConfigs.mediaType.music} mediaCategory={tmdbConfigs.mediaCategory.popular} />
                    </Container>

                </Box>

            </center>
        </>

    );
};

export default Music;