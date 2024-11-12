import React, { useState } from "react";
import { Card, CardHeader, Row, Col, CardBody, CardFooter, Button } from "reactstrap";

// Test Data
import useEventbrite from "react-eventbrite-popup-checkout";

export default function EventCard({ event }) {
  const handleOrderCompleted = React.useCallback((e) => {
    console.log("Order was completed successfully", e);
  }, []);

  const modalButtonCheckout = useEventbrite({
    eventId: event.id,
    modal: true,
    onOrderComplete: handleOrderCompleted
  });

  function formatDate(date) {
    const newDate = new Date(date);
    return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
  }

  return (
    <Card>
      <CardHeader>
        <Row>
          <Col sm="12">
            <div className="text-center">
              <h1>{event.name.text}</h1>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={12} className="text-center">
            <Row>
              <div className="col-sm-6 pb-3">
                <img src={event.logo.url} />
              </div>
              <div className="col-sm-6">
                <p className="p-3">{event.description.text}</p>
                {modalButtonCheckout && (
                  <Button color="success" id={modalButtonCheckout.id}>
                    Purchase Tickets
                  </Button>
                )}
              </div>
            </Row>
            <Row>
              <div className="col-md-4">
                <h2 style={{ textDecoration: "underline" }}>Dates</h2>

                <p>From: {formatDate(event.start.local)}</p>
                <p>To: {formatDate(event.end.local)}</p>
              </div>
              <div>
                <h2 style={{ textDecoration: "underline" }}>Cost: </h2>
                <h5 style={{ fontSize: "14px" }}>
                  Adults: ${event.ticket_availability.maximum_ticket_price.major_value}
                  <br />
                </h5>
                <h5 style={{ fontSize: "14px" }}>
                  Scouts: ${event.ticket_availability.minimum_ticket_price.major_value}
                  <br />
                </h5>
              </div>
              <div></div>
            </Row>
            {/* <div className="col-xl-4">
              <h2 style={{ textDecoration: "underline" }}>Dates</h2>

              <p>From: {formatDate(event.start.local)}</p>
              <p>To: {formatDate(event.end.local)}</p>
              <h2 style={{ textDecoration: "underline" }}>Cost: </h2>
              <h5 style={{ fontSize: "14px" }}>
                Adults: ${event.ticket_availability.maximum_ticket_price.major_value}
                <br />
              </h5>
              <h5 style={{ fontSize: "14px" }}>
                Scouts: ${event.ticket_availability.minimum_ticket_price.major_value}
                <br />
              </h5>
            </div> */}
          </Col>
          {/* <Col>
            <Row>
              <Col md={6}>
                <div>
                  <Row className="pl-3 py-2">
                    <div>
                      <span className="pr-4"># of Adults Attending:</span>
                      <input
                        onChange={(e) => {
                          handleAddPerson(parseInt(e.target.value), "adult");
                        }}
                        onInput={(e) => {
                          handleAddPerson(parseInt(e.target.value), "adult");
                        }}
                        style={{ width: "50px" }}
                        type="number"
                      ></input>
                    </div>
                  </Row>
                  <Row className="pl-3 py-2 pb-4">
                    <div>
                      <span className="pr-4"> # of Scouts Attending:</span>
                      <input
                        onInput={(e) => {
                          handleAddPerson(parseInt(e.target.value), "scout");
                        }}
                        onChange={(e) => {
                          handleAddPerson(parseInt(e.target.value), "scout");
                        }}
                        style={{ width: "50px" }}
                        type="number"
                      ></input>
                    </div>
                  </Row>
                  <Col>
                    <h2 style={{ textDecoration: "underline" }}>{`Total Cost $${totalCost}`}</h2>
                  </Col>
                </div>
              </Col>
              <Col>
                <Row>
                  <Card>
                    <CardBody>
                      <Form className="form-horizontal">
                        <Row>
                          <Col>
                            <FormGroup>
                              <Input
                                onInput={(e) => {
                                  handleInputChange(e);
                                }}
                                id="ccName"
                                placeholder="Name on Card"
                                type="text"
                                onFocus={() => {
                                  setCvcFocus("name");
                                }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputMask
                                onFocus={() => {
                                  setCvcFocus("number");
                                }}
                                mask="9999-9999-9999-9999"
                                placeholder="Card Number"
                              >
                                {(inputProps) => (
                                  <Input
                                    onInput={(e) => {
                                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                      handleInputChange(e);
                                    }}
                                    id="ccNumber"
                                    {...inputProps}
                                    type="text"
                                  />
                                )}
                              </InputMask>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <InputMask
                                onFocus={() => {
                                  setCvcFocus("number");
                                }}
                                mask="99/99"
                                placeholder="Expiration Date"
                              >
                                {(inputProps) => (
                                  <Input
                                    onInput={(e) => {
                                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                      handleInputChange(e);
                                    }}
                                    id="ccExpiry"
                                    {...inputProps}
                                    type="text"
                                  />
                                )}
                              </InputMask>
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Input
                                onInput={(e) => {
                                  if (e.target.value.length > 3) {
                                    e.target.value = e.target.value.slice(0, 3);
                                  }
                                  handleInputChange(e);
                                }}
                                id="ccCvc"
                                placeholder="CVV"
                                type="number"
                                autoComplete="off"
                                onFocus={() => {
                                  setCvcFocus("cvc");
                                }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>

                      <Cards
                        number={ccNumber}
                        expiry={ccExpiry}
                        cvc={ccCvc}
                        name={ccName}
                        focused={cvcFocus}
                      />
                    </CardBody>
                    <CardFooter>
                      <Row>
                        <Col />
                        <Col>
                          <Button
                            onMouseEnter={() => setCvcFocus("name")}
                            className="btn-round"
                            color="success"
                            type="submit"
                          >
                            Pay Now
                          </Button>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </Row>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </CardBody>
      <CardFooter>
        {/* <hr /> */}
        {/* <Row>
          <Col sm="7">
            <div className="footer-title"></div>
          </Col>
          <Col sm="5">
            <div className="pull-right">
              <Button className="btn-round btn-icon" color="success" size="sm">
                <i className="nc-icon nc-simple-add" />
              </Button>
            </div>
          </Col>
        </Row> */}
      </CardFooter>
    </Card>
  );
}
