import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
<<<<<<< HEAD
  // const search = searchParams.q ?? '';
  // const result = await sql`
  //   SELECT id, name, username, email 
  //   FROM users 
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const users = result.rows as User[];
=======
  const search = searchParams.q ?? '';
//   const result = await sql`
//     SELECT id, name, username, email 
//     FROM users 
//     WHERE name ILIKE ${'%' + search + '%'};
//   `;
//   const users = result.rows as User[];
>>>>>>> 978942e80f2e23a46012ef8ad46a338ae030ed4e

  return (
    <main className="p-4 md:p-1 mx-auto max-w-7xl">
      <Card className="mt-6">
<<<<<<< HEAD
      <Title>Run Simulation</Title>
      <Card title="Timeline and Progress">
        {/* Timeline and Progress components */}
      </Card>
      {/* <Chart /> */}
      <Card title="Macro Information">
        {/* Macro Information components */}
      </Card>
      {/* <Carousel /> */}
=======
        <UsersTable users={[]} />
>>>>>>> 978942e80f2e23a46012ef8ad46a338ae030ed4e
      </Card>
    </main>
  );
}
