import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: white;
  width: 100%;
  max-width: 480px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 2px rgba(219, 219, 219, 0.4);

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
      transition: 0.2s background;

      &:hover {
        background-color: #422399;
      }
    }

    span {
      color: #ed5045;
      margin-bottom: 10px;
    }
  }
`;
export const Conversion = styled.div`
  width: 100%;
  max-width: 480px;
  border-radius: 4px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  div {
    background-color: #dbddff;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #3d3d3d;
      margin-bottom: 0;
      font-size: 16px;
      font-weight: bold;
    }

    &:hover {
      background-color: #babeff;
      cursor: pointer;
    }
  }
`;
