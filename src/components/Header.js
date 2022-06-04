import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = ({ is_login }) => {
  const user = useSelector((state) => state.user.currentuser);
  console.log(user);
  const history = useHistory();
  return (
    <>
      <IoHomeSharp
        style={{
          color: "blue",
          fontSize: "xx-large",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => history.push("/")}
      />
      {!is_login ? (
        <Button>
          <button onClick={() => history.push("/login")}>로그인</button>
          <button onClick={() => history.push("/signup")}>회원가입</button>
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
    margin: 0 20px;
    width: 30%;
    height: 30px;
    background-color: #3399ff;
    color: white;
    border: none;
  }
`;
export default Header;