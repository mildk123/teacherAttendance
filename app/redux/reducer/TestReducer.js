const reducer = (state = {}, action) => {
    switch (action.type) {

        case 'TEST_CASE': {
            return {
                ...state,
            }
        }

        default: {
            return ``
        }
    }
}

export default reducer