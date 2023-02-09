import { BASE_URL } from "@/api";
import axios from "axios";

const search = async (req: any, res: any) => {
  const { search } = req.body;
  const url = `${BASE_URL}autocomplete?query=${search}`;
  try {
    const { data } = await axios.get(url);

    return res.json({ data });
  } catch (err: any) {
    console.log("error occor", err);
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default search;
