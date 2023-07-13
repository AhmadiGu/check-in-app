import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc, collection , getDoc, getDocs } from 'firebase/firestore/lite'
import { db } from '../../config/firebase'


export const addCheckIns = createAsyncThunk(
    'checkIns/addCheckIns',
    async (checkIn) => {
        const docRef = await addDoc(collection(db, 'check-ins'), checkIn) 
        return { ...checkIn, id: docRef.id }
    }
)

export const getCheckIns = createAsyncThunk(
    'checkIns/getCheckIns',
    async () => {
        const querySnapshot = await getDocs(collection(db, 'check-ins'))
        const checkIns = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))  
        return checkIns 
    }
) 

const checkInsSlice = createSlice({
    name: 'checkIns',
    initialState: {
        checkIns: []
    },
    extraReducers: (builder) => {
        builder
        .addCase(addCheckIns.fulfilled, (state, action) => {
            state.checkIns.push(action.payload)
        })
        .addCase(getCheckIns.fulfilled, (state, action) => {
            state.checkIns = action.payload
        })


    }
}) 
const CheckInsReducer = checkInsSlice.reducer;
export default CheckInsReducer;