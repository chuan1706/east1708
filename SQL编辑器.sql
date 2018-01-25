

insert into users(username,userpass) values('圣诞节','111');

select * from users
insert into users(username,userpass) values('节','111');
select * from users where username='圣诞节'
select * from users where username='13273635455'
select * from users

create table goodsinfos(
       goodsid char(16) not null primary key,
       goodsname varchar(30) not null,
       goodscount int,
       goodsrice float
);