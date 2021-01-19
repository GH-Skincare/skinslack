import axios from 'axios'

export const GOT_ORDER = 'GOT_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const GOT_INACTIVE_ORDERS = 'GOT_INACTIVE_ORDERS'
export const NEW_ORDER_ITEM = 'NEW_ORDER_ITEM'
export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM'

export const removeOrderItem = orderItemId => ({
  type: REMOVE_ORDER_ITEM,
  payload: orderItemId
})

export const newOrderItem = order => ({
  type: NEW_ORDER_ITEM,
  payload: order
})

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

export const deleteOrderItem = orderItemId => async dispatch => {
  try {
    await axios.delete(`/api/order_items/${orderItemId}`)
    dispatch(removeOrderItem(orderItemId))
  } catch (error) {
    console.log('oh no, error!')
  }
}

export const fetchActiveOrder = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/users/${userId}/type/active`)
    dispatch(setOrder(data))
  } catch (error) {
    console.log('oh no, error!', error)
  }
}

export const fetchInactiveOrders = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/users/${userId}/type/inactive`)
    dispatch(setInactiveOrders(data))
  } catch (error) {
    console.log('oh no, error!')
  }
}

export const completeOrder = orderId => async dispatch => {
  try {
    await axios.put(`/api/orders/${orderId}`, {isActive: false})
    dispatch(updateOrder())
  } catch (error) {
    console.log('oh no, error!')
  }
}

export const createOrderItem = (userId, productId) => async dispatch => {
  try {
    const {data} = await axios.post('/api/order_items', {userId, productId})
    dispatch(newOrderItem(data))
  } catch (error) {
    console.log('oh no, error!', error)
  }
}

const initialState = {
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
    case REMOVE_ORDER_ITEM:
      return {
        ...state,
        activeOrder: {
          ...state.activeOrder,
          orderItems: state.activeOrder.orderItems.filter(orderItem => {
            return orderItem.id !== action.payload
          })
        }
      }
    case GOT_INACTIVE_ORDERS:
      return {...state, inactiveOrders: action.payload}
    case NEW_ORDER_ITEM:
      if (state.activeOrder.orderItems) {
        return {
          ...state,
          activeOrder: {
            ...state.activeOrder,
            orderItems: [
              ...state.activeOrder.orderItems,
              ...action.payload.orderItems
            ]
          }
        }
      } else {
        return {...state, activeOrder: action.payload}
      }
    default:
      return state
  }
}

export default ordersReducer
