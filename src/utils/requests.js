export const getDataCallBack = function (URL, response) {
  fetch(URL)
    .then((res) => res.json())
    .then((res2) => {
      response(res2);
    })
    .catch((err) => console.error(err));
};

export default {};
