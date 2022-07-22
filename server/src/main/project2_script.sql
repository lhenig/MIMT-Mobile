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
    device_limit int,
    user_id int,
    foreign key (user_id) references users(id)
);

create table devices(
	id int auto_increment primary key,
    device_name varchar(45),
    plan_id int,
    foreign key (plan_id) references plans(id)
);

insert into users(user_name, email, pass_key)
values("John", "John@gmail.com", "test1");

insert into users(user_name, email, pass_key)
values("Eddy", "Eddy@gmail.com", "test2" );

insert into users(user_name, email, pass_key)
values("Logan", "Logan@gmail.com", "test3");

insert into users(user_name, email, pass_key)
values("Kevin", "Kevin@gmail.com", "$2a$16$XFmlcOtGSeF3kJnbdElD5eUPWO0zcUE05zhkmo.EAxT8Fh/4iT6dO");

insert into plans(plan_name, device_limit, user_id)
values("Basic", 5, 2);

insert into plans(plan_name, device_limit, user_id)
values("Cooler", 7, 2);

insert into plans(plan_name, device_limit, user_id)
values("Minimal", 9, 1);

insert into devices(device_name, plan_id)
values("Galaxy S20", 1);

insert into devices(device_name, plan_id)
values("Galaxy S10", 2);

insert into devices(device_name, plan_id)
values("Iphone 10", 3);

insert into devices(device_name, plan_id)
values("Iphone 13", 3);

