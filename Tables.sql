-- Active: 1656521719943@@35.226.146.116@3306@silveira-21814656-eduardo-osiro

CREATE TABLE amaro_products(
     id VARCHAR(255) PRIMARY KEY NOT NULL,
     name VARCHAR(255)
);

CREATE TABLE amaro_tags(
     id VARCHAR(255) PRIMARY KEY NOT NULL,
     name VARCHAR(255)
);

CREATE TABLE amaro_tags_and_products(
     id_product VARCHAR(255) NOT NULL,
     id_tag VARCHAR(255) NOT NULL,
     FOREIGN KEY(id_product) REFERENCES amaro_products(id),
     FOREIGN KEY(id_tag) REFERENCES amaro_tags(id)
);