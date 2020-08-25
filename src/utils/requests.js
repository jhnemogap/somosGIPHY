export const getDataCallBack = function (URL, callBack) {
  const data = fetch(URL);
  data
    .then((res) => res.json())
    .then((res2) => {
      callBack(res2);
    })
    .catch((err) => console.error(err));
};

export default {};
