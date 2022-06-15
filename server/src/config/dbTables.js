`CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    username VARCHAR(100) UNIQUE NOT NULL,   
    password VARCHAR(100) NOT NULL,
    role INTEGER NOT NULL`



`CREATE TABLE IF NOT EXISTS products
      (id SERIAL PRIMARY KEY,
      product_name VARCHAR(100) NOT NULL,
      manufacturer VARCHAR(100) NOT NULL,
      model VARCHAR(100) NOT NULL,
      year VARCHAR(10) NOT NULL`;
  