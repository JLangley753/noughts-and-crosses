import styled from 'styled-components'

const SquareComponent = styled.div`
  border: 1px solid black;
  box-shadow: 3px 3px 1px 2px rgba(0,0,0,0.3);
  border-radius: 5px;
  cursor: pointer;
  height: 156px;
  width: 156px;
  font-size: 6em;
  margin: auto;
  text-align: center;
  vertical-align: center;
  line-height: 156px;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.03);
    transition: 0.3s ease;
  }
`;

export default SquareComponent;
