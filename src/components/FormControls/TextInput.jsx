import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: none;
  display: block;
  font-size: 1rem;
  height: 30px;
  outline: none;
  width: 100%;
`;

const FormField = styled.div`
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 5px 24px;
  width: 100%;
`;

const TextInput = ({ value, onChange, type, placeholder }) => (
  <FormField>
    <Input value={value} onChange={onChange} type={type} placeholder={placeholder} />
  </FormField>
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextInput;
