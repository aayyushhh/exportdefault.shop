import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productDeleteReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, showAllUsersReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPaymentReducer, showUserOrdersReducer } from './reducers/orderReducers'

const reducer = combineReducers({
  // cart & products
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  cart: cartReducer,
  // user
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  showAllUsers: showAllUsersReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  // orders
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPayment: orderPaymentReducer,
  showUserOrders: showUserOrdersReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ''

const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage, paymentMethod: paymentMethodFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
