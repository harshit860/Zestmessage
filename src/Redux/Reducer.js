let initialobj = {
        messages:[]
}

export default (state = initialobj, action) => {
    switch (action.type) {
        case 'create':
            return {
                ...state,
                messages:[...state.messages,action.val]
            }
        default :
        return state
    }
}