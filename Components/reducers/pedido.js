const INITIAL_STATE = {
    list:[]
}

export default (state = INITIAL_STATE, action) => {
    console.log(state.list)
    switch(action.type){
        case 'fetch_List':
         return {...state, list: action.payload };
    }

    return state
}