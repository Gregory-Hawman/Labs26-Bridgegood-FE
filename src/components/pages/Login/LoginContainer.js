import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { Row, Col, Divider } from 'antd';
import { config } from '../../../utils/oktaConfig';
import img from '../../../assets/images/logo.png';
import SignUp from '../../common/SignUp';
import Login from '../../common/Login';
import './Login.less';

const LoginContainer = () => {
  const location = useLocation();

  return (
    <div className="signUpBox">
      <section>
        <Login enabled={location.pathname === '/login'} />
      </section>
      <section>
        <SignUp enabled={location.pathname === '/signup'} />
      </section>
      {/* <section className="main-container">
        <div className="welcome-text"></div>
        <div id="sign-in-widget" />
        <Divider orientation="left"></Divider>
        <Row>
          <Col flex={1}>
            <Login enabled={true} />
          </Col>
          <Col flex={1}>
            <SignUp enabled={false} />
          </Col>
        </Row>
        <Divider orientation="left"></Divider>
      </section> */}
    </div>
  );
};

export default LoginContainer;
