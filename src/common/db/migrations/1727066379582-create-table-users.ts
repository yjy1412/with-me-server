import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { DB_TABLE_NAME } from '../../constants';

export class CreateTableUsers1727066379582 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: DB_TABLE_NAME.USERS,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '50',
            isUnique: true,
            comment: '이메일',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '124',
            comment: '비밀번호',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            comment: '이름',
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            length: '20',
            comment: '전화번호',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(DB_TABLE_NAME.USERS);
  }
}
