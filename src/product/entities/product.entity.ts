import { Category } from 'src/category/entities/category.entity';
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

@Entity('PRODUCT')
export class Product {
  // @ApiProperty({
  //   example: 1,
  //   description: '유저인식번호',
  // })
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: string

  @Column()
  quantity: string

  @Column()
  register_date: Date

  @Column()
  image_path: string

  @ManyToOne(() => User, user => user.products, { eager: false }) 
  user: User

  @OneToOne(() => Product)
  @JoinColumn()
  category: Category;
}
