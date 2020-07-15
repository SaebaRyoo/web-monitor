import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ErrorEntity } from './ErrorEntity'
import { type } from 'os';

@Entity()
export class ErrorEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'mediumtext' })
  data: string;

  @Column()
  type: number;

  @Column()
  timestamp: string;

  @ManyToOne(type => ErrorEntity, error => error.events)
  user: ErrorEntity
}