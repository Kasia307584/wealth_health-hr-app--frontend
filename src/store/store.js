import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    firstName: "",
    lastName: "",
    startDate: "",
    departement: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    id: "",
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.startDate = action.payload.startDate;
      state.departement = action.payload.departement;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipCode = action.payload.zipCode;
      state.id += 1;
    },
  },
});
const store = configureStore({
  reducer: userDataSlice.reducer,
});

const { setData } = userDataSlice.actions;

export { setData, store };
