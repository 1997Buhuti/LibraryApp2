type addAuthorAction={
    type:"add";
    payload:IAuthor
}
type updateAuthorAction={
    type:"delete";
    payload:IAuthor
}
type deleteAuthorAction={
    type:"update";
    payload:IAuthor
}

export type Action=addAuthorAction| updateAuthorAction | deleteAuthorAction;
