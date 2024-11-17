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
        color="#28a745"
        hoverColor="#218838"
        onClick={() => dispatch(increment())}
        size="large"
      />
      <Button
        text="Decrement"
        color="#dc3545"
        hoverColor="#c82333"
        onClick={() => dispatch(decrement())}
        size="large"
      />
      <Button
        text="Set Value to 10"
        color="#007bff"
        hoverColor="#0069d9"
        onClick={() => dispatch(setValue(10))}
        size="large"
      />
    </div>
  );
}
