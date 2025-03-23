// components/examples/ExampleQueryComponent.tsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchExampleData() {
  const { data } = await axios.get('/api');
  return data;
}

async function fetchUserData() {
  const { data } = await axios.get('/api/user');
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
      <h1>Example Data</h1>
      <pre>{JSON.stringify(data, null, 2)}
      <UserProfile/>
      </pre>
    </div>
  );
}


function UserProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUserData,
  });

  if (isLoading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user data</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Role: {data.role}</p>
    </div>
  );
}