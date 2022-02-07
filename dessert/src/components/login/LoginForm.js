import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  /* background: #4679bd; */
  justify-content: center;
`;

const LoginForm = () => {
  //화면 이동
  const history = useHistory();

  //로그인을 위한 useState
  const [userData, setUserData] = useState({
    password: "",
    id: "",
  });

  const changeValue = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    let data = {
      password: userData.password,
      id: userData.id,
    };
    // console.log(data);
    fetch("http://localhost:8080/api/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          alert("로그인에 성공하셨습니다");
          history.push("/");
        } else {
          alert("비밀번호 또는 아이디를 확인해주세요");
          console.log(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <StyledContainer>
        <Form onSubmit={login} style={{ width: "300px" }}>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Id"
              onChange={changeValue}
              name="id"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={changeValue}
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
