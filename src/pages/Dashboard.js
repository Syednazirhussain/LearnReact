// import $ from 'jquery';
import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    // $('.set-bg').each(function () {
    //   let bg = $(this).data('setbg');
    //   $(this).css('background-image', 'url(' + bg + ')');
    // });

  });

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Dashboard;