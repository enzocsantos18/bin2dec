import styled from 'styled-components';

export const Container = styled.div`
  background: #ffff;
  padding: 20px;
  /* box-shadow: 0px 0px 5px 3px rgba(219, 219, 219, 0.35); */
  height: 300px;
  width: 100%;
  max-width: 480px;
  border-radius: 4px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  h1 {
    color: #3d3d3d;
    font-size: 26px;
    margin-bottom: 10px;
  }

  p {
    color: #858585;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      height: 56px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 5px;
      background: #85858530;

      font-size: 16px;
      padding-left: 15px;
    }

    button {
      height: 56px;
      border-radius: 4px;
      border: 0;
      background: #5a33c8;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }

    span {
      color: #ed5045;
      margin-bottom: 10px;
    }
  }
`;
