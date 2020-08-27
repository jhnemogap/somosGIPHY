export const transformDataGifs = function (info) {
  const images = info.data.map((img) => {
    const propertyTitle = "title";
    const propertyUrlsWebp = `https://i.giphy.com/media/${img["id"]}/giphy.webp`;
    const propertyUrlsGif = `https://i.giphy.com/${img["id"]}.gif`;

    return {
      urls: {
        webp: propertyUrlsWebp,
        gif: propertyUrlsGif,
      },
      title: img[propertyTitle],
    };
  });
  return images;
};

export default {};
