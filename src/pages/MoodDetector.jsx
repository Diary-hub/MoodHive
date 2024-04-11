import React, { Component, useState } from 'react';
import Webcam from "react-webcam";
import { Box, Button } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MoodMediaSlide from "../components/common/MoodMediaSlide";
import tmdbConfigs from "../api/configs/tmdb.configs";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

export const WebcamCapture = () => {

  const [image, setImage] = useState('');
  const [Mood, setMood] = useState('');
  const webcamRef = React.useRef(null);
  var hide = 'no';

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();

      const response = fetch("http://127.0.0.1:8000/moodhive/getFaces", {
        method: 'POST',
        body: JSON.stringify({
          "message": imageSrc,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((r) => r.json())
        .then((r) => {
          setMood(r.answer)
          console.log(r.answer)
        })
        .catch((error) => {
          console.log("Error:", error);
        });
      setImage(imageSrc)
      hide='no';

    });

  const MovieGetter = (Mood)=>{
      if(Mood !== null && hide ==='no'){
        return(

        <MoodMediaSlide Mood={Mood} mediaType={tmdbConfigs.mediaType.movies} mediaCategory={tmdbConfigs.mediaCategory.popular}>
          </MoodMediaSlide>




          );
      }else{
        return (null)
      }

  }
  const MusicGetter = (Mood)=>{
    if(Mood !== null && hide ==='no'){
      return(

      <MoodMediaSlide Mood={Mood} mediaType={tmdbConfigs.mediaType.music} mediaCategory={tmdbConfigs.mediaCategory.popular}>
        </MoodMediaSlide>




        );
    }else{
      return (null)
    }

}

  return (
    <>
      <center>
        <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
          <Container header="موودت تاقی کەرەوە!">
          </Container>

        </Box>

        <div className="webcam-container">
          <div className="webcam-img"  >
            {image == '' ? <Webcam style={{ border: '2px solid lightgreen', borderRadius: '1000px' }}
              audio={false}
              height={420}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={720}
              videoConstraints={videoConstraints}
            /> : <img src={image} width={720} height={420} />}
          </div>
          <div>
            {image != '' ?
              <Button onClick={(e) => {
                e.preventDefault();
                setImage('')
                window.location.reload(false);

              }}
                className="webcam-btn">
                Retake Image</Button> :
              <Button style={{}} onClick={(e) => {
                e.preventDefault();
                capture();


              }}
                className="webcam-btn">Capture</Button>
            }


<Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header={"بۆ ئەم موودە " + Mood + " ئەمانە باشە"}>
          <h1 style={{color:'rgb(9, 255, 105)'}}>Movies</h1>
        {MovieGetter(Mood)}
          <h1 style={{color:'rgb(9, 255, 105)'}}>Musics</h1>
        {MusicGetter(Mood)}

        </Container>



      </Box>



          </div>
        </div>
      </center>
    </>
  );


};

export default WebcamCapture