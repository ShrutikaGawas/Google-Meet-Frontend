import React from "react";
import "antd/dist/antd.css";

import { Layout, Menu, Calendar } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import Navigation from "./Navigation";
import Form from "./Form";
import DisplayEvents from "./DisplayEvents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Events = () => {
  return (
    <>
      <Layout hasSider>
        <Sider
          width={80}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
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
