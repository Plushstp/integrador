export default function validateInputs(inputs){
    const errors={};
    if(!inputs.username || !/\S+@\S+\.\S+/.test(inputs.username) || inputs.username.length >=35) errors.username ='Campo Obligatorio! Ingresar mail hasta 35 caracteres.';
    if(!inputs.password || !/^(?=-*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(inputs.password)) errors.password = 'Contraseña debe contener entre 6 y 10 caracteres, y al menos un número.';
    return errors;
}