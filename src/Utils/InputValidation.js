const rePassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const reEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const reUsername = /^[a-z0-9_-]{6,16}$/
const reName = /^\w+/;

export const isValidEmail = (inputValue) => reEmail.test(inputValue)
export const isValidPassword = (inputValue) => rePassword.test(inputValue)
export const isValidUsername = (inputValue) => reUsername.test(inputValue)
export const isValidName = (inputValue) => reName.test(inputValue)