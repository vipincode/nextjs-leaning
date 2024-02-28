import React from 'react';

export default async function UsersPage() {
  // server always cache the page, for static site generation,
  // if want to see reflection need to be revalidate {'cache: 'no-store'}
  const result = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } });
  const users: Users[] = await result.json();
  return (
    <div>
      UsersPage
      <p>{new Date().toLocaleDateString()}</p>
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}
