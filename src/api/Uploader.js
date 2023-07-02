import axios from "axios";

export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  return axios({
    url: process.env.REACT_APP_CLOUDINARY_URL,
    method: "post",
    data: data,
  }).then((res) => {
    return res.data.url;
  });
}
