// components/examples/ExampleReduxComponent.tsx
'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { increment, decrement, setValue } from '@/store/slices/exampleSlice';
import Button from '@/components/ui/Button';

export function ExampleReduxComponent() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>Redux Value: {value}</h1>
      <Button
        text="Increment"
        color="primary"
        onClick={() => dispatch(increment())}
        size="large"
      />
      <Button
        text="Decrement"
        color="primary"
        onClick={() => dispatch(decrement())}
        size="large"
      />
      <Button
        text="Set Value to 10"
        color="primary"
        onClick={() => dispatch(setValue(10))}
        size="large"
      />
    </div>
  );
}
