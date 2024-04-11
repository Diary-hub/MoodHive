import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    
    display: "سەرەتا",
    path: "/",
    
    state: "home"
  },
  {
    display: "فیلمەکان",
    path: "/movie",
   
    state: "movie"
  },
  {
    display: "موود",
    path: "/mood",
    
    state: "mood"
  },
  
  {
    display: "موزیک",
    path: "/tv",
    
    state: "tv"
  },
  {
    display: "گەڕان",
    path: "/search",
   
    state: "search"
  }
];

const user = [
  
  
  
];

const menuConfigs = { main, user };

export default menuConfigs;