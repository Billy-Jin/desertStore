import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  /* background: #4679bd; */
  justify-content: center;
`;

const LoginForm = () => {
  return (
    <div className="container">
      <StyledContainer>
        <Form onSubmit={{}} style={{ width: "300px" }}>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Id"
              onChange={{}}
              name="id"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={{}}
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            로그인
          </Button>{" "}
          <Link to="/joinForm">
            <Button variant="info" type="submit" style={{ color: "white" }}>
              회원가입
            </Button>
          </Link>
        </Form>
      </StyledContainer>
    </div>
  );
};

export default LoginForm;
