import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserStateType {
  value: {
    name: string
    age: number
    email: string
  }
}

const initialState: UserStateType = {
  value: { name: "", age: 0, email: "" },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserStateType["value"]>) => {
      state.value = action.payload
    },
  },
})

export default userSlice.reducer
