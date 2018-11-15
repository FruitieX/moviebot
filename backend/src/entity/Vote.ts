import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { User } from './User';
import { Room } from './Room';

@Entity()
export class Vote extends BaseEntity {
  @OneToOne(type => User, user => user.id)
  @JoinColumn()
  @PrimaryColumn()
  user: string;

  @PrimaryColumn()
  movieId: string;

  @OneToOne(type => Room, room => room.uuid)
  @JoinColumn()
  @PrimaryColumn()
  room: string;

  @Column()
  vote: number;
}
