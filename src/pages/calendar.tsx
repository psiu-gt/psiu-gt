import React from "react";
import Layout from "../components/layout";

const Calendar = () => {
  return (
    <Layout>
      <iframe
        title="Month Calendar"
        src="https://calendar.google.com/calendar/embed?src=fgko9s10au2o62cl898eldnk24%40group.calendar.google.com&ctz=America%2FNew_York"
        style={{ border: 0 }}
        width="800"
        height="600"
        // frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        title="Agenda Calendar"
        src="https://calendar.google.com/calendar/embed?src=fgko9s10au2o62cl898eldnk24%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
        style={{ border: 0 }}
        width="800"
        height="600"
        // frameborder="0"
        scrolling="no"
      ></iframe>
    </Layout>
  );
};

export default Calendar;
