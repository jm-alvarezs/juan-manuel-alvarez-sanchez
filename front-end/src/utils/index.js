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
