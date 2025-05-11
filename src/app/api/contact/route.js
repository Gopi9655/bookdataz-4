import { Client } from 'pg'; // Using PostgreSQL as an example. You can change it to MongoDB or other DBs.

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  const client = new Client({
    user: 'your-db-user',
    host: 'localhost',
    database: 'your-db',
    password: 'your-db-password',
    port: 5432,
  });

  try {
    await client.connect();
    await client.query(
      'INSERT INTO enquiries(name, email, message) VALUES($1, $2, $3)',
      [name, email, message]
    );
    await client.end();

    return new Response(JSON.stringify({ message: 'Enquiry saved successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return new Response(JSON.stringify({ message: 'Failed to save enquiry' }), { status: 500 });
  }
}
