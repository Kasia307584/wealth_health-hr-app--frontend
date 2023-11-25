import { configureStore, createSlice } from "@reduxjs/toolkit";
import mockData from "../constants/MOCK_DATA.json";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    employeeTable: mockData,
    id: 0,
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      const data = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        startDate: action.payload.startDate,
        department: action.payload.department,
        dateOfBirth: action.payload.dateOfBirth,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
        id: state.id,
      };
      state.employeeTable.push(data);
      state.id += 1;
    },
  },
});
const store = configureStore({
  reducer: userDataSlice.reducer,
});

const { setData } = userDataSlice.actions;

export { setData, store };
