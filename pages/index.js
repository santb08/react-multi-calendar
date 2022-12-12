// @packages
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import moment from 'moment';
import styled from '@emotion/styled';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useEffect, useState } from 'react';

// @styles
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarsList from '../components/calendars-list';

const localizer = momentLocalizer(moment);

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  width: 100vw;
`

const Home = () => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const { data: events } = await axios.get('/api/events');
    setEvents(events)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <CalendarsList />
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
      />
    </Container>
  );
}

export default Home;