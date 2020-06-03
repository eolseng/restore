create sequence hibernate_sequence start with 1 increment by 1;
create table actual_products
(
    id         bigint not null,
    color_id   bigint,
    order_id   bigint,
    product_id bigint,
    size_id    bigint,
    primary key (id)
);
create table base_colors
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);
create table brands
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);
create table categories
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);
create table colors
(
    id            bigint not null,
    name          varchar(255),
    base_color_id bigint,
    brand_id      bigint,
    primary key (id)
);
create table colors_products
(
    colors_id   bigint not null,
    products_id bigint not null
);
create table genders
(
    id     bigint not null,
    gender varchar(255),
    primary key (id)
);
create table images
(
    id         bigint not null,
    color_name varchar(255),
    img_url    varchar(255),
    color_id   bigint,
    product_id bigint,
    primary key (id)
);
create table orders
(
    id            bigint not null,
    delivery_type varchar(255),
    user_id       bigint,
    primary key (id)
);
create table products
(
    id              bigint not null,
    description     varchar(255),
    name            varchar(255),
    brand_id        bigint,
    category_id     bigint,
    gender_id       bigint,
    sub_category_id bigint,
    primary key (id)
);
create table products_sizes
(
    products_id bigint not null,
    sizes_id    bigint not null
);
create table sizes
(
    id   bigint not null,
    size varchar(255),
    primary key (id)
);
create table sub_categories
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);
create table users
(
    id         bigint not null,
    first_name varchar(255),
    last_name  varchar(255),
    password   varchar(255),
    user_name  varchar(255),
    primary key (id)
);
alter table actual_products
    add constraint FK8feg6w4inxshenwbkcnuf14rd foreign key (color_id) references colors;
alter table actual_products
    add constraint FKptoowax21wfd5p2lgplyo62my foreign key (order_id) references orders;
alter table actual_products
    add constraint FKhuxtb0n7s8k4px149chucjj61 foreign key (product_id) references products;
alter table actual_products
    add constraint FK2mefmr56i7f1vmynd79hegduj foreign key (size_id) references sizes;
alter table colors
    add constraint FKtpftye88gkc4723hyinxers46 foreign key (base_color_id) references base_colors;
alter table colors
    add constraint FKn148ey4tn158gihyh2q3aybi0 foreign key (brand_id) references brands;
alter table colors_products
    add constraint FKktgd85j9mmyiy23ix8utj4ct0 foreign key (products_id) references products;
alter table colors_products
    add constraint FKj90jkgk4uot7gk2prd9mfec4w foreign key (colors_id) references colors;
alter table images
    add constraint FKmghfeyqfawt5x7vvenk9jh9eq foreign key (color_id) references colors;
alter table images
    add constraint FKghwsjbjo7mg3iufxruvq6iu3q foreign key (product_id) references products;
alter table orders
    add constraint FK32ql8ubntj5uh44ph9659tiih foreign key (user_id) references users;
alter table products
    add constraint FKa3a4mpsfdf4d2y6r8ra3sc8mv foreign key (brand_id) references brands;
alter table products
    add constraint FKog2rp4qthbtt2lfyhfo32lsw9 foreign key (category_id) references categories;
alter table products
    add constraint FKj0gej2h9bvwsij81v292xohex foreign key (gender_id) references genders;
alter table products
    add constraint FKno5p9kcr384tg56cbk8l9l6h2 foreign key (sub_category_id) references sub_categories;
alter table products_sizes
    add constraint FK5kmjbhgswv2c17la0fdxavxxj foreign key (sizes_id) references sizes;
alter table products_sizes
    add constraint FKmdr58ukqmem0vurfsyq4gv85o foreign key (products_id) references products;
