import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from '../src/chapter_01/Library';
import Clock from '../src/chapter_02/Clock';
import CommnetList from '../src/chapter_03/CommentList';
import NotificationList from './chapter_04/NotificationList';
import Accomodate from './chapter_06/Accommodate';
import ConfirmButton from './chapter_07/ConfirmButton';
import LandingPage from './chapter_08/LandingPage';
import Attendance from './chapter_09/AtttendanceBook';
import SignUp from './chapter_10/SignUp';
import Calculator from './chpater_11/Calc';
import ProfileCard from './chapter_12/ProfileCard';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);*/

/*
setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);*/

/*
ReactDOM.render(
  <React.StrictMode>
    <CommnetList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <Accomodate />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
