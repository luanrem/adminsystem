import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  .profile {
    padding: 25px 0 10px 0;
  }
  

  img {
    box-sizing: content-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid rgba(175,32,192,1);
  }

  .NameIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
