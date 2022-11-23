// Reducer Start
const blogState = []
export const BlogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog]
    case "EDIT_BLOG":
      return state.map((b)=>{
        if (b.id === action.id) {
          return {
            ...b,
            ...action.update
          }
        }else{
          return b
        }
      })
    default:
      return state;
  }
};
// Reducer End