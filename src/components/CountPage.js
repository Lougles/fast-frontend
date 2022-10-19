import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/countReducer';

const Count = () => {
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increaseNumber = (num) => {
    dispatch(increment(num))
  }
  const decreaseNumber = (num) => {
    dispatch(decrement(num))
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => increaseNumber(Number(5))}>+</button>
      <button onClick={() => decreaseNumber(5)}>-</button>
    </div>
  )
}

export default Count