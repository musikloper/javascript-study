import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
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
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('CATEGORY')
export class Category {
  // @ApiProperty({
  //   example: 1,
  //   description: '유저인식번호',
  // })
  @PrimaryGeneratedColumn()
  product_id: number

  @Column()
  product_name: string

  

}
