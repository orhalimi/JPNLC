import React from 'react';
import CheckBox from './checkBox';


export default class CheckboxForm extends React.Component {

  generateCheckboxes() {
    let checkboxes = "";
    for (item of this.props.checkboxes) {
      checkboxes += 
      <label htmlFor={item.id}>
        <CheckBox />{item.text}
      </label> ;
    }
    return checkboxes;
  }

  render() {
    return (
        <form className='pure-form-stacked pure-u-1-8 conjuction-form'>
         {generateCheckboxes()}
        </form>
    );
  }
}
