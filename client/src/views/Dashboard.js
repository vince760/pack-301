import React, { useEffect, useState } from "react";
import * as eventServices from "../service/eventService";
import EventCard from "./components/EventCard";

import { Row, Col } from "reactstrap";

function Dashboard() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    eventServices.retrieveEvents().then(async (res) => {
      let events = res.data.events;

      if (events.length === 1) {
        await eventServices.retrieveEventById(events[0].id).then((eventRes) => {
          events = [eventRes];
        });
      }
      setEvents(events);
    });
  }, []);

  return (
    <div className="content">
      <Row>
        <Col lg="12" sm="12">
          {events.length === 1 && <EventCard event={events[0]} />}
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
