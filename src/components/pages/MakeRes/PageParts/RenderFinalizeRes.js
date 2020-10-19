import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import DonationBox from '../../../common/DonationBox';

import { UPDATE_STEP } from '../../../../state/reducers/MakeResReducer';
import '../MakeRes.css';

export default function RenderFinalizeRes() {
  const dispatch = useDispatch();
  const { date, time_slot, duration, room, user } = useSelector(
    state => state.reservation
  );

  const prevStep = () => {
    dispatch({ type: UPDATE_STEP, payload: 1 });
  };

  const months = [
    { name: 'January', num: '01' },
    { name: 'February', num: '02' },
    { name: 'March', num: '03' },
    { name: 'April', num: '04' },
    { name: 'May', num: '05' },
    { name: 'June', num: '06' },
    { name: 'July', num: '07' },
    { name: 'August', num: '08' },
    { name: 'September', num: '09' },
    { name: 'October', num: '10' },
    { name: 'November', num: '11' },
    { name: 'December', num: '12' },
  ];

  const formattedDate = () => {
    var selectedDate = date;
    var pulledMonth = selectedDate.substr(5, 2);
    var pulledDay = selectedDate.substr(8, 2);
    var pulledYear = selectedDate.substr(0, 4);
    months.forEach(month => {
      if (pulledMonth === month.num) {
        pulledMonth = month.name;
      }
    });
    return pulledMonth + ' ' + pulledDay + ', ' + pulledYear;
  };

  const timeSlots = [
    { timeSlot: 10, duration: 2, timeWindow: '10:00AM - 12:00PM' },
    { timeSlot: 11, duration: 2, timeWindow: '11:00AM - 1:00PM' },
    { timeSlot: 12, duration: 2, timeWindow: '12:00PM - 2:00PM' },
    { timeSlot: 13, duration: 2, timeWindow: '1:00PM - 3:00PM' },
    { timeSlot: 14, duration: 2, timeWindow: '2:00PM - 4:00PM' },
    { timeSlot: 15, duration: 2, timeWindow: '3:00PM - 5:00PM' },
    { timeSlot: 16, duration: 2, timeWindow: '4:00PM - 6:00PM' },
    { timeSlot: 17, duration: 2, timeWindow: '5:00PM - 6:00PM' },

    { timeSlot: 10, duration: 4, timeWindow: '10:00AM - 2:00PM' },
    { timeSlot: 11, duration: 4, timeWindow: '11:00AM - 3:00PM' },
    { timeSlot: 12, duration: 4, timeWindow: '12:00PM - 4:00PM' },
    { timeSlot: 13, duration: 4, timeWindow: '1:00PM - 5:00PM' },
    { timeSlot: 14, duration: 4, timeWindow: '2:00PM - 6:00PM' },

    { timeSlot: 10, duration: 6, timeWindow: '10:00AM - 4:00PM' },
    { timeSlot: 11, duration: 6, timeWindow: '11:00AM - 5:00PM' },
    { timeSlot: 12, duration: 6, timeWindow: '12:00PM - 6:00PM' },
  ];

  const formattedTime = () => {
    var time_window = '';

    timeSlots.forEach(ts => {
      if (duration === ts.duration) {
        if (time_slot === ts.timeSlot) {
          time_window = ts.timeWindow;
        }
      }
    });
    return time_window;
  };

  return (
    <>
      <div className="finalize-box">
        <div className="reservation-details">
          <Row className="donation-details">
            <Col>
              <h1>
                Your donation helps keep <br />
                creativity diverse in Oakland
              </h1>
            </Col>
            <Col>
              <h2>
                BRIDGEGOOD is a 503(c) nonprofit <br />
                and is run 100% through donations
              </h2>
            </Col>
          </Row>
          <Row className="res-details">
            <Col span={6}>
              <p>Creative's Name</p>
            </Col>
            <Col span={6}>
              <p>Room</p>
            </Col>
            <Col span={6}>
              <p>Date</p>
            </Col>
            <Col span={6}>
              <p>Time</p>
            </Col>
          </Row>
          <Row className="user-res-info">
            <Col span={6}>
              <p>{user}</p>
            </Col>
            <Col span={6}>
              <p>{room}</p>
            </Col>
            <Col span={6}>
              <p>{formattedDate()}</p>
            </Col>
            <Col span={6}>
              <p>{formattedTime()}</p>
            </Col>
          </Row>
          <div className="edit-res" onClick={prevStep}>
            Edit my reservation
          </div>
        </div>
        <DonationBox />
      </div>
    </>
  );
}