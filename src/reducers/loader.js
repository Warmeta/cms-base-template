export default function(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_LOADER': return state + 1
    case 'DECREMENT_LOADER': return state - 1
    default: return state
  }
}
