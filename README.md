## Instalación

### 1. Instalación de la Base de Datos

1. Inicia sesión en tu servidor de PostgreSQL.
2. Crea la base de datos `todo_app`:

    ```sql
    CREATE DATABASE todo_app;
    ```

3. Crea la tabla `tasks`:

    ```sql
    CREATE TABLE tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT FALSE,
        deletedAt TIMESTAMP
    );
    ```

4. Inserta datos de ejemplo en la tabla:

    ```sql
    INSERT INTO tasks (title, description, completed) VALUES 
    ('Primera tarea', 'Descripción de la primera tarea', false),
    ('Segunda tarea', 'Descripción de la segunda tarea', false),
    ('Tercera tarea', 'Descripción de la tercera tarea', true);
    ```

### 2. Instalación del Backend

1. Navega a la carpeta del backend:

    ```bash
    cd todo-nest
    ```

2. Instala las dependencias del backend:

    ```bash
    npm install
    ```

4. Inicia el servidor de la API:

    ```bash
    npm run start
    ```

### 3. Instalación del Frontend

1. Navega al directorio del frontend:

    ```bash
    cd todo-astro
    ```

2. Instala las dependencias del frontend:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo del frontend:

    ```bash
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:3000`.
