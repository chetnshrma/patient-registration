import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientDetails: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    age: "",
    dateOfBirth: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatePatientDetails: (state, action) => {
      state.patientDetails = { ...state.patientDetails, ...action.payload };
    },
  },
});

export const { updatePatientDetails } = formSlice.actions;
export default formSlice.reducer;
