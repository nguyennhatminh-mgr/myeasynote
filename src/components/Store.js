import {firebaseConnect} from '../FirebaseConnect';
import * as redux from 'redux';

const noteInitialState = {
    isEdit:false,
    editData:{},
    isAdd:false,
    alertShow:false,
    alertContent:"",
    alertType:""
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            firebaseConnect.push(action.getItem);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_ADD_STATUS":
            return {...state,isAdd:!state.isAdd}
        case "GET_EDIT_DATA":
            return {...state,editData: action.editData}
        case "IMPLEMENT_EDIT":
            firebaseConnect.child(action.editData.id).update({
                notecontent:action.editData.notecontent,
                notetitle: action.editData.notetitle,
                noteimage: action.editData.noteimage
            })
            // console.log("Data that store is received : ");
            // console.log(action.editData);
            return {...state,editData: {}}
        case "IMPLEMENT_DELETE":
            firebaseConnect.child(action.deleteId).remove()
            return state
        case "ALERT_ON":
            return {...state,alertShow: true,alertContent:action.alertContent,alertType:action.alertType}
        case "ALERT_OFF":
            return {...state,alertShow: false}
        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(() => {
    // console.log(store.getState());
})
export default store;