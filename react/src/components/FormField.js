import React from 'react';

const FormField = props => {
  return(
    <label onChange={props.handleChange}>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.value}
      />
    </label>
  )
}

export default FormField;
