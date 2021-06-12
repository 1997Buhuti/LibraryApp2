type IAuthor={
    name: string|null;
    id:  string;
}

type IBook={
    title:string|null;
    price:string;
    author?:string|null;
    id:string
}

type ReactSelectOption = {
    value: string
    label: string
}