import axios from "axios";

export const getGuide = async () => {
  try {
    const { data } = await axios.get(`https://wundr-guide.vercel.app/api/guide`);
    return data;
  } catch (err) {
    console.log({ err });
  }
};
