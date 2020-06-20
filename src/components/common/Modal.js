import React from 'react';
import styled from 'styled-components';

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  width: 320px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 3rem;
  }
  
  .button {
    background: #48627b;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: #fff;
    outline: none;
    cursor: pointer;
  }
`;

const Modal = ({visible, title, description, onClose}) => {
    if (!visible) return null;

    return (
        <FullScreen onClick={onClose}>
            <ModalBlock>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="button" onClick={onClose}>닫기</button>
            </ModalBlock>
        </FullScreen>
    );
};

export default Modal;