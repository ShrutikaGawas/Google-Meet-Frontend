import React from "react";
import { Calendar, Collapse } from "antd";
import Three_Dots from "../assets/Three_Dots";
import "antd/dist/antd.css";
import "./DisplayEvent.css";
import calendarlogo from "../assets/calendarlogo.svg";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const DisplayEvents = () => {
  
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div className="Events">
      {/* Calendar + Events */}

      <div className="upcoming-events">
        {/* Just the Events */}
        <div className="profile">
          <img src='https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80' />
          <div className="profile-details">
          <h4>Shrutika Gawas</h4>
          <p>Student</p>
          </div>
        </div>

        <h2>Upcoming Events</h2>
        <p>Don't miss scheduled events</p>
        <div className="scroll">
          <Collapse expandIconPosition="end" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right" className="collapse-menu">
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className="upcoming-events-1">
        <div className="calendar-header">
          <img src={calendarlogo} />
          <h3>Calendar</h3>
        </div>
        <hr />
        {/* <Calendar style={{borderRadius:5}} className="calendar-inner" /> */}
        {/* <Calendar fullscreen={false} onPanelChange={onPanelChange}  className="calendar-inner"/> */}
        <div className="site-calendar-demo-card">
          <Calendar
            fullscreen={false}
            onPanelChange={onPanelChange}
            className="calendar-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayEvents;

