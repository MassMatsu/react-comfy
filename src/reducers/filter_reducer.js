import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {

  if (action.type === LOAD_PRODUCTS) {
    console.log(action);
    return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] }; // use copy of payload not to filter original array!!
  }

  
  return state
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
