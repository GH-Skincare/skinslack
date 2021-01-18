import axios from 'axios'

export const GOT_ORDER = 'GOT_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const GOT_INACTIVE_ORDERS = 'GOT_INACTIVE_ORDERS'

export const setOrder = order => ({
  type: GOT_ORDER,
  payload: order
})

export const setInactiveOrders = orders => ({
  type: GOT_INACTIVE_ORDERS,
  payload: orders
})

export const updateOrder = () => ({
  type: UPDATE_ORDER
})

export const fetchOrder = userId => async (dispatch, getState, {axios}) => {
  try {
    const {data} = await axios.get(`/api/orders/users/${userId}/type/active`)
    dispatch(setOrder(data))
  } catch (error) {
    console.log('oh no, error!')
  }
}

export const fetchInactiveOrders = userId => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.get(`/api/orders/users/${userId}/type/inactive`)
    dispatch(setInactiveOrders(data))
  } catch (error) {
    console.log('oh no, error!')
  }
}

export const completeOrder = orderId => async (dispatch, getState, {axios}) => {
  try {
    await axios.put(`/api/orders/${orderId}`, {isActive: false})
    dispatch(updateOrder())
  } catch (error) {
    console.log('oh no, error!')
  }
}

export const initialState = {
  activeOrder: {},
  inactiveOrders: []
}

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ORDER:
      let activeOrder
      if (action.payload.length === 0) {
        activeOrder = {}
      } else {
        activeOrder = action.payload[0]
      }
      return {...state, activeOrder: activeOrder}
    case UPDATE_ORDER:
      return {
        activeOrder: {},
        inactiveOrders: [...state.inactiveOrders, state.activeOrder]
      }
    case GOT_INACTIVE_ORDERS:
      return {...state, inactiveOrders: action.payload}
    default:
      return state
  }
}

export default ordersReducer
