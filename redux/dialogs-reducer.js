const ADD_DIALOG = 'ADD-DIALOG';

let initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Help me" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" }
    ],

    dialogsData: [
        { id: 2, name: "Pasha" },
        { id: 1, name: "Andrey" },
        { id: 3, name: "Sonya" },
        { id: 4, name: "Natali" },
        { id: 5, name: "Diana" },
        { id: 6, name: "Masha" }
    ]
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = action.newDialogText;
            return {...state,
                messagesData: [...state.messagesData, { id: 7, message: newDialog }]
            }

        default:
            return state;
    }

}

export const addDialogCreator = (newDialogText) => ({ type: ADD_DIALOG, newDialogText });
export default dialogsReducer;