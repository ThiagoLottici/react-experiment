const myApp = (state = {}, action) => {

    switch(action.type) {
        case 'ON_SUBMIT_TEXT':
            return [...state, {text: action.text}]
    }

    return state;
}

export default myApp