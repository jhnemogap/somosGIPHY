const initialState = {
  heightImgGrid: "160px",
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
    case "SEARCH_STRING_SET": {
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
