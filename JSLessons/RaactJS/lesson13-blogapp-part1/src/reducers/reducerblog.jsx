// Reducer Start
const blogState = []
export const BlogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog]

    default:
      return state;
  }
};
// Reducer End