const INITIAL_STATE = {
  counter: 1,
};

export default function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      if (action.payload) {
        return {
          ...action.payload,
          initialized: true,
          rehydrated: true,
        };
      }
      return {
        ...state,
        initialized: true,
        rehydrated: true,
      };
    }

    case 'ADD_NUMBER': {
      return {
        ...state,
        counter: action.payload,
      };
    }

    default:
      return state;
  }
}
