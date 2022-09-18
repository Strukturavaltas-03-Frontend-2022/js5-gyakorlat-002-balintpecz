const validateVisaCardNumber = (visa = "") => {
    const pattern = /^4(\d{12}|\d{15})$/;
    return pattern.test(visa);
};

export default validateVisaCardNumber;
