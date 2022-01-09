import React, { FC, useMemo } from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { useEvents, Weather, WeatherNames } from "../events";
import { renderEvents, useWeek } from ".";
import WeatherIcons from "../events/Weather";
import ordinal from "ordinal";

const theYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Empty: FC = () => useMemo(() => <div className="slot-empty">No Events</div>, []);
const Icon: FC<{ weather: Weather }> = ({ weather }) => {
  const Elem = WeatherIcons[weather];
  return <Elem />;
};

const Afternoon: FC = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { afternoon } = getEvents(selected as Date);
  return useMemo(
    () => (
      <Stack>
        <div className="slot-title">
          <span className="slot-date">Afternoon</span>
        </div>
        {!afternoon || !afternoon.events ? <Empty /> : renderEvents(afternoon.events)}
      </Stack>
    ),
    [afternoon]
  );
};
const Evening: FC = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { evening } = getEvents(selected as Date);
  return useMemo(
    () => (
      <Stack>
        <div className="slot-title">
          {typeof evening?.weather == "number" && (
            <span className="slot-weather">
              <Icon weather={evening.weather} />
            </span>
          )}
          <span className="slot-date">Evening</span>
        </div>
        {!evening || !evening.events ? <Empty /> : renderEvents(evening.events)}
      </Stack>
    ),
    [evening]
  );
};
const Night: FC = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { night } = getEvents(selected as Date);
  return useMemo(() => {
    return (
      <Stack>
        <div className="slot-title">
          {typeof night?.weather == "number" && (
            <span className="slot-weather">
              <Icon weather={night.weather} />
            </span>
          )}
          <span className="slot-date">Night</span>
        </div>
        {!night || !night.events ? <Empty /> : ""}
      </Stack>
    );
  }, [night]);
};

export const WeekDay: FC = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  return useMemo(() => {
    if (!selected) return null;
    const { afternoon, evening, night } = getEvents(selected);
    if (!afternoon && !evening && !night) return null;

    return (
      <>
        <Row className="day-title">
          <Col className="title">
            {theYear[selected.getMonth()]} {ordinal(selected.getDate())}
          </Col>
        </Row>
        <Row className="day-info">
          <Col className="slot">
            <Afternoon />
          </Col>
          <Col className="slot">
            <Evening />
          </Col>
          <Col className="slot">
            <Night />
          </Col>
        </Row>
      </>
    );
  }, [selected, getEvents]);
};
