USE vaccun;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Insertar usuario admin con contraseña encriptada (hash SHA256 base64)
INSERT INTO usuarios (username, password)
VALUES ('admin', SHA2('admin', 256));

CREATE TABLE paciente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  cui BIGINT NOT NULL UNIQUE,
  nacimiento DATE NOT NULL,
  direccion VARCHAR(200),
  telefono INT
);

CREATE TABLE personal_salud (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  cui BIGINT,
  ue VARCHAR(150)
);

CREATE TABLE vacuna (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo_vacuna INT,
  fecha_aplicacion DATE,
  lote VARCHAR(20),
  persona_administra INT,
  FOREIGN KEY (persona_administra) REFERENCES personal_salud(id)
);