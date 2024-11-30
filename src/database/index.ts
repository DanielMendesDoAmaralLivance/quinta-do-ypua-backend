import { Pool } from 'pg';

// Antes de subir para prod, remover esta connection string hard coded e mover para uma variável de ambiente.
const pool = new Pool({
  connectionString:
    'postgres://postgres:postgrespassword@localhost:5432/quinta_do_ypua',
});

pool.on('connect', () => {
  console.log('connected to the db successful!');
});

export default pool;
