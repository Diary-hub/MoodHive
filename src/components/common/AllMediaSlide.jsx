import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../api/modules/media.api";
import AutoSwiper from "./AutoSwiper";
import { toast } from "react-toastify";
import MediaItem from "./MediaItem";
import { List } from "@mui/material";

const MediaSlide = ({ mediaType, mediaCategory }) => {
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
  }, [mediaType, mediaCategory]);

  if (medias.length === 0) {
    return <div>Loading...</div>;
  }





  return (

    <AutoSwiper>
      {medias.map((media, index) => (

           < SwiperSlide key={index} >
        <MediaItem media={media} mediaType={mediaType} mediaCategory={mediaCategory} />
      </SwiperSlide>


      ))

      }
    </AutoSwiper >
  );
};


export default MediaSlide;
