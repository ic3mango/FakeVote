import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import renderOptions from "./renderOptions";
import renderTitle from "./renderTitle";


const PollForm = ({ handleSubmit, submitting, reset, pristine, history, createPoll }) => {
  createPoll = (values) => {
    axios.post('/api/polls/add', values)
      .then(res => history.push(`/userpolls`));
  }

  return (
    <form onSubmit={handleSubmit(values => createPoll(values))}>
      <Field
        name="title"
        component={renderTitle}
        type="text"
        label="Poll Title"
      />
      <FieldArray name="options" component={renderOptions} />
      <button
        type="button"
        disabled={pristine || submitting}
        onClick={reset}
        className="btn-flat red lighten-2 left white-text"
      >
        Reset Form
      </button>

      <button
        type="submit"
        className="teal btn-flat right white-text"
        disabled={submitting}
      >
        Submit
        <i className="material-icons right">done</i>
      </button>
    </form>
  );
};

const hasDuplicates = (array) => {
  const valuesSoFar = Object.create(null);
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value in valuesSoFar) {
      return true;
    }

    if (value) {
      valuesSoFar[value] = true
    }
  }
  return false;
}

const validate = values => {
  const errors = {};

  if (!values.options || values.options.length < 2) {
    errors.title = "You need at least 2 options for your poll";
  } else {
    const optionsArrayErrors = []
    for (let i = 0; i < values.options.length; i++) {
      if (!values.options[i]) {
        optionsArrayErrors[i] = "Option field cannot be empty";
      }
    }

    if (values.options.length > 8) {
      errors.title = "Maximum 8 options allowed";
    }

    if (hasDuplicates(values.options)) {
      errors.title = "You cannot have duplicate options";
    }

    if(optionsArrayErrors.length) {
      errors.options = optionsArrayErrors;
    }
  }

  if (!values.title) {
    errors.title = "You must have a title for your poll";
  }

  return errors;
};

export default withRouter(reduxForm({
  form: "pollForm",
  validate
})((connect(null, actions)(PollForm))));
