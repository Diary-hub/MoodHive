import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";

const HomePage = () => {

  return (
    <>

      <HeroSlide mediaType={tmdbConfigs.mediaType.movies} mediaCategory={tmdbConfigs.popular} />

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="زۆرترین بینراوەکان">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movies} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header=" زۆرترین گوێ لێگیراوەکان ">
          <MediaSlide mediaType={tmdbConfigs.mediaType.music} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

      </Box>
    </>

  );
};

export default HomePage;