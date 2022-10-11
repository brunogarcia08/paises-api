import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    destinos: []
  },
  reducers: {
    increment: (state) => {
        state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    adcDestino: (state, action) => {
      state.destinos.push(action.payload)
    },
    removeDestino: (state, action) => {
      const destinos_que_vao_ficar = state.destinos.filter((item) => item.ID != action.payload)
      state.destinos = destinos_que_vao_ficar
    }
  },
})

export const { increment, decrement, incrementByAmount, adcDestino, removeDestino} = counterSlice.actions

export default counterSlice.reducer