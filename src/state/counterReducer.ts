export type CounterState = {
    startCount: number
    maxCount: number
    stepCount: number
    count: number
    display: boolean
}

const initialState: CounterState = {
    startCount: 0,
    maxCount: 5,
    stepCount: 1,
    count: 0,
    display: true,
}

export type AllActions =
    ReturnType<typeof changeCountAC> |
    ReturnType<typeof resetCountAC> |
    ReturnType<typeof addSettingsValuesAC> |
    ReturnType<typeof changeDisplayAC>;


export const counterReducer = (state = initialState, action: AllActions): CounterState => {
    switch (action.type) {
        case "CHANGE_COUNT":
        case "ADD_SETTINGS_VALUE":
            return {...state, ...action.payload};
        case "RESET_COUNT":
            return {...state, count: state.startCount};

        case "CHANGE_DISPLAY":
            return {...state, display: !state.display};
        default: return state;
    }
}

export const changeCountAC = (newCount: number) => ({type: 'CHANGE_COUNT', payload: {count: newCount}} as const);

export const resetCountAC = () => ({type: 'RESET_COUNT'} as const);

export const addSettingsValuesAC = (newStartValue: number, newMaxValue: number, newStepValue: number) =>
    ({type: 'ADD_SETTINGS_VALUE', payload: {
            count: newStartValue,
            startCount: newStartValue,
            maxCount: newMaxValue,
            stepCount: newStepValue,
            display: true}} as const);

export const changeDisplayAC = () => ({type: 'CHANGE_DISPLAY'} as const);

// startCount: 0,
//     maxCount: 5,
//     stepCount: 1,
//     count: 0,
//     display: true,