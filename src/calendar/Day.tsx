import React, { FC, useMemo } from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { SpecialWeather, useEvents, Weather, WeatherIcons, ToolTip } from "../events";
import { renderEvents, useWeek } from ".";
import ordinal from "ordinal";
import { FaAsterisk } from "react-icons/fa";
import { toCamel } from "../pages";

const theYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Empty: FC = () => useMemo(() => <div className="slot-empty">No Events</div>, []);
const Icon: FC<{ weather: Weather }> = ({ weather }) => {
  const Elem = WeatherIcons[weather];
  return <Elem />;
};

const Timeslot: FC<{ time: string; weather?: Weather; special?: SpecialWeather[] }> = ({ time, weather, special }) =>
  useMemo(
    () => (
      <div className="slot-title">
        {typeof weather == "number" ? (
          <div className="slot-weather">
            <Icon weather={weather} />
          </div>
        ) : (
          <div className="slot-weather slot-hidden"></div>
        )}
        <span className="slot-date">{time}</span>
        {!!special && special.length > 0 ? (
          <div className="slot-special">
            <ToolTip content={special.map((el) => toCamel(el)).join(", ")}>
              <span>
                <FaAsterisk />
              </span>
            </ToolTip>
          </div>
        ) : (
          <div className="slot-special slot-hidden"></div>
        )}
      </div>
    ),
    [special, time, weather]
  );

const Afternoon: FC = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { afternoon } = getEvents(selected as Date);
  return useMemo(
    () => (
      <Stack>
        <Timeslot time="Morning" />
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
  const events = evening?.events;
  const weather = evening?.weather;
  const special = evening?.special;
  return useMemo(
    () => (
      <Stack>
        <Timeslot time="Afternoon" weather={weather} special={special} />
        {!events ? <Empty /> : renderEvents(events)}
      </Stack>
    ),
    [events, special, weather]
  );
};
const Night: FC = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { night } = getEvents(selected as Date);
  const events = night?.events;
  const weather = night?.weather;
  const special = night?.special;
  return useMemo(() => {
    return (
      <Stack>
        <Timeslot time="Evening" weather={weather} special={special} />
        {!!events ? "There are no evening events yet silly" : <Empty />}
      </Stack>
    );
  }, [events, special, weather]);
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
