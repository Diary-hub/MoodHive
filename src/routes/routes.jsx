import HomePage from "../pages/HomePage";
import Mood from "../pages/MoodDetector";
import Movies from "../pages/Movies";
import Music from "../pages/Music";

import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import MediaItem from "../components/common/MediaItem";

export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: () => "/search",
  person: (id) => `/person/${id}`,

};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },

  {
    path: "/search",
    element: <MediaSearch />,
    state: "search"
  },

  {
    path: "/:movie",
    element: <Movies />,
  },
  {
    path: "/tv",
    element: <Music />,
  },
  {
    path: "/mood",
    element: <Mood />
  },
  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetail />
  }
];

export default routes;