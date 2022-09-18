const validate = (inputString = '', regexpType = '') => {
    const roles = {
      visa: /^4(\d{12}|\d{15})$/,
      ip: /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/,
      mac: /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/,
    };
    const pattern = roles[`${regexpType}`];
    return pattern.test(inputString);
};

export default validate;
