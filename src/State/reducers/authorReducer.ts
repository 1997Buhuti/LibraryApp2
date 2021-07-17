import {Action} from "../actions";
import {ActionTypes} from "../action-types";

const initState:IAuthor[]=[];

const reducer=(state:IAuthor[]=initState,action:Action)=>{

    switch (action.type){
        case ActionTypes.CREATE:
            return null;
        case ActionTypes.UPDATE:
            return null;
        case ActionTypes.DELETE:
            return null;
        default:
            return state;
    }
}
export default reducer;