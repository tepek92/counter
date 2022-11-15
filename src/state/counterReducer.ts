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

type AllAction =
    ReturnType<typeof changeCountAC> |
    ReturnType<typeof resetCountAC> |
    ReturnType<typeof addSettingsValuesAC> |
    ReturnType<typeof changeDisplayAC>;


export const counterReducer = (state = initialState, action: AllAction): CounterState => {
    switch (action.type) {
        case "CHANGE_COUNT":
            return {...state, count: action.newCount};
        case "RESET_COUNT":
            return {...state, count: state.startCount};
        case "ADD_SETTINGS_VALUE":
            return {
                ...state,
                startCount: action.newStartValue,
                maxCount: action.newMaxValue,
                stepCount: action.newStepValue,
                count: action.newStartValue,
                display: true
            };
        case "CHANGE_DISPLAY":
            return {...state, display: !state.display};
        default: return state;
    }
}

export const changeCountAC = (newCount: number) => ({type: 'CHANGE_COUNT', newCount} as const);

export const resetCountAC = () => ({type: 'RESET_COUNT'} as const);

export const addSettingsValuesAC = (newStartValue: number, newMaxValue: number, newStepValue: number) =>
    ({type: 'ADD_SETTINGS_VALUE', newStartValue, newMaxValue, newStepValue} as const);

export const changeDisplayAC = () => ({type: 'CHANGE_DISPLAY'} as const);
