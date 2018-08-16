const initialState = {
  state: 0
}

/* Actions */
const INCREMENT  = "INCREMENT";
const DECREMENT = "DECREMENT";


/* Action Creator */
export function increment(){
  return {
    type: 'INCREMENT'
  }
}
export function decrement() {
  return {
    type: 'DECREMENT'
  }
}

/* Reducers */
export default function reducer(state=initialState, action ) {
  switch (action.type) {
    case INCREMENT :
      return {
        ...state, count: state.count + 1
      }
    case DECREMENT :
      return {
        ...state, count: state.count - 1
      }
    default:
      return state;
  }
}

