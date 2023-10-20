export const checkValidateData = (email , password) => {
    const isEmailVlaid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailVlaid){
        return"Email ID is Not Valid";
    }
    if(!isPasswordValid){
        return "Password is Not Valid";
    }
    return null;
}