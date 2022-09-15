import React from "react";
import "antd/dist/antd.css";
import './Events.css'
import { Layout, Menu, Calendar } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import Navigation from "./Navigation";
import Logo from "../assets/Logo";
import Form from "./Form";
import DisplayEvents from "./DisplayEvents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Events = () => {
  return (
    <>
      <Layout hasSider>
        {/* <div className="logo-section">
          <Logo />
        </div> */}
        <Sider
          width={80}
          style={{backgroundColor:'#C9E2FF'}}
          breakpoint="md"
          collapsedWidth="0"
          zeroWidthTriggerStyle={{marginTop:0}}
          onCollapse={(collapsed, type) => {
        
            console.log('This was pressed: '+collapsed, type);
          }}
        >
          <Navigation />
        </Sider>

        <Content>
          <BrowserRouter>
            <Routes>
              <Route path="Events/DisplayEvents" element={<DisplayEvents />} />
              <Route path="Events/Form" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </Content>
      </Layout>
    </>
  );
};

export default Events;
