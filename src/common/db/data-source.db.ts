import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.NODE_ENV === 'local',
  entities: [__dirname + '/../../../dist/common/db/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../../dist/common/db/migrations/*{.ts,.js}'],
});
