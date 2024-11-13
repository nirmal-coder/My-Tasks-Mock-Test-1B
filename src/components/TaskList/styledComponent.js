import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  background-color: #000;
  min-height: 100vh;
  padding: 20px;
  h1 {
    color: #fff;
  }
  p {
    color: #fff;
  }
`
export const Tags = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`
export const TagButton = styled.button`
  background-color: ${props => (props.isSelect ? '#f3aa4e' : ' #000000')};
  color: #fff;
  border: 1px solid #f3aa4e;
  padding: 5px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
`
export const TasksList = styled.ul`
  padding-left: 0px;
  list-style: none;

  li {
    color: #fff;
    background-color: #1a171d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 16px;
  }
  p {
    font-weight: 600;
    font-size: 20px;
  }
`
export const TaskButton = styled.p`
  background-color: #f3aa4e;
  color: #1a171d;
  border: 1px solid #f3aa4e;
  padding: 5px 12px;
  border-radius: 9999px;
`
