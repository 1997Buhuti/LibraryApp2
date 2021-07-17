import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const addAuthor=(newAuthor:IAuthor)=>{
    return (dispatch:Dispatch<Action>)=>({
        type:ActionTypes.CREATE,
        payload: newAuthor
    })
}

export const deleteAuthor=(indexToDelete:number)=>{
    return (dispatch:Dispatch<Action>)=>({
        type:ActionTypes.DELETE,
        payload: indexToDelete
    })
}

export const updateAuthor=(indexToDelete:IAuthor)=>{
    return (dispatch:Dispatch<Action>)=>({
        type:ActionTypes.DELETE,
        payload: indexToDelete
    })
}