const typeSetSearchString = "SET_SEARCH_STRING";
export const setSearchString = (payload) => ({
  type: typeSetSearchString,
  payload,
});

const typeSetSearchResults = "SET_SEARCH_RESULTS";
export const setSearchResults = (payload) => ({
  type: typeSetSearchResults,
  payload,
});

const typeAppendSearchResults = "APPEND_SEARCH_RESULTS";
export const appendSearchResults = (payload) => ({
  type: typeAppendSearchResults,
  payload,
});

export default {
  typeSetSearchString,
  typeSetSearchResults,
  typeAppendSearchResults,
};
