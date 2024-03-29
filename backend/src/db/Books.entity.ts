//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Books")
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
title: string;

@Column({nullable: true})
author: string;

@Column({nullable: true})
authorGender: string;

@Column({nullable: true})
dateOfBirth: string;


}
