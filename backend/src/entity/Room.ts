import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Room extends BaseEntity {
  @PrimaryColumn()
  uuid: string;

  @PrimaryColumn()
  movieId: string;
}