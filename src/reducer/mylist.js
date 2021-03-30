import Data from '../Data'

const mylist = [];
Object.keys(Data.mylist).forEach(key => mylist.push(Data.mylist[key]))
console.log(mylist)
const initialStage = mylist;
console.log(initialStage)


const reducer = (state= initialStage,action )=>{
    if(action.type==="removeList"){
        return state.filter(({id}) => id !== action.payload)
    }
    if(action.type === "addRec"){
        return [...state, action.payload]
    }
    return state;

}
export default reducer;