export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

function increment () {
  return { type: INCREMENT_COUNT };
}

function decrement () {
  return { type: DECREMENT_COUNT };
}

export const actions = {
  increment,
  decrement
}

export const defaultState = {
  count: 0
}

export default function counterReducer (state = defaultState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count * 2 };

    case DECREMENT_COUNT:
      return { count: state.count - 1 };

    default:
      return state;
  }
}
