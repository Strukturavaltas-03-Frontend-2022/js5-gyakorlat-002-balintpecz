const validateMACAddress = (MACAddress) => {
    const pattern = /^(([A-F0-9]{2})-|:){5}([A-F0-9]{2})$/i;
    return pattern.test(MACAddress);
};

export default validateMACAddress;
