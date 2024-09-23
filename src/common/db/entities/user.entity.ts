import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DB_TABLE_NAME } from '../../constants';
import BaseModel from './base.entity';
import { IsEmail, IsString, Matches } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

const UUID = 'uuid';

@Entity(DB_TABLE_NAME.USERS)
export default class UserModel extends BaseModel {
  @PrimaryGeneratedColumn(UUID)
  id: string;

  @Column({
    unique: true,
    length: 50,
    comment: '이메일',
  })
  @IsEmail(undefined, {
    message: '이메일 형식이 아닙니다.',
  })
  email: string;

  @Column({
    length: 124,
    comment: '비밀번호',
    select: false,
  })
  @Matches(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,15}$/,
    {
      message:
        '비밀번호는 8~15자리의 영문, 숫자, 특수문자(공백제외) 조합이어야 합니다.',
    },
  )
  password: string;

  @Column({
    length: 50,
    comment: '이름',
  })
  @IsString({
    message: '이름은 문자열이어야 합니다.',
  })
  name: string;

  @Column({
    length: 20,
    comment: '전화번호',
  })
  @Matches(/^(\+\d{1,3}[- ]?)?\d{10,15}$/, {
    message: '유효한 전화번호가 아닙니다.',
  })
  phoneNumber: string;

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
