import React from 'react';
import CheckBox from 'components/checkBox';
import PropTypes from 'prop-types';


export default class CheckboxForm extends React.Component {
  constructor(props) {
    super(props);
    this.generateCheckboxes = this.generateCheckboxes.bind(this);
  }

  generateCheckboxes() {
    const checkboxes = [];
    this.props.checkboxes.forEach((elem) => {
      checkboxes.push(<label htmlFor={ elem.id } key={ elem.id } className='pure-checkbox'>
          <CheckBox id={ elem.id } />{elem.text}
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
