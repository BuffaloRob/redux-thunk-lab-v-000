

const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATS':
      return action.cats
    case 'LOADING_CATS':
      return action.cats
  }
  return state;
};

export default catsReducer;