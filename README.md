# CuadernoNovedades
Demo de cuadernos de novedades


Manual de Usuario: Cuaderno de Novedades del Laboratorio
1. Introducción
Bienvenido al Manual de Usuario del Cuaderno de Novedades del Laboratorio. Esta aplicación ha sido diseñada para registrar, seguir y comunicar novedades y tareas entre los diferentes turnos y roles dentro del laboratorio. Permite una gestión centralizada de la información, mejorando la trazabilidad y eficiencia operativa. La aplicación cuenta con roles específicos (Administrador, Supervisor, Operario), cada uno con funcionalidades particulares.
2. Primeros Pasos
Para utilizar la aplicación:
•	Asegúrate de tener los archivos `index.html`, `app.js` y `style.css` en la misma carpeta en tu computadora.
•	Abre el archivo `index.html` con un navegador web moderno (como Google Chrome, Firefox, Edge, etc.).
•	La primera pantalla que verás será la de Inicio de Sesión.
3. Roles de Usuario
La aplicación define tres roles principales:
* Administrador: Responsable de la configuración del sistema, incluyendo la gestión de usuarios, la creación y configuración de los diferentes cuadernos (novedades y checklists), y la asignación de usuarios a dichos cuadernos.
* Supervisor: Tiene una visión general del estado de las novedades y checklists. Puede acceder a un tablero para monitorear todos los cuadernos por fecha y turno, y gestionar entradas en todos los cuadernos.
* Operario: Encargado de registrar las novedades diarias o completar los checklists para los cuadernos asignados.
4. Funcionalidades del Administrador
4.1. Inicio de Sesión
Ingresa con las credenciales de administrador (por defecto: Usuario `admin`, Contraseña `admin`).
4.2. Dashboard del Administrador
Al iniciar sesión, verás el Panel de Administrador con dos opciones principales:
* Gestionar Usuarios: Para crear, editar o eliminar cuentas de usuario.
* Gestionar Cuadernos: Para crear, editar o eliminar cuadernos de novedades o checklists.
4.3. Gestión de Usuarios
Desde esta sección, puedes:
* Crear un Nuevo Usuario:
•	Haz clic en el botón "+ Nuevo Usuario".
•	Completa el formulario con:
	 * Nombre de Usuario (para el login).
	 * Nombre Completo.
	 * Contraseña.
	 * Rol (Operario, Supervisor, Admin).
•	Haz clic en "Guardar Usuario".
* Editar un Usuario Existente:
•	En la tabla de usuarios, haz clic en el botón "Editar" de la fila correspondiente.
•	El formulario se llenará con los datos del usuario. Modifica los campos necesarios.
•	Si deseas cambiar la contraseña, ingresa la nueva. Si dejas el campo de contraseña vacío, no se modificará.
•	Haz clic en "Guardar Usuario".
* Eliminar un Usuario:
•	En la tabla de usuarios, haz clic en el botón "Eliminar".
•	Confirma la acción.
*Nota: No se puede eliminar al usuario "admin" principal ni al usuario con el que se ha iniciado sesión.*
4.4. Gestión de Cuadernos
Desde esta sección, puedes:
* Crear un Nuevo Cuaderno:
•	Haz clic en el botón "+ Nuevo Cuaderno".
•	Completa el formulario:
	 * ID del Cuaderno: Un identificador único (ej: `LAB-QUIMICA`, `CHK-EQUIPOS`).
	 * Nombre del Cuaderno: Un nombre descriptivo (ej: "Laboratorio de Química Analítica", "Checklist Pre-Operacional Equipos").
	 * Tipo de Cuaderno: `Novedades (Texto Libre)` o `Checklist (Lista de Tareas)`.
	 * Color del Cuaderno: Selecciona un color para identificar visualmente este cuaderno.
	 * Tareas del Checklist (Solo si el Tipo es "Checklist"): Ingresa las tareas, una por línea. Para agrupar tareas, utiliza `## ` seguido del nombre de la familia.
	 * Listas de Correo: Ingresa las direcciones de correo electrónico que recibirán notificaciones según la calificación de la entrada.
	 * Usuarios Operarios Asignados: Selecciona los usuarios que tendrán acceso para registrar entradas en este cuaderno.
•	Haz clic en "Guardar Cuaderno".
* Editar un Cuaderno Existente:
•	En la tabla de cuadernos, haz clic en "Editar".
•	Modifica los campos necesarios. El ID del cuaderno no se puede cambiar una vez creado.
•	Haz clic en "Guardar Cuaderno".
* Eliminar un Cuaderno:
•	En la tabla de cuadernos, haz clic en "Eliminar".
•	Confirma la acción.
5. Funcionalidades del Operario
5.1. Inicio de Sesión
Ingresa con tus credenciales de operario.
5.2. Dashboard del Operario
Al iniciar sesión, verás una lista de los cuadernos a los que tienes acceso. Cada cuaderno se mostrará como una tarjeta con su color definido.
5.3. Acceder a un Cuaderno
Al seleccionar un cuaderno, serás llevado a una vista de detalle. El contenido dependerá del tipo de cuaderno:
# 5.3.1. Para Cuadernos de Tipo "Novedades":
•	Ver Historial: Se mostrará una lista de todas las novedades registradas, ordenadas de más reciente a más antigua.
•	Registrar Nueva Novedad:
	* Haz clic en el botón "+ Registrar Nueva Novedad en este Cuaderno".
	* Completa los campos: Turno, Novedad, Calificación del Turno.
	* Haz clic en "Guardar Novedad".
# 5.3.2. Para Cuadernos de Tipo "Checklist":
•	Formulario de Checklist: Verás una tabla con las tareas definidas, agrupadas por familia si se han definido.
•	Historial de Checklists Guardados: Debajo del formulario, verás una lista de los checklists completados, ordenados del más reciente al más antiguo.
6. Funcionalidades del Supervisor
6.1. Inicio de Sesión
Ingresa con tus credenciales de supervisor.
6.2. Navegación del Supervisor
El supervisor es dirigido al "Tablero General". Desde la barra de navegación superior, tiene acceso a:
* Tablero General: Vista consolidada del estado de todos los cuadernos.
* Gestionar Novedades: Lista de todos los cuadernos para registrar/ver entradas detalladas.
6.3. Tablero General de Novedades
* Selector de Fecha: Permite elegir la fecha para visualizar las novedades.
* Grilla de Cuadernos vs. Turnos: Muestra una fila por cuaderno y columnas por turnos. Cada celda muestra una abreviatura y un color representando la calificación de la última entrada registrada.
* Resumen del Día: Contadores de cuadernos con/sin novedades y total de entradas registradas.
6.4. Gestionar Novedades por Cuaderno
El supervisor ve una lista de todos los cuadernos del sistema. Al hacer clic en un cuaderno, accede a la misma vista de detalle que vería un operario.
7. Cerrar Sesión
Haz clic en el botón "Cerrar Sesión" ubicado en la esquina superior derecha para salir de la aplicación.
---
Este manual cubre las funcionalidades principales de la aplicación.

