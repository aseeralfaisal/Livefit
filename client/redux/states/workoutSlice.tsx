import { createSlice } from '@reduxjs/toolkit'

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    workouts: [],
    workoutName: '',
    workoutNameUserInput: '',
    specificExercises: [],
    exerciseTarget: '',
    UserExercises: [],
  },
  reducers: {
    setWorkouts: (state, { payload }) => {
      state.workouts = payload
    },
    setSpecificExercises: (state, { payload }) => {
      state.specificExercises = payload
    },
    setExerciseTarget: (state, { payload }) => {
      state.exerciseTarget = payload
    },
    setUserExercises: (state, { payload }) => {
      state.UserExercises = payload
    },
    setWorkoutName: (state, { payload }) => {
      state.workoutName = payload
    },
    setWorkoutNameUserInput: (state, { payload }) => {
      state.workoutNameUserInput = payload
    },
  },
})
export const {
  setWorkouts,
  setSpecificExercises,
  setExerciseTarget,
  setUserExercises,
  setWorkoutName,
  setWorkoutNameUserInput,
} = workoutSlice.actions
