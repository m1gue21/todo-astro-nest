import { Column, Entity, DeleteDateColumn } from 'typeorm';

@Entity()
export class Tasks {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @DeleteDateColumn()
  deletedAt: Date;
}
