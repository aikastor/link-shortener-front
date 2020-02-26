import axiosApi from "../../axiosApi";

export const SHORTEN_LINK_REQUEST = 'SHORTEN_LINK_REQUEST';
export const SHORTEN_LINK_SUCCESS = 'SHORTEN_LINK_SUCCESS';

export const shortenLinkRequest = () => ({type: SHORTEN_LINK_REQUEST});
export const shortenLinkSuccess = (link) => ({type: SHORTEN_LINK_SUCCESS,link});

export const shortenLink = (link) => {
  return async (dispatch)   => {
    try {
      dispatch(shortenLinkRequest());
      const response = await axiosApi.post('/links', link);
      dispatch(shortenLinkSuccess(response.data.generatedLink));
    } catch (e){
      console.error(e)
    }
  }
};