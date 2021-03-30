import Data from '../Data'

const recommendations = []
Object.keys(Data.recommendations).forEach(key => recommendations.push(Data.recommendations[key]))
const initialStage = recommendations;

const reducer = (state= initialStage,action )=>{
    if(action.type==="removeRec"){
        return state.filter(({id}) => id !== action.payload)
    }
    if(action.type === "addList"){
        return [...state, action.payload]
    }
    return state;
}
export default reducer;