import { createSlice } from '@reduxjs/toolkit'

const scannedData = {
  batchRecord: [],
  coi: [],
}
const scanSlice = createSlice({
  name: 'scan',
  initialState: scannedData,
  reducers: {
    batchScan(state, action) {
      state.batchRecord = [...state.batchRecord, action.payload]
    },
    coiScan(state, action) {
      state.coi = [action.payload]
    },
  },
})
export const scan = scanSlice.actions
export default scanSlice.reducer
