import { createSlice } from '@reduxjs/toolkit'

const displayInitialState = {
  subject: [
    {
      batchNumber:"",
      patientName:"",
      COINumber: "",
      DINNumber: "",
      subjectIDNumber:"",
      taskName: "",
      operatorName: "",
      operatorId: ""
    }
  ],
}
const subjectSlice = createSlice({
  name: 'subject',
  initialState: displayInitialState,
  reducers: {
    subjectFetch: (state, action) => {
      state.subject = [action.payload]
    },
  },
})

export const subject = subjectSlice.actions
export default subjectSlice.reducer

// {
//   batchNumber:"123456789",
//   patientName:"Denrik",
//   COINumber: "567890123",
//   DINNumber: "8901234",
//   subjectIDNumber:"NT-175-101-102",
//   taskName: "Day 0: T-Cell Activation",
//   operatorName: "Mitzi simpson"
// }