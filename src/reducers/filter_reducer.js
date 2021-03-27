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
    const allPrices = action.payload.map((p) => p.price)
    const maxPrice = Math.max(...allPrices) // spread operator to spread elements in an array
    const minPrice = Math.min(...allPrices)
    //console.log(maxPrice, minPrice)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {...state.filters, min_price: minPrice, max_price: maxPrice, price: maxPrice} // still need a copy of state.filters to overwrite the object
    }; // use copy of payload for each in order not to use the same place in memory!!
  }
  if (action.type === UPDATE_FILTERS) {
    console.log(action)
    return {...state, filters: {...state.filters, [action.payload.name]: action.payload.value}}
  }
  if (action.type === FILTER_PRODUCTS) {
    console.log(action)
    return {...state}
  }
  if (action.type === CLEAR_FILTERS) {
    console.log(action)
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    console.log(action);
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    console.log(action);
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    console.log(action);
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    console.log(action);
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }

  //return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
