create database plant_v1;
create table roles (
	id varchar(5) primary key,
    name varchar(50)
);

create table accounts (
	id int primary key auto_increment,
    userName varchar(200),
    password text,
    roleId varchar(5),
    isActive bit,
    createAt datetime default now(),
    updateAt datetime,
    foreign key (roleId) references roles(id)
);

create table categories (
	id int primary key auto_increment,
    name varchar(100),
    isActive bit,
    createAt datetime default now(),
    updateAt datetime
);

create table plants (
	id int primary key auto_increment,
    name varchar(200),
    description varchar(500),
    isActive bit,
    categoryId int,
    createAt datetime default now(),
    updateAt datetime,
    foreign key(categoryId) references categories(id)
);

create table plantDetails(
	id int primary key auto_increment,
    height float, 
    age float, 
    rating float,
    humidity float,
    size varchar(20),
    quantity int,
    isActive bit,
    plantId int,
    createAt datetime default now(),
    updateAt datetime,
    foreign key(plantId) references plants(id)
);

create table customers(
	id int primary key auto_increment,
    userName varchar(200) unique,
    fullName varchar(200),
    dob date,
    phone varchar(11),
    email varchar(200),
    address varchar(300),
    image text,
    createAt datetime default now(),
    updateAt datetime
);

create table orders(
	id int primary key auto_increment,
    cusId varchar(200),
    plantId int,
    quantity int,
    amount float,
    status int,
	createAt datetime default now(),
    updateAt datetime,
    foreign key(cusId) references customers(userName)
);

create table hasPlant(
	id int primary key auto_increment,
    plantId int,
    orderId int,
    foreign key (plantId) references plants(id),
    foreign key (orderId) references orders(id)
);

create table images (
	id int primary key auto_increment,
    img text,
    plantId int,
    foreign key(plantId) references plants(id)
);
