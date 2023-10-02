const initialState = {
    likedItems: [],
  };

  // likedReducer.js
export const ADD_LIKED_SONG = "ADD_LIKED_SONG";
export const addLikedSong = (song) => ({
    type: ADD_LIKED_SONG,
    payload: song,
  });

  
  const likedReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_LIKED_ITEM':
        return {
          ...state,
          likedItems: [...state.likedItems, action.payload],
        };
      case 'REMOVE_LIKED_ITEM':
        return {
          ...state,
          likedItems: state.likedItems.filter(item => item !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default likedReducer;
  