import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const JoinForm = () => {
  //화면 이동
  const history = useHistory();

  //회원가입을 위한 useState
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    userid: "",
    email: "",
  });

  const changeValue = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const join = (e) => {
    e.preventDefault();
    let data = {
      username: userData.username,
      password: userData.password,
      id: userData.userid,
      email: userData.email,
    };
    console.log(data);
    fetch("http://localhost:8080/api/userJoin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 200) {
          alert("회원가입이 정상적으로 완료되었습니다");
          history.push("/");
        } else {
          alert("회원가입에 실패하었습니다");
          console.log(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <StyledContainer>
        <Form onSubmit={join} style={{ width: "300px" }}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={changeValue}
              name="username"
            />
            <Form.Group className="mb-3" controlId="formBasicUserId">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter userId"
                onChange={changeValue}
                name="userid"
              />
            </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control type="password" placeholder="Enter Password Check" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control
              type="test"
              placeholder="Enter Email"
              onChange={changeValue}
              name="email"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            회원가입
          </Button>{" "}
        </Form>
      </StyledContainer>
    </div>
  );
};

export default JoinForm;
