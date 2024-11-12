/*!

=========================================================
* Paper Dashboard PRO React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
import * as eventServices from "../service/eventService";
import EventCard from "./components/EventCard";
// reactstrap components
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
