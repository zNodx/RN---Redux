

export const editEmail = (email) => {
    return{
        type: 'editEmail',
        payload: {
           email:email
        }
    };
};


export const editSenha = (senha) =>{
    return{
        type: 'editSenha',
        payload:{
            senha:senha
        }
    };
};