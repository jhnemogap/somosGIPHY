const initialState = {
  heightImgGrid: "320px",
  limitGifsRequest: 16,
  searchString: "",
  searchResults: [],
};

const reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SET_SEARCH_STRING": {
      return {
        ...state,
        searchString: action.payload.searchString,
      };
    }

    case "SET_SEARCH_RESULTS": {
      return {
        ...state,
        searchResults: action.payload.searchResults,
      };
    }

    default:
      return state;
  }
};

export default reducers;
