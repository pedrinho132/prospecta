const INITIAL_STATE = {
    endereco:'',
    
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
                case 'input_endereco':
                 return {...state, endereco: action.payload };        
    }
    return state

}