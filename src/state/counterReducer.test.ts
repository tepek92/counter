import {
    addSettingsValuesAC,
    changeCountAC,
    changeDisplayAC,
    counterReducer,
    CounterState,
    resetCountAC
} from "./counterReducer";

let startState: CounterState;

beforeEach(() => {
    startState = {
        startCount: 0,
        maxCount: 5,
        stepCount: 1,
        count: 0,
        display: true,
    }
});

test('counter value changes correctly', () => {
    const newState = counterReducer(startState, changeCountAC(5));

    expect(startState.count).toBe(0);
    expect(newState.count).toBe(5);
});

test('counter value reset to start value', () => {
    startState.count = 3;
    const newState = counterReducer(startState, resetCountAC());

    expect(startState.count).toBe(3);
    expect(newState.count).toBe(0);
});

test('setting value are correctly set to counter values', () => {
    startState.display = false;
    const newStartValue = 10;
    const newMaxValue = 20;
    const newStepValue = 2;

    const newState = counterReducer(startState, addSettingsValuesAC(newStartValue, newMaxValue, newStepValue));

    expect(startState.startCount).toBe(0);
    expect(startState.maxCount).toBe(5);
    expect(startState.stepCount).toBe(1);
    expect(startState.count).toBe(0);
    expect(startState.display).toBe(false);

    expect(newState.startCount).toBe(10);
    expect(newState.maxCount).toBe(20);
    expect(newState.stepCount).toBe(2);
    expect(newState.count).toBe(10);
    expect(newState.display).toBe(true);
});

test('counter display changes correctly', () => {
    const newState = counterReducer(startState, changeDisplayAC());

    expect(startState.display).toBe(true);
    expect(newState.display).toBe(false);
});
