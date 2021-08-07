
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CatSort {
    CREATED_ASC = "CREATED_ASC",
    CREATED_DESC = "CREATED_DESC",
    STARGAZERS_DESC = "STARGAZERS_DESC"
}

export enum OwnerSort {
    CREATED_ASC = "CREATED_ASC",
    CREATED_DESC = "CREATED_DESC",
    STARGAZERS_DESC = "STARGAZERS_DESC"
}

export interface Node {
    id: string;
}

export interface Connection {
    totalCount: number;
}

export abstract class IQuery {
    abstract cat(catId: string): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract cats(limit?: Nullable<number>, offset?: Nullable<number>, sort?: Nullable<CatSort>): CatConnection | Promise<CatConnection>;

    abstract owner(ownerId: string): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract owners(limit?: Nullable<number>, offset?: Nullable<number>, sort?: Nullable<OwnerSort>): OwnerConnection | Promise<OwnerConnection>;
}

export class Cat implements Node {
    id: string;
    name: string;
    ownerId: string;
    owner?: Nullable<Owner>;
}

export class CatConnection implements Connection {
    nodes?: Nullable<Nullable<Cat>[]>;
    totalCount: number;
}

export class Owner implements Node {
    id: string;
    name: string;
}

export class OwnerConnection implements Connection {
    nodes?: Nullable<Nullable<Owner>[]>;
    totalCount: number;
}

type Nullable<T> = T | null;
