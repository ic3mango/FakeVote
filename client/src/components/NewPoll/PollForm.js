import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import renderOptions from "./renderOptions";
import renderTitle from "./renderTitle";

const createSurvey = async (values, history) => {
  const res = await axios.post("/api/polls/add", values);

  await history.push("/polls/" + res._id);
  return;
}

const PollForm = ({ handleSubmit, submitting, reset, pristine, history }) => {
  return (
    <form onSubmit={handleSubmit(values => createSurvey(values, history))}>
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

const validate = values => {
  const errors = {};

  for (let key in values) {
    if (key !== "title" && !values[key]) {
      errors[key] = "Option cannot be empty";
    }

    if (!values.options || values.options.length < 2) {
      errors.title = "You need at least 2 options for your poll";
    }

    if (!values.title) {
      errors.title = "You must have a title for your poll";
    }
  }

  return errors;
};

export default reduxForm({
  form: "pollForm",
  validate
})(withRouter(PollForm));
