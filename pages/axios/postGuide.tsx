import axios from "axios";

export const postGuide = async (guide: any) => {
  try {
    const { data } = await axios.post(`/api/guide`, {
      ...guide,
    });

    return data;
  } catch (err) {
    console.log({ err });
  }
};
