//emailRegex = /^[^\s@]+@[^\s@]+$/;
// passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const emailValidator = email =>{
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email);
}


export const passwordValidator = password =>{
    const passwordRegex = /^[^\s@]+@[^\s@]+$/;
    return passwordRegex.test(password);    
}

