import axios from 'axios'

const SET_PRODUCT = 'SET_PRODUCT'

const setProduct = productId => ({
  type: SET_PRODUCT,
  productId
})

export const fetchProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(setProduct(data))
  } catch (error) {
    console.error(`Error fetching product from API.`)
  }
}

// we'll need to double check the initial state and reducer here because i'm not sure if this is written correctly
const initialState = {
  product: {}
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {...state, product: action.productId}
    default:
      return state
  }
}
