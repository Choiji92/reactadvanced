import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = ({ is_login }) => {
  const user = useSelector((state) => state.user.currentuser);
  const navigate = useNavigate();
  return (
    <>
      <IoHomeSharp
        style={{
          color: "#3399ff",
          fontSize: "xx-large",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => navigate("/")}
      />
      {!is_login ? (
        <Button>
          <button onClick={() => navigate("/login")}>로그인</button>
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </Button>
      ) : (
        <Button>
          <div>{user}</div>
          <button
            onClick={() => {
              signOut(auth);
            }}
          >
            로그아웃
          </button>
        </Button>
      )}
    </>
  );
};
const Button = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    margin-left: 20px;
    width: 30%;
    height: 30px;
    background-color: #3399ff;
    color: white;
    border: none;
  }
`;
export default Header;
