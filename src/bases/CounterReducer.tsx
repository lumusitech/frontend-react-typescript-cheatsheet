import { useReducer } from "react";

interface CounterState {
    changes: number;
    counter: number;
    previous: number;
}

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { changes, counter } = state;
    
    switch (action.type) {
        case 'increaseBy':
            return {
                changes: changes + 1,
                counter: counter + action.payload.value,
                previous: counter
            }
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0
            }

        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const increaseBy = (value: number) => {
        dispatch({ type: "increaseBy", payload: { value } })
    }

    const handleReset = () => {
        dispatch({ type: "reset" })
    }

    return (
        <>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>

            <button onClick={() => increaseBy(1)}>+ 1</button>
            <button onClick={() => increaseBy(5)}>+ 5</button>
            <button onClick={() => increaseBy(10)}>+ 10</button>
            <button onClick={() => handleReset()}>Reset</button>
        </>
    )
}
