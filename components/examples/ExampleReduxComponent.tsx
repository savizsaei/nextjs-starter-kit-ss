// components/examples/ExampleReduxComponent.tsx
'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { increment, decrement, setValue } from '@/store/slices/exampleSlice';

export function ExampleReduxComponent() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>Redux Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
    </div>
  );
}
