import { createSlice } from '@reduxjs/toolkit'

const tempData = {
  isBatchRecord: false,
  isCoi: false,
  isFirstVisitBatch:true,
  isFirstVisitCOI:true,
}
const tempSlice = createSlice({
  name: 'temp',
  initialState: tempData,
  reducers: {
    isCoiScan(state, action) {
      state.isCoi = action.payload;
    },
    isBatchScan(state, action) {
        state.isBatchRecord = action.payload;
    },
    isFirstBatch(state, action) {
      state.isFirstVisitBatch = action.payload;
  },
  isFirstCOI(state, action) {
    state.isFirstVisitCOI = action.payload;
},
  },
})
export const temp = tempSlice.actions
export default tempSlice.reducer
