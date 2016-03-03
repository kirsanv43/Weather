import {
  SELECT_CITY
} from '../actions/types.js'

export default function select(state = {}, action) {
  switch (action.type) {
    case SELECT_CITY:
      {
        const {name,lat,lng} = action;
        return Object.assign({},{name,lat,lng});
        break;
      }
    default:
      {
        return state;
      }
  }
  return state;
}
