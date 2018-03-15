import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextArea = styled.textarea`
  border: none;
  display: block;
  font-family: Arial;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const FormField = styled.div`
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 5px 24px;
  width: 100%;
`;

const TextInput = ({ value, onChange, type, placeholder, columns, rows }) => (
  <FormField>
    <TextArea
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      cols={columns}
      rows={rows}
    />
  </FormField>
);

TextInput.propTypes = {
  columns: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TextInput;
