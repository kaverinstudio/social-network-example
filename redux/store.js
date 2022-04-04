import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {

        profilePage: {
            post: [
                { id: 1, message: 'Hi, i am first', likesCount: 0 },
                { id: 2, message: 'Hi i am two', likesCount: 5 },
                { id: 3, message: 'Hi i am three', likesCount: 15 }
            ],
            newPostText: 'kaverinstudio'
        },
        dialogsPage: {
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
            ],
            newDialogText: ''
        }
    },
    _callSubscriber() {
        console.log('Change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}

export default store;