
export const handleInputChange = (context, event, formName) => {
  const form = context.state[formName];
  const formElement = {
    ...form.fields[event.target.name]
  };

  formElement.value = event.target.value;
  formElement.touched = true;
  form.fields[event.target.name] = formElement;
  form.errors[event.target.name] = handleErrors(form, formElement);
  form.valid = globalFormValidation(form);

  context.setState({
    [formName]: form
  });
}

const handleErrors = (form, formElement) => {
  const errors = [];

  formElement.validations.forEach(item => {
    if (item.password) {
        formElement.valid = item.rule(
          formElement.value, form.fields.password.value
        );
    } else {
      formElement.valid = item.rule(formElement.value);
    }

    if (!formElement.valid) {
      errors.push(item.message);
    }
  });
  return errors;
}

const globalFormValidation  = (form) => {
  let isValid = true;

  Object.keys(form.fields).forEach(item => {
    const field = form.fields[item];

    if (!field.valid) {
      isValid = false;
    }
  });
  return isValid;
}

export const required = {
    rule: (val) => {
      return val.trim() !== '';
    },
    message: 'Is required'
};

export const isEmail = {
  rule: (val) => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(val);
  },
  message: 'Is not an email'
};

export const passwordMatch = {
  password: true,
  rule: (val, password) => {
    return val === password;
  },
  message: 'Does not match the password'
}
