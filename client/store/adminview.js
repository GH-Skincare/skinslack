import axios from 'axios'
import {setProducts} from './products'
import {setProduct} from './singleProduct'

const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  id
})

export const updateProduct = id => ({
  type: UPDATE_PRODUCT,
  id
})

export const createProduct = product => async dispatch => {
  try {
    await axios.post('/api/allproducts', product)
    const {data} = await axios.get('/api/allproducts')
    dispatch(setProducts(data))
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

export const updateSingleProduct = (id, product) => async dispatch => {
  try {
    await axios.put(`/api/singleproduct/${id}`, product)
    dispatch(updateProduct(product))

    const {data} = await axios.get(`/api/singleproduct/${id}`)
    dispatch(setProduct(data))
  } catch (error) {
    console.log(`Error updating product`)
  }
}

const initialState = {
  products: [],
  product: {}
}

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {...state, ...action.productId}
    case ADD_PRODUCT:
      return [...state, action.product]
    case DELETE_PRODUCT:
      return state.filter(product => {
        return product.id !== action.productId
      })
    default:
      return state
  }
}
