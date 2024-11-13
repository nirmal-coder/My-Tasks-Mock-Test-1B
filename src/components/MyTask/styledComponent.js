import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
`
export const FormContainer = styled.form`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #131213;
  h1 {
    color: #f3aa4e;
  }
`
export const InputContainer = styled.div`
  width: 90%;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 15px;
  label {
    color: #fff;
  }
  input {
    width: 100%;
    height: 40px;
    margin-top: 15px;
  }
`
export const SelectContainer = styled.div`
  width: 90%;
  height: 40px;
  border-radius: 4px;
  margin-top: 35px;
  label {
    color: #fff;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 40px;
  margin-top: 15px;
`
export const Button = styled.button`
  background-color: #f3aa4e;
  padding: 8px 15px;
  border-radius: 5px;
  border: 0px;
  color: #fff;
  margin-top: 100px;
  &:active {
    transform: scale(0.9);
  }
  cursor: pointer;
`
