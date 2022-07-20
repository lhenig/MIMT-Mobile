drop database if exists mimt ;
create database mimt;
use mimt;
create table users(
	id int auto_increment,
    user_name varchar(45),
    email varchar(45),
    pass_key varchar(250),
    primary key (id)
);

create table plans(
	id int auto_increment primary key,
    plan_name varchar(45),
    device_limit int
);

create table devices(
	id int auto_increment primary key,
    device_name varchar(45),
    user_id int,
    plan_id int,
	foreign key (user_id) references users(id),
    foreign key (plan_id) references plans(id)
);

insert into users(user_name, email, pass_key)
values("John", "John@gmail.com", "test1");

insert into users(user_name, email, pass_key)
values("Eddy", "Eddy@gmail.com", "test2" );

insert into users(user_name, email, pass_key)
values("Logan", "Logan@gmail.com", "test3");

insert into users(user_name, email, pass_key)
values("Kevin", "Kevin@gmail.com", "test4");

insert into plans(plan_name, device_limit)
values("Basic", 5);

insert into plans(plan_name, device_limit)
values("Cooler", 7);

insert into plans(plan_name, device_limit)
values("Minimal", 9);

insert into devices(device_name, user_id, plan_id)
values("Galaxy S20", 1, 3);

insert into devices(device_name, user_id, plan_id)
values("Galaxy S10", 1, 2);

insert into devices(device_name, user_id, plan_id)
values("Iphone 10", 2, 1);

insert into devices(device_name, user_id, plan_id)
values("Iphone 13", 2, 2);

