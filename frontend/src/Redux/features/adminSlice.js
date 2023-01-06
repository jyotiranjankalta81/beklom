/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../API/axiosInstance'


export const getblog = createAsyncThunk('main/mycreate-blog', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/mycreate-blog')
        return response
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.response.data)

    }
})

export const getInTouchHome = createAsyncThunk('main/get-in-touch-home', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/get-in-touch-home')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const contactUs = createAsyncThunk('main/contact-us', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/contact-us')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const getOnBoarding = createAsyncThunk('main/get-on-boarding', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/get-onboarding')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const getStarted = createAsyncThunk('main/get-started', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/get-started')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const Subscribe = createAsyncThunk('main/subscribe', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.post('main/subscribe', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const Section1 = createAsyncThunk('main/section1', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/section1', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

const adminSlice = createSlice({
    name: "udata",
    initialState: {
        blogs: [],
        getintouchhome: [],
        contacts: [],
        onboarding: [],
        getstarted: [],
        subscribed: [],
        section1: [],
        loading: false,
        error: false,
        message: " "
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload
        },
        getInTouchhome: (state, action) => {
            state.getintouchhome = action.payload
        },
        getContactUs: (state, action) => {
            state.contacts = action.payload
        },
        getOnboarding: (state, action) => (
            state.onboarding = action.payload
        ),
        getGetStarted: (state, action) => (
            state.getstarted = action.payload
        ),
        getSubscribe: (state, action) => (
            state.subscribed = action.payload
        ),
        getSection1: (state, action) => (
            state.section1 = action.payload
        )


    },
    extraReducers: (builder) => {
        builder
            .addCase(getblog.pending, (state) => {
                state.loading = true;
            })
            .addCase(getblog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.blogs = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getblog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getInTouchHome.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInTouchHome.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.getintouchhome = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getInTouchHome.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(contactUs.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(contactUs.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.contacts = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(contactUs.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getOnBoarding.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getOnBoarding.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.onboarding = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getOnBoarding.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getStarted.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getStarted.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.getstarted = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getStarted.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(Subscribe.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(Subscribe.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.subscribed = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )
            .addCase(Subscribe.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }
            )
            .addCase(Section1.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(Section1.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.section1 = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )

            .addCase(Section1.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }
            )


    }
})

export const { getBlogs, getInTouchhome, getContactUs, getOnboarding, getGetStarted, getSubscribe, getSection1 } = adminSlice.actions
export default adminSlice.reducer