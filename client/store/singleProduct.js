import axios from 'axios'

const SET_PRODUCT = 'SET_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

const setProduct = productId => ({
  type: SET_PRODUCT,
  productId
})

const updateProduct = id => ({
  type: UPDATE_PRODUCT,
  id
})

export const fetchSingleProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/singleproduct/${id}`)
    dispatch(setProduct(data))
  } catch (error) {
    console.log(`Error fetching product from API.`)
  }
}

export const updateSingleProduct = (id, product) => {
  return async dispatch => {
    try {
      await axios.put(`/api/singleproduct/${id}`, product)
      dispatch(updateProduct(product))

      const {data} = axios.get(`/api/singleproduct/${id}`)
      dispatch(setProduct(data))
    } catch (error) {
      console.log(`Error updating product`)
    }
  }
}

const initialState = {}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.productId
    case UPDATE_PRODUCT:
      return {...state, ...action.productId}
    default:
      return state
  }
}
