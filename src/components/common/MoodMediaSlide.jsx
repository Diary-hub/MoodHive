import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../api/modules/media.api";
import AutoSwiper from "./AutoSwiper";
import { toast } from "react-toastify";
import MediaItem from "./MediaItem";
import { List } from "@mui/material";
import Container from "../../components/common/Container";
import { Box } from '@mui/material';
import uiConfigs from "../../configs/ui.configs";


const MediaSlide = ({ mediaType, mediaCategory,Mood }) => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const getMedias = async () => {
      const { response, err } = await mediaApi.getList({
        mediaType,
        mediaCategory,
        page: 1
      });
      console.log(response);
      if (response) setMedias(response);
      // if (err) toast.error(err.message);
    };

    getMedias();
  }, [mediaType, mediaCategory,Mood]);

  if (medias.length === 0) {
    return <div>Loading...</div>;
  }




  return (

    <AutoSwiper>
      {medias.map((media, index) => (

          checker(media,index,mediaType,mediaCategory,Mood)

      ))

      }
    </AutoSwiper >
  );
};

const checker = (media, index,mediaType,mediaCategory,Mood) => {

  if(Mood === ''){
    return(null);
  }
  else if (media.isMood === Mood) {
    return (
      <>

      < SwiperSlide key={index} >
        <MediaItem media={media} mediaType={mediaType} mediaCategory={mediaCategory} />
      </SwiperSlide>
      </>

      );

  } else{
    return(null)
  }
}

export default MediaSlide;
