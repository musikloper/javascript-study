import { Product } from 'src/product/entities/product.entity';
import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('USER')
export class User {
  // @ApiProperty({
  //   example: 1,
  //   description: '유저인식번호',
  // })
  @PrimaryGeneratedColumn()
  number: number

  @Column()
  id: string

  @Column()
  password: string

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  address2: string

  @Column()
  zipcode: string

  @Column()
  register_date: Date

  @Column()
  type: number

  @OneToMany(() => Product, product => product.user, { eager: false })
  products: Product[] 
  // @ApiProperty({
  //   example: 'example@email.com',
  //   description: '이메일',
  // })
  // @Index()
  // @Column('varchar', { length: 100 })
  // email: string;

  // @ApiProperty({
  //   example: '홍길동',
  //   description: '이름',
  // })
  // @Column('varchar', { length: 100 })
  // name: string;

  // @ApiProperty({
  //   example: '******',
  //   description: '비밀번호',
  // })
  // @Column('varchar', { length: 100 })
  // password: string;

  // @ApiProperty({
  //   example: '2021-01-01 00:00:00',
  //   description: '수정일',
  // })
  // @UpdateDateColumn()
  // updateDate: Date;

  // @ApiProperty({
  //   example: '2021-01-01 00:00:00',
  //   description: '가입일',
  // })
  // @CreateDateColumn()
  // regDate: Date;

  // @ApiProperty({
  //   example: 1,
  //   description: '상태',
  // })
  // @Column({ type: 'tinyint', default: 1 })
  // state: number;

  // @ApiProperty({
  //   description: '유저 프로필',
  //   oneOf: [{ $ref: getSchemaPath(UserProfile) }],
  // })
  // @OneToOne(() => UserProfile, (userProfile) => userProfile.user, {
  //   cascade: true,
  // }) // cascade 설정해야 한꺼번에 인서트 가능함
  // userProfile: UserProfile;

  // @ApiProperty({
  //   description: '유저 푸시토큰',
  //   items: {
  //     $ref: getSchemaPath(UserPushToken),
  //   },
  // })
  // @OneToMany(() => UserPushToken, (pushToken) => pushToken.user, {
  //   cascade: true,
  // })
  // pushToken: UserPushToken;

  // @ApiProperty({
  //   description: '유저 리플래쉬토큰',
  //   items: {
  //     $ref: getSchemaPath(RefreshPushToken),
  //   },
  // })
  // @OneToMany(() => RefreshPushToken, (pushToken) => pushToken.user, {
  //   cascade: true,
  // })
  // refreshToken: RefreshPushToken;
}
