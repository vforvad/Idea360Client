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
