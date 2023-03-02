create database tenisu_v1;
create table Roles (
	Id varchar(5) primary key,
    Name varchar(20)
);

create table Accounts (
	Email varchar(100) primary key,
    Password varchar(20),
    RoleId varchar(5),
    foreign key (RoleId) references Roles(Id)
    
);

create table CourtOwner(
	Email varchar(200) primary key,
    FullName nvarchar(100),
    Phone nvarchar(11),
    Dob date,
    Gender bit,
    Address nvarchar(300)
);

create table TennisCourt(
	Id varchar(20) primary key,
    Address nvarchar(200),
    Name nvarchar(100),
    Price float,
    OwnerId varchar(200),
    GroupCourt varchar(10),
    Rating float,
    Image varchar (300),
    foreign key (OwnerId) references CourtOwner(Email)
);

create table Customer(
	Email varchar (200) primary key,
    FullName nvarchar(100),
    Phone nvarchar(11),
    Dob date,
    Gender bit,
    Address nvarchar(300)
);

create table Booking(
	Id varchar(10) primary key,
    CusId varchar(200),
    CreateDate datetime default now(),
    StartTime varchar(7),
    EndTime varchar(7),
    Price float,
    CourtId varchar(20),
    BookingDate date,
    Status bit,
    CusName nvarchar(100),
    foreign key(CusId) references Customer(Email),
    foreign key(CourtId) references TennisCourt(Id)
);
drop table Booking;

insert into Customer(Email, FullName, Phone, Dob, Gender, Address)
values ('tienvm@gmail.com', 'Vo Minh Tien', '0346754988', '2000-02-01', 1, 'Le Van Viet');

INSERT INTO CourtOwner(`Email`, `FullName`, `Phone`, `Dob`, `Gender`, `Address`) 
VALUES ('tuan@gmail.com', 'Vu Anh Tuan', '0346525321', '2000-01-01', 1, 'SG Gateway');

insert into Booking(Id, CusId, StartTime, EndTime, Price, CourtId, BookingDate, Status, CusName)
values ("125", "tienvm@gmail.com", '18:00', '20:00', 250000, 'FPT', '2022-06-18', 1, 'Vo Minh Tien');

alter table Accounts modify Password text;

SELECT @@global.time_zone;
SET @@global.time_zone = '+7:00';
SET GLOBAL time_zone = '+7:00';

SET GLOBAL time_zone = '+7:00';
SET @@global.time_zone = '+7:00';


