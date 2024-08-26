import { Column, Entity } from 'typeorm';

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
}
