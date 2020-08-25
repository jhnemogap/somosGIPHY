const initialState = {
  heightImgGrid: "240px",
  searchString: "",
  searchResults: [
    { img: "https://media.giphy.com/media/StT6DPSOmBIKQ/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
    { img: "https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
    { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
    { img: "https://media.giphy.com/media/StT6DPSOmBIKQ/giphy.gif" },
    { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
    { img: "https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
    { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
    { img: "https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
    { img: "https://media.giphy.com/media/StT6DPSOmBIKQ/giphy.gif" },
    { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
    { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
  ],
};

const reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SET_SEARCH_STRING": {
      return {
        ...state,
        searchString: action.payload.searchString,
      };
    }

    default:
      return state;
  }
};

export default reducers;
