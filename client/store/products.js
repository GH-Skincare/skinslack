// import axios from 'axios'

// const GET_PRODUCTS = "GET_PRODUCTS"

// const getProducts = products => ({
//   type: GET_PRODUCTS,
//   products
// })

// export const allProducts = () => async dispatch => {
//   try {
//     const { data } = await axios.get('/products')
//     dispatch(getProducts(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// const initialState = []

// export default function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_PRODUCTS:
//       return action.products
//     default: return state
//   }
// }
