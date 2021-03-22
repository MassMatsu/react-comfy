import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log(action)
    return {...state, isSidebarOpen: true}
  }
  if (action.type === SIDEBAR_CLOSE) {
    console.log(action)
    return {...state, isSidebarOpen: false}
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    console.log(action)
    return {...state, products_loading: true}
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    console.log(action)
    const featured_products = action.payload.filter((item) => item.featured === true)
    console.log(featured_products)
    
    return {...state, products: action.payload, featured_products: featured_products, products_loading: false}
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    console.log(action)
    return {...state, products_error: true, products_loading: false}
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
