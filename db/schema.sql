drop database if exists burgers_Db;
create database burgers_Db;


use burgers_Db;

create table burgers (
    id serial,
    burger_name varchar(100) not null,
    devoured boolean not null DEFAULT 0,
    primary key (id)
);
