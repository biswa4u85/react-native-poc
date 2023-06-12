const types = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    REMOVE_MESSAGE: 'REMOVE_MESSAGE',
};

export const actions = {
    addMessage: (msg, key) => {
        return { type: types.ADD_MESSAGE, payload: { msg } };
    },
    removeMessage: (key) => {
        return { type: types.REMOVE_MESSAGE, payload: { key } };
    },
};

const initialState = {
    list: []
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { list } = state;

    switch (type) {
        case types.ADD_MESSAGE: {
            return {
                ...state,
                list: [payload, ...list],
            };
        }
        case types.REMOVE_MESSAGE: {
            let newItem = []
            for (let k in list) {
                if (k != payload.key) {
                    newItem.push(list[k])
                }
            }
            return {
                ...state,
                list: newItem

            };
        }
        default: {
            return state;
        }
    }
};