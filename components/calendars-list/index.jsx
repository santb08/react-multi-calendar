// @packages
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const URL_TO_AUTH = `${process.env.API_BASE_URL}/auth/signin`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
`;

const List = styled.ul`
  list-style-type: none;
  width: 100%;

  padding: 0px 30px;

  &::after {
    text-decoration: none;
  }

  ul {
    padding: 0
  }
`;

const ListItem = ({ email, onDelete }) => (
  <ul>
    <Typography>
      {email}
    </Typography>
  </ul>
)

const CalendarsList = () => {
  const [calendars, setCalendars] = useState([]);

  const fetchCalendars = async () => {
    const { data: calendars } = await axios.get('/api/calendars');
    console.log(calendars);
    setCalendars(calendars);
  };

  useEffect(() => {
    fetchCalendars();
  }, []);

  const onDeleteCalendar = () => {
    // TODO: Implement
  };

  return (
    <Container>
      <Typography variant='h4' sx={{
        fontWeight: 'bold'
      }}>
        Registered Emails
      </Typography>
      <List>
        {calendars.map(calendar => (
          <ListItem
            email={calendar.email}
            key={calendar._id}
            onDelete={onDeleteCalendar}
          />
        ))}
      </List>

      <Button
        variant='contained'
        sx={{
          width: 'calc(100% - 50px)'
        }}
        href={URL_TO_AUTH}
        startIcon={
          <AddIcon />
        }
      >
        add new email
      </Button>
    </Container>
  );
};

export default CalendarsList;
