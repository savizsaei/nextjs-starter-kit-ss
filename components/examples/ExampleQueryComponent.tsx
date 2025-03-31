// components/examples/ExampleQueryComponent.tsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ArtGallery from '../ArtGallary/ArtGallery1'; // Import the new component

async function fetchExampleData() {
  const { data } = await axios.get('/api');
  return data;
}


export function ExampleComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exampleData'],
    queryFn: fetchExampleData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <pre>
        <ArtGallery />
        {JSON.stringify(data, null, 2)}
      </pre>
      <h1>Example Data</h1>
      
    </div>
  );
}


