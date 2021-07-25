
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CatSort {
    ID_ASC = "ID_ASC",
    ID_DESC = "ID_DESC",
    CREATED_ASC = "CREATED_ASC",
    CREATED_DESC = "CREATED_DESC"
}

export enum OwnerSort {
    ID_ASC = "ID_ASC",
    ID_DESC = "ID_DESC",
    CREATED_ASC = "CREATED_ASC",
    CREATED_DESC = "CREATED_DESC"
}

export interface Node {
    id: string;
}

export interface Connection {
    pageInfo: PageInfo;
}

export abstract class IQuery {
    abstract cat(catId: string): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract cats(limit?: Nullable<number>, offset?: Nullable<number>, sort?: Nullable<CatSort>): Nullable<CatConnection> | Promise<Nullable<CatConnection>>;

    abstract owner(ownerId: string): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract owners(limit?: Nullable<number>, offset?: Nullable<number>, sort?: Nullable<OwnerSort>): Nullable<OwnerConnection> | Promise<Nullable<OwnerConnection>>;
}

export class Cat implements Node {
    id: string;
    name: string;
    ownerId: string;
    owner?: Nullable<Owner>;
}

export class CatConnection implements Connection {
    pageInfo: PageInfo;
    nodes: Cat[];
}

export class PageInfo {
    limit: number;
    offset: number;
    total: number;
}

export class Owner implements Node {
    id: string;
    name: string;
    catIds: string[];
    cats?: Nullable<Cat[]>;
}

export class OwnerConnection implements Connection {
    pageInfo: PageInfo;
    nodes: Owner[];
}

type Nullable<T> = T | null;
