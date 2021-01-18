import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  id
})

export const fetchProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/allproducts')
    dispatch(setProducts(data))
  } catch (error) {
    console.log(`Error fetching products from our API :(`)
  }
}

export const createProduct = product => async dispatch => {
  try {
    await axios.post('/api/allproducts', product)
    const {data} = await axios.get('/api/allproducts')
    dispatch(addProduct(data))
  } catch (error) {
    console.log(`Ran into an error creating products :()`)
  }
}

export const removeProduct = id => async dispatch => {
  try {
    await axios.delete(`/api/allproducts/${id}`)
    dispatch(deleteProduct(id))
    const {data} = await axios.get(`/api/allproducts`)
    dispatch(setProducts(data))
  } catch (error) {
    console.log(`Oh noes, can't delete a product`)
  }
}

const initialState = []

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
    case ADD_PRODUCTS:
      return [...state, action.products]
    case REMOVE_PRODUCTS:
      return state.filter(product => {
        return product.id !== action.productId
      })
    default:
      return state
  }
}
