import axios from "axios";

const ENDPOINT_CALENDARS_LIST = `${process.env.API_BASE_URL}/calendars/list`

const handler = async (_, res) => {
  const { data } = await axios.get(ENDPOINT_CALENDARS_LIST);
  console.log('data', data);
  res.send(data);
};

export default handler;
