import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  autoLoadEntities: true,
  type: 'postgres',
  url: process.env.DATABASE_URI,
};
