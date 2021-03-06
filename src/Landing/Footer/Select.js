import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
`;

export default () => (
  <div>
    <Select>
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </Select>
  </div>
);
