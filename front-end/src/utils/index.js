export const getValue = (object, key, type) => {
  if (object && object !== null) {
    const value = object[key];
    if (value && value !== null && value !== "") {
      if (type === "boolean") {
        return value === true || parseInt(value) === 1;
      } else if (type === "date") {
        return moment(value).utc().format("YYYY-MM-DD");
      }
      return value;
    }
  }
  if (type === "boolean") return false;
  return "";
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePhoneNumber = (input_str) => {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(input_str);
};
