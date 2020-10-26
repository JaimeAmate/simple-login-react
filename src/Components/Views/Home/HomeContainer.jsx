import React, {useEffect, useState} from 'react';
import HomeView from "./HomeView";
import api from "../../../Services/api";

function handleLogOut() {
  sessionStorage.removeItem('token');
}

export default function HomeContainer(props) {
  return(
    <HomeView
      handleLogOut={handleLogOut}
    />
  )
}