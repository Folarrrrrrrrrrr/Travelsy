export default (state, action) => {
    switch (action.type) {
      case 'ADD_EXPERIENCE':
        return {
          ...state,
          experiences: [...state.experiences, action.payload],
        };
      default:
        return state;
    }
  };
  