const INITIAL_STATE = {
    email:'',
    senha:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'input_EmailLogin':
            return {...state, email: action.email };

         case 'input_SenhaLogin':
         return {...state, senha: action.senha };
    }
    return state
}