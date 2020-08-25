export const transformDataGifs = function (info) {
  const images = info.data.map((img) => ({
    urls: {
      webp: `https://i.giphy.com/media/${img["id"]}/giphy.webp`,
      gif: `https://i.giphy.com/${img["id"]}.gif`,
    },
    title: img["title"],
  }));
  return images;
};

export default {};
