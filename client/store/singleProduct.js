import axios from 'axios'

const SET_PRODUCT = 'SET_PRODUCT'

const setProduct = productId => ({
  type: SET_PRODUCT,
  productId
})

export const fetchProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/singleproduct/${id}`)
    dispatch(setProduct(data))
  } catch (error) {
    console.error(`Error fetching product from API.`)
  }
}

const initialState = {}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.productId
    default:
      return state
  }
}

// Unsure if the code below is right

// const initialState = {
//   product: {}
// }

// export default function productReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_PRODUCT:
//       return { ...state, product: action.productId }
//     default:
//       return state
//   }
// }
