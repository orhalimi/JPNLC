import React from 'react';
import CheckBox from 'components/checkBox';
import PropTypes from 'prop-types';


export default class CheckboxForm extends React.Component {
  constructor(props) {
    super(props);

    this.generateCheckboxes = this.generateCheckboxes.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const id = event.target.id.substring(0, event.target.id.indexOf('_'));;
    this.props.selectedCheckboxesSet.has(id) ? this.props.selectedCheckboxesSet.delete(id): this.props.selectedCheckboxesSet.add(id);
    console.log(this.props.selectedCheckboxesSet);
  }

  generateCheckboxes() {
    const checkboxes = [];
    this.props.checkboxes.forEach((elem) => {
      checkboxes.push(
        <label htmlFor={ elem.id + '_' + this.props.title } key={ elem.id } className='pure-checkbox'>
          <CheckBox id={ elem.id + '_' + this.props.title } onChange={ this.onChangeHandler } />{elem.text}
        </label>,
      );
    });
    return checkboxes;
  }

  render() {
    return (
      <form className={ this.props.className }>
        <h3>{this.props.title}</h3>
        {this.generateCheckboxes()}
      </form>
    );
  }
}

CheckboxForm.propTypes = {
  title: PropTypes.string.isRequired,
  checkboxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
