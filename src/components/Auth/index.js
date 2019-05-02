import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  position: relative;
  left: 90%;
  top: -43%;
`;

const AuthItems = styled.div`
  display: inline-block;
  text-spacing: 2px;
  color: #607d8b;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
`;

const auth = () => (
  <AuthContainer>
    <AuthItems>Login</AuthItems>
    <>/</>
    <AuthItems>Register</AuthItems>
  </AuthContainer>
);

export default auth;
