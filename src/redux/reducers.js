import actionType from "./actions";

const initialState = {
  heightImgGrid: "320px",
  limitGifsRequest: 16,
  searchString: "",
  searchResults: [],
};

const reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case actionType.typeSetSearchString: {
      return {
        ...state,
        searchString: action.payload.searchString,
      };
    }

    case actionType.typeSetSearchResults: {
      return {
        ...state,
        searchResults: action.payload.searchResults,
      };
    }

    case actionType.typeAppendSearchResults: {
      return {
        ...state,
        searchResults: state.searchResults.concat(action.payload.searchResults),
      };
    }

    default:
      return state;
  }
};

export default reducers;
