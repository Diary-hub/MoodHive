import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const mediaEndpoints = {
  list: ({ mediaType }) => `${mediaType}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`
};

const mediaApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.list({ mediaType })
      );
      return { response };
    } catch (err) { return { err }; }
  },
  getDetail: async ({ mediaType, mediaId }) => {
    try {
      const response = await privateClient.get(
        mediaEndpoints.detail({ mediaType, mediaId })
      );

      return { response };
    } catch (err) { return { err }; }
  },
  search: async ({ mediaType, query, page }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.search({ mediaType, query, page })
      );

      return { response };
    } catch (err) { return { err }; }
  }
};

export default mediaApi;