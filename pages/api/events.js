import axios from "axios";

const ENDPOINT_CALENDARS = `${process.env.API_BASE_URL}/calendars`

const handler = async (_, res) => {
  const { data } = await axios.get(ENDPOINT_CALENDARS);
  const events = data.calendars.map(item => ({
    title: item.name,
    start: item.start.dateTime,
    end: item.end.dateTime
  }));

  res.send(events);
};

export default handler;
