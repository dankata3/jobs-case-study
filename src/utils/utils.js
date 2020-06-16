export const mapObject = (obj, criteria) => {
  let objectMap = {};

  obj.forEach((prop) => (objectMap[prop.id] = prop[criteria]));

  return objectMap;
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  let error = null;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;

    if (!isValid) {
      error = 'Please enter a value!';

      return {
        value: isValid,
        error,
      };
    }
  }

  if (rules.maxLength) {
    isValid = value.length < 70 && isValid;

    if (!isValid) {
      error = 'Input value must be 70 letters or less!';

      return {
        value: isValid,
        error,
      };
    }
  }

  if (rules.english) {
    const regExp = /^[a-zA-Z]+$/;

    isValid = regExp.test(value) && isValid;

    if (!isValid) {
      error = 'Only english letters!';

      return {
        value: isValid,
        error,
      };
    }
  }
  return {
    value: isValid,
    error,
  };
};
