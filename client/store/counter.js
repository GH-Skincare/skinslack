const initialState = {
  count: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT': {
      if (state.count - 1 < 0) {
        return {count: 0}
      }
      return {
        count: state.count - 1
      }
    }
    default:
      return state
  }
}
