import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { addDoc, collection , getDocs } from 'firebase/firestore/lite'
import { db } from '../../config/firebase' 

interface Timestamp {
    seconds: number;
    nanoseconds: number;
}

interface CheckIn { 
    id: string;
    name: string;
    photo: string;
    description: string;
    date: Timestamp;
}
  
export const addCheckIns = createAsyncThunk(
    'checkIns/addCheckIns',
    async (checkIn: CheckIn) => {
      const docRef = await addDoc(collection(db, 'check-ins'), checkIn);
      const newCheckIn = { ...checkIn, id: docRef.id } as CheckIn;
      return newCheckIn;
    }
);


export const getCheckIns = createAsyncThunk(
    'checkIns/getCheckIns',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'check-ins'))
        const checkIns = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, name: doc.data().name, photo: doc.data().photo, description: doc.data().description, date: doc.data().date}))  
        return checkIns 
    }
) 

interface CheckInsState {
  checkIns: CheckIn[];
}

const initialState: CheckInsState = {
  checkIns: [],
};

const checkInsSlice = createSlice({
  name: 'checkIns',
  initialState,
    reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addCheckIns.fulfilled, (state, action) => {
        state.checkIns.push(action.payload);
      })
    .addCase(getCheckIns.fulfilled, (state, action) => {
        state.checkIns = action.payload;
      });
  },
});

const CheckInsReducer = checkInsSlice.reducer;
export default CheckInsReducer;