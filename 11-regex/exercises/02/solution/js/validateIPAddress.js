const validateIPAddress = (adress = "") => {
    const pattern =/^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/;
    return pattern.test(adress);
  };

export default validateIPAddress;
