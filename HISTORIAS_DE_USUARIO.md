# Historias de Usuario: CRUD To-Do con Nest.js y Astro

Este archivo contiene las historias de usuario para el proyecto de CRUD To-Do, implementado con **Nest.js** en el backend y **Astro** en el frontend. Cada historia de usuario incluye una descripción, criterios de aceptación y posibles tareas técnicas.

---

## Historia 1: Crear una tarea
- **Descripción:**  
  Como usuario, quiero poder crear una nueva tarea en la lista de pendientes para organizar mis actividades diarias.

- **Criterios de Aceptación:**  
  - Existe un formulario en la interfaz para ingresar el título y la descripción de la tarea.
  - Al enviar el formulario, la tarea se guarda en la base de datos.
  - La lista se actualiza automáticamente para incluir la nueva tarea.

- **Tareas Técnicas:**  
  - Crear el endpoint POST en el backend para recibir y guardar tareas.
  - Diseñar el formulario en el frontend para enviar las tareas.
  - Implementar validación de campos en el backend y frontend.

---

## Historia 2: Leer todas las tareas
- **Descripción:**  
  Como usuario, quiero poder visualizar todas las tareas pendientes en una lista para revisar mis actividades programadas.

- **Criterios de Aceptación:**  
  - Al acceder a la página principal, se muestra una lista de todas las tareas guardadas en la base de datos.
  - Cada tarea incluye el título, la descripción y un indicador de estado (pendiente o completada).

- **Tareas Técnicas:**  
  - Crear el endpoint GET en el backend para devolver todas las tareas.
  - Consumir el endpoint desde el frontend y mostrar las tareas en una lista.
  - Manejar estados de carga y errores en el frontend.

---

## Historia 3: Actualizar una tarea
- **Descripción:**  
  Como usuario, quiero poder actualizar los detalles de una tarea existente para reflejar cambios en mis pendientes.

- **Criterios de Aceptación:**  
  - Existe un botón de edición junto a cada tarea en la lista.
  - Al hacer clic en el botón, se despliega un formulario para modificar el título o la descripción.
  - Al guardar los cambios, la tarea actualizada se refleja en la lista y en la base de datos.

- **Tareas Técnicas:**  
  - Crear el endpoint PUT en el backend para actualizar las tareas.
  - Implementar el formulario de edición en el frontend.
  - Validar que la tarea existe antes de actualizarla.

---

## Historia 4: Eliminar una tarea
- **Descripción:**  
  Como usuario, quiero poder eliminar una tarea que ya no necesito para mantener mi lista organizada.

- **Criterios de Aceptación:**  
  - Existe un botón de eliminación junto a cada tarea en la lista.
  - Al hacer clic en el botón, la tarea se elimina de la base de datos y desaparece de la lista en la interfaz.

- **Tareas Técnicas:**  
  - Crear el endpoint DELETE en el backend para eliminar tareas por ID.
  - Conectar el botón de eliminación del frontend con el endpoint del backend.
  - Manejar confirmaciones o mensajes de éxito tras eliminar la tarea.

---

## Historia 5: Marcar una tarea como completada
- **Descripción:**  
  Como usuario, quiero poder marcar una tarea como completada para identificar claramente qué actividades ya terminé.

- **Criterios de Aceptación:**  
  - Existe un checkbox o botón para marcar una tarea como completada.
  - Al marcar una tarea, su estado cambia en la base de datos.
  - Las tareas completadas se muestran con un estilo visual diferente (por ejemplo, tachadas o en color gris).

- **Tareas Técnicas:**  
  - Crear el endpoint PUT en el backend para actualizar el estado de las tareas.
  - Implementar la funcionalidad del checkbox o botón en el frontend.
  - Actualizar dinámicamente el diseño de las tareas completadas.

---

## Extras Opcionales

### Filtro de tareas por estado
- **Descripción:**  
  Como usuario, quiero filtrar las tareas por estado (pendientes o completadas) para enfocarme en las actividades relevantes.

- **Criterios de Aceptación:**  
  - Botones o pestañas permiten seleccionar "Pendientes", "Completadas" o "Todas".
  - La lista de tareas se actualiza dinámicamente según el filtro seleccionado.

---

### Autenticación de usuarios
- **Descripción:**  
  Como usuario registrado, quiero que mis tareas estén asociadas a mi cuenta para que sean privadas y personalizadas.

- **Criterios de Aceptación:**  
  - Existe un sistema de inicio de sesión y registro de usuarios.
  - Las tareas se almacenan por usuario y solo son visibles para el propietario.

---
