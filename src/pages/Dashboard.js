import $ from 'jquery';
import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });

    $('.hero__categories__all').on('click', function(){
      $('.hero__categories ul').slideToggle(400);
  });

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