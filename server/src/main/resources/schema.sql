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
    price float,
	user_id int,
    foreign key (user_id) references users(id)
    on delete cascade
);

create table devices(
	id int auto_increment primary key,
    device_name varchar(45),
    phone_number varchar(15) unique,
    plan_id int,
    foreign key (plan_id) references plans(id)
    on delete cascade
);

insert into users(user_name, email, pass_key)
values("John", "John@gmail.com", "$2y$07$Q4oJJr.CFYcYQTZFxE0HU.W2.U25sQx.WNwE8hj1/2lHt2KlHpbFe");

insert into users(user_name, email, pass_key)
values("Eddy", "Eddy@gmail.com", "$2y$07$1VVUVgi9kJVF1mUq1OTYyeUcgq.qcuze4Zz5Pf9zeLFzER1aiXVgC" );

insert into users(user_name, email, pass_key)
values("Logan", "Logan@gmail.com", "$2y$07$WYEMTzMFTnL5l7y6zO.FZeAZFg1Kl9NZNDa2fUy7VT0NQ.Vc4V9Zi");

insert into users(user_name, email, pass_key)
values("Kevin", "Kevin@gmail.com", "$2a$16$XFmlcOtGSeF3kJnbdElD5eUPWO0zcUE05zhkmo.EAxT8Fh/4iT6dO");

insert into plans(plan_name, device_limit, user_id, price)
values("Basic", 5, 2, 89.99);

insert into plans(plan_name, device_limit, user_id, price)
values("Cooler", 7, 2, 59.99);

insert into plans(plan_name, device_limit, user_id, price)
values("Minimal", 9, 4, 29.99);

insert into devices(device_name, plan_id, phone_number)
values("Galaxy S20", 1, "1-111-111-1111");

insert into devices(device_name, plan_id, phone_number)
values("Galaxy S10", 2, "1-111-111-1112");

insert into devices(device_name, plan_id, phone_number)
values("Iphone 10", 3, "1-111-111-1113");

insert into devices(device_name, plan_id, phone_number)
values("Iphone 13", 3, "1-111-111-1114");

