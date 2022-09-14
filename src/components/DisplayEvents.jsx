import React from "react";
import { Calendar, Collapse } from "antd";

import "antd/dist/antd.css";
import "./DisplayEvent.css";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DisplayEvents = () => {
  return (
    <div className="Events">
      {/* Calendar + Events */}

      <div className="upcoming-events">
        {/* Just the Events */}
        <h2>Upcoming Events</h2>
        <p>Don't miss scheduled events</p>
        <Collapse style={{ width: "500px" }} defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>

      <Calendar className="calender-inner" />
    </div>
  );
};

export default DisplayEvents;
