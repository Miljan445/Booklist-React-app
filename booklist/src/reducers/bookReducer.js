const initialState = {
    books:[
        {
            title:"Book 1",author:"Jon",id:1
        },
        {
            title:"Book 2",author:"Jane",id:2
        },
        {
            title:"Book 3",author:"Nicholas",id:3
        }
    ]
}



export const BookReducer = (state=initialState,action)=>{
    if(action.type==="DELETE_BOOK"){
        const newArr = state.books.filter((book)=>{
            if(book.id != action.id){
                return true
            }
        })
        return{
            books:newArr
        }
    }
    else if(action.type === "ADD_BOOK"){
        return{
            ...state,
            books:[...state.books,action.book]
        }
    }
    return state;
}