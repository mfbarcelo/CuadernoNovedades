// app.js - Lógica para el Cuaderno de Novedades del Laboratorio

document.addEventListener('DOMContentLoaded', () => {
    // --- SELECTORES DEL DOM ---
    // Vistas
    const loginView = document.getElementById('loginView');
    const adminDashboardView = document.getElementById('adminDashboardView');
    const adminGestionUsuariosView = document.getElementById('adminGestionUsuariosView');
    const adminGestionCuadernosView = document.getElementById('adminGestionCuadernosView');
    const operarioDashboardView = document.getElementById('operarioDashboardView');
    const operarioCuadernoDetalleView = document.getElementById('operarioCuadernoDetalleView'); 
    const supervisorDashboardView = document.getElementById('supervisorDashboardView'); 
    const supervisorGestionNovedadesView = document.getElementById('supervisorGestionNovedadesView'); 
    const mainNav = document.getElementById('mainNav');

    // Contenedores de Dashboards específicos
    const operarioCuadernosContainer = document.getElementById('operarioCuadernosContainer');
    const operarioWelcomeMessage = document.getElementById('operarioWelcomeMessage');
    const detalleCuadernoNombre = document.getElementById('detalleCuadernoNombre'); 
    const listaNovedadesCuadernoOperario = document.getElementById('listaNovedadesCuadernoOperario');
    const btnVolverADashboardUsuario = document.getElementById('btnVolverADashboardUsuario'); 
    const btnAbrirFormNovedadDesdeDetalle = document.getElementById('btnAbrirFormNovedadDesdeDetalle');
    
    // Contenedores para contenido dinámico en operarioCuadernoDetalleView
    const detalleContenidoNovedades = document.getElementById('detalleContenidoNovedades');
    const detalleContenidoChecklist = document.getElementById('detalleContenidoChecklist');
    const listaTareasChecklist = document.getElementById('listaTareasChecklist'); 
    const formChecklist = document.getElementById('formChecklist');
    const checklistCuadernoIdInput = document.getElementById('checklistCuadernoId');
    const checklistTurnoSelect = document.getElementById('checklistTurno');
    const checklistObservacionesTextarea = document.getElementById('checklistObservaciones'); 
    const checklistCalificacionSelect = document.getElementById('checklistCalificacion');
    const checklistFormError = document.getElementById('checklistFormError');
    const historialChecklistsCuaderno = document.getElementById('historialChecklistsCuaderno');


    // Elementos del Dashboard Supervisor (Tablero General)
    const supervisorDatePicker = document.getElementById('supervisorDatePicker');
    const supervisorGridNovedadesBody = document.getElementById('supervisorGridNovedadesBody');
    const totalCuadernosConNovedadesSpan = document.getElementById('totalCuadernosConNovedades');
    const totalCuadernosSinNovedadesSpan = document.getElementById('totalCuadernosSinNovedades');
    const totalNovedadesRegistradasSpan = document.getElementById('totalNovedadesRegistradas');

    // Elementos de Supervisor Gestión Novedades
    const supervisorGestionWelcomeMessage = document.getElementById('supervisorGestionWelcomeMessage');
    const supervisorGestionCuadernosContainer = document.getElementById('supervisorGestionCuadernosContainer');


    // Modales
    const formNovedadModal = document.getElementById('formNovedadModal');
    const detalleNovedadesModal = document.getElementById('detalleNovedadesModal');
    const detalleNovedadesTitle = document.getElementById('detalleNovedadesTitle');
    const detalleNovedadesContent = document.getElementById('detalleNovedadesContent');
    const closeDetalleNovedadesModalBtn = document.getElementById('closeDetalleNovedadesModal');
    
    // Modal de Simulación de Email
    const emailSimulacionModal = document.getElementById('emailSimulacionModal');
    const emailSimDestinatarios = document.getElementById('emailSimDestinatarios');
    const emailSimAsunto = document.getElementById('emailSimAsunto');
    const emailSimCuerpo = document.getElementById('emailSimCuerpo');
    const closeEmailSimulacionModalBtn = document.getElementById('closeEmailSimulacionModal');
    const okEmailSimulacionModalBtn = document.getElementById('okEmailSimulacionModal');


    if (formNovedadModal) formNovedadModal.style.display = 'none';
    if (detalleNovedadesModal) detalleNovedadesModal.style.display = 'none';
    if (emailSimulacionModal) emailSimulacionModal.style.display = 'none'; // Ocultar al inicio

    // Formularios y Botones Generales
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const currentUserDisplay = document.getElementById('currentUserDisplay');
    const loginError = document.getElementById('loginError');
    const roleSpecificNav = document.getElementById('roleSpecificNav');

    // Elementos de Gestión de Usuarios
    const btnNuevoUsuario = document.getElementById('btnNuevoUsuario');
    const formNuevoUsuarioContainer = document.getElementById('formNuevoUsuarioContainer');
    const formUsuario = document.getElementById('formUsuario');
    const formUsuarioTitle = document.getElementById('formUsuarioTitle');
    const usuarioIdToEditInput = document.getElementById('usuarioIdToEdit');
    const usuarioUsernameInput = document.getElementById('usuarioUsername');
    const usuarioNombreCompletoInput = document.getElementById('usuarioNombreCompleto');
    const usuarioPasswordInput = document.getElementById('usuarioPassword');
    const usuarioRolInput = document.getElementById('usuarioRol');
    const cancelarFormUsuarioBtn = document.getElementById('cancelarFormUsuario');
    const usuarioFormError = document.getElementById('usuarioFormError');
    const tablaUsuariosBody = document.getElementById('tablaUsuariosBody');

    // Elementos de Gestión de Cuadernos
    const btnNuevoCuaderno = document.getElementById('btnNuevoCuaderno');
    const formNuevoCuadernoContainer = document.getElementById('formNuevoCuadernoContainer');
    const formCuaderno = document.getElementById('formCuaderno');
    const formCuadernoTitle = document.getElementById('formCuadernoTitle');
    const cuadernoIdToEditInput = document.getElementById('cuadernoIdToEdit');
    const cuadernoIdInput = document.getElementById('cuadernoId');
    const cuadernoNombreInput = document.getElementById('cuadernoNombre');
    const cuadernoTipoSelect = document.getElementById('cuadernoTipo'); 
    const cuadernoTareasChecklistContainer = document.getElementById('cuadernoTareasChecklistContainer'); 
    const cuadernoTareasDefinicionTextarea = document.getElementById('cuadernoTareasDefinicion'); 
    const cuadernoColorSelect = document.getElementById('cuadernoColor'); 
    const emailConfigUnificadoDiv = document.getElementById('emailConfigUnificado'); 
    const cuadernoEmailsTodoRealizadoInput = document.getElementById('cuadernoEmailsTodoRealizado');
    const cuadernoEmailsConPendientesInput = document.getElementById('cuadernoEmailsConPendientes');
    const emailConfigNovedadesDiv = document.getElementById('emailConfigNovedades'); 

    const cuadernoUsuariosAsignadosContainer = document.getElementById('cuadernoUsuariosAsignadosContainer');
    const cancelarFormCuadernoBtn = document.getElementById('cancelarFormCuaderno');
    const cuadernoFormError = document.getElementById('cuadernoFormError');
    const tablaCuadernosBody = document.getElementById('tablaCuadernosBody');

    // Elementos del Formulario de Novedad
    const formNovedad = document.getElementById('formNovedad');
    const formNovedadTitle = document.getElementById('formNovedadTitle');
    const novedadCuadernoIdInput = document.getElementById('novedadCuadernoId'); 
    const novedadCuadernoNombreInput = document.getElementById('novedadCuadernoNombre'); 
    const novedadTurnoSelect = document.getElementById('novedadTurno');
    const novedadTextoTextarea = document.getElementById('novedadTexto');
    const novedadCalificacionSelect = document.getElementById('novedadCalificacion');
    const closeFormNovedadModalBtn = document.getElementById('closeFormNovedadModal');
    const cancelNovedadBtn = document.getElementById('cancelNovedad');
    const novedadFormError = document.getElementById('novedadFormError');


    // --- ESTADO DE LA APLICACIÓN ---
    let currentUser = null;
    let usuarios = [];
    let cuadernos = [];
    let novedades = [];
    let checklistEntradas = []; 
    let editandoUsuarioId = null;
    let editandoCuadernoId = null;
    let cuadernoActualOperario = null;  
    let vistaAnteriorParaDetalleCuaderno = null; 

    const VISTAS = {
        LOGIN: 'loginView',
        ADMIN_DASHBOARD: 'adminDashboardView',
        ADMIN_GESTION_USUARIOS: 'adminGestionUsuariosView',
        ADMIN_GESTION_CUADERNOS: 'adminGestionCuadernosView',
        OPERARIO_DASHBOARD: 'operarioDashboardView',
        OPERARIO_CUADERNO_DETALLE: 'operarioCuadernoDetalleView', 
        SUPERVISOR_DASHBOARD: 'supervisorDashboardView', 
        SUPERVISOR_GESTION_NOVEDADES: 'supervisorGestionNovedadesView', 
    };

    const COLORES_CUADERNO = [
        { nombre: 'Gris Claro (Default)', clase: 'bg-slate-200 text-slate-800 hover:bg-slate-300' },
        { nombre: 'Rojo', clase: 'bg-red-500 text-white hover:bg-red-600' },
        { nombre: 'Amarillo', clase: 'bg-yellow-400 text-slate-800 hover:bg-yellow-500' },
        { nombre: 'Verde', clase: 'bg-green-500 text-white hover:bg-green-600' },
        { nombre: 'Azul', clase: 'bg-blue-500 text-white hover:bg-blue-600' },
        { nombre: 'Índigo', clase: 'bg-indigo-500 text-white hover:bg-indigo-600' },
        { nombre: 'Púrpura', clase: 'bg-purple-500 text-white hover:bg-purple-600' },
        { nombre: 'Rosa', clase: 'bg-pink-500 text-white hover:bg-pink-600' },
        { nombre: 'Turquesa', clase: 'bg-teal-500 text-white hover:bg-teal-600' },
        { nombre: 'Naranja', clase: 'bg-orange-500 text-white hover:bg-orange-600' },
    ];

    const TURNOS_LAB = ['Mañana', 'Tarde', 'Noche']; 
    const ESTADOS_TAREA_CHECKLIST = ['Pendiente', 'En Proceso', 'Realizado', 'No corresponde']; 
    const CALIFICACIONES_UNIFICADAS = { 
        TODO_REALIZADO: 'Todo realizado',
        CON_TAREAS_PENDIENTES: 'Con tareas pendientes'
    };


    // --- LÓGICA DE DATOS (localStorage) ---
    function guardarUsuarios() { localStorage.setItem('cuadernoNovedades_usuarios', JSON.stringify(usuarios)); }
    function guardarCuadernos() { localStorage.setItem('cuadernoNovedades_cuadernos', JSON.stringify(cuadernos)); }
    function guardarNovedades() { localStorage.setItem('cuadernoNovedades_novedades', JSON.stringify(novedades)); }
    function guardarChecklistEntradas() { localStorage.setItem('cuadernoNovedades_checklistEntradas', JSON.stringify(checklistEntradas));} 

    function inicializarDatos() {
        try {
            const storedUsuariosData = localStorage.getItem('cuadernoNovedades_usuarios');
            if (storedUsuariosData) {
                const parsedUsuarios = JSON.parse(storedUsuariosData);
                if (Array.isArray(parsedUsuarios) && (parsedUsuarios.length === 0 || (parsedUsuarios[0] && typeof parsedUsuarios[0].username !== 'undefined' && typeof parsedUsuarios[0].password !== 'undefined'))) {
                    usuarios = parsedUsuarios;
                } else {
                    console.warn("Stored usuarios data is invalid or malformed. Re-seeding.");
                    throw new Error("Invalid user data structure in localStorage"); 
                }
            } else {
                 console.warn("No stored usuarios data found. Using seed data.");
                throw new Error("No stored usuarios data found."); 
            }
        } catch (error) {
            console.warn(`Could not load users from localStorage (${error.message}). Using seed data.`);
            usuarios = [
                { id: 'admin01', username: 'admin', password: 'admin', rol: 'admin', nombreCompleto: 'Administrador Principal' },
                { id: 'operario01', username: 'operario1', password: 'op1', rol: 'operario', nombreCompleto: 'Juan Pérez (Op.)' },
                { id: 'operario02', username: 'operario2', password: 'op2', rol: 'operario', nombreCompleto: 'Ana Gómez (Op.)' },
                { id: 'supervisor01', username: 'supervisor1', password: 'sup1', rol: 'supervisor', nombreCompleto: 'Carlos López (Sup.)' }
            ];
            guardarUsuarios();
        }

        const storedCuadernos = localStorage.getItem('cuadernoNovedades_cuadernos');
        if (storedCuadernos) {
            try {
                const parsedCuadernos = JSON.parse(storedCuadernos);
                if(Array.isArray(parsedCuadernos)) {
                    cuadernos = parsedCuadernos;
                } else { throw new Error("Stored cuadernos is not an array"); }
            } catch (e) {
                console.warn("Error parsing storedCuadernos, using seed data.", e);
                cuadernos = []; 
            }
        }
        if (!cuadernos || cuadernos.length === 0) { 
             cuadernos = [
                {
                    id: 'LAB-HEMA', nombre: 'Laboratorio Central - Hematología', tipo: 'novedades', usuariosAsignados: ['operario01', 'operario02'],
                    colorClase: 'bg-red-500 text-white hover:bg-red-600', 
                    emailsTodoRealizado: 'jefe.lab@example.com,gerencia@example.com', 
                    emailsConPendientes: 'jefe.lab@example.com,alerta.calidad@example.com', 
                    tareasDefinicion: [] 
                },
                {
                    id: 'LAB-MICRO', nombre: 'Laboratorio de Microbiología', tipo: 'novedades', usuariosAsignados: ['operario01'],
                    colorClase: 'bg-blue-500 text-white hover:bg-blue-600', 
                    emailsTodoRealizado: 'micro.jefe@example.com',
                    emailsConPendientes: 'micro.jefe@example.com,alerta.calidad@example.com',
                    tareasDefinicion: []
                },
                 {
                    id: 'CHK-LIMPIEZA', nombre: 'Checklist Limpieza General', tipo: 'checklist', usuariosAsignados: ['operario01', 'operario02'],
                    colorClase: 'bg-green-500 text-white hover:bg-green-600', 
                    emailsTodoRealizado: 'supervisor.limpieza@example.com', 
                    emailsConPendientes: 'jefe.calidad@example.com', 
                    tareasDefinicion: [ 
                        { nombreFamilia: "Área de Recepción", tareas: ["Limpiar mostrador", "Verificar folletos"] },
                        { nombreFamilia: "Equipos", tareas: ["Calibrar equipo A", "Revisar mantenimiento equipo B"] }
                    ] 
                }
            ];
            guardarCuadernos();
        }


        const storedNovedades = localStorage.getItem('cuadernoNovedades_novedades');
        if (storedNovedades) {
            try {
                const parsedNovedades = JSON.parse(storedNovedades);
                 if(Array.isArray(parsedNovedades)) {
                    novedades = parsedNovedades;
                } else { throw new Error("Stored novedades is not an array"); }
            } catch(e) {
                console.warn("Error parsing storedNovedades, defaulting to empty array.", e);
                novedades = [];
            }
        } else {
            novedades = []; 
        }
        guardarNovedades(); 


        const storedChecklistEntradas = localStorage.getItem('cuadernoNovedades_checklistEntradas'); 
        if (storedChecklistEntradas) {
            try {
                const parsedChecklists = JSON.parse(storedChecklistEntradas);
                if(Array.isArray(parsedChecklists)) {
                    checklistEntradas = parsedChecklists;
                } else { throw new Error("Stored checklistEntradas is not an array"); }
            } catch(e) {
                 console.warn("Error parsing storedChecklistEntradas, defaulting to empty array.", e);
                checklistEntradas = [];
            }
        } else {
            checklistEntradas = [];
        }
        guardarChecklistEntradas(); 

        console.log("Datos inicializados/cargados:", { usuarios, cuadernos, novedades, checklistEntradas });
    }

    // --- LÓGICA DE NAVEGACIÓN Y VISTAS ---
    function mostrarVista(idVista, params = {}) {
        Object.values(VISTAS).forEach(vistaId => {
            const el = document.getElementById(vistaId);
            if (el) el.classList.add('hidden-view');
        });
        mainNav.classList.add('hidden-view');

        if (formNovedadModal) formNovedadModal.style.display = 'none';
        if (detalleNovedadesModal) detalleNovedadesModal.style.display = 'none';
        if (emailSimulacionModal) emailSimulacionModal.style.display = 'none'; 
        if (formNuevoUsuarioContainer) formNuevoUsuarioContainer.classList.add('hidden-view');
        if (formNuevoCuadernoContainer) formNuevoCuadernoContainer.classList.add('hidden-view');

        const vistaAMostrar = document.getElementById(idVista);
        if (vistaAMostrar) {
            vistaAMostrar.classList.remove('hidden-view');
            if (idVista !== VISTAS.LOGIN && currentUser) {
                mainNav.classList.remove('hidden-view');
                currentUserDisplay.textContent = `Usuario: ${currentUser.nombreCompleto} (${currentUser.rol})`;
                actualizarNavegacionPorRol();
            }
            if (idVista === VISTAS.ADMIN_GESTION_USUARIOS) renderizarTablaUsuarios();
            else if (idVista === VISTAS.ADMIN_GESTION_CUADERNOS) renderizarTablaCuadernos();
            else if (idVista === VISTAS.OPERARIO_DASHBOARD) renderizarDashboardOperario();
            else if (idVista === VISTAS.SUPERVISOR_GESTION_NOVEDADES) renderizarSupervisorGestionNovedadesView(); 
            else if (idVista === VISTAS.OPERARIO_CUADERNO_DETALLE && params.cuadernoId) {
                 mostrarDetalleCuadernoOperario(params.cuadernoId, params.cuadernoNombre, params.vistaRetorno || VISTAS.OPERARIO_DASHBOARD);
            } else if (idVista === VISTAS.SUPERVISOR_DASHBOARD) {
                if (supervisorDatePicker) {
                    if (!supervisorDatePicker.value) { 
                         supervisorDatePicker.valueAsDate = new Date();
                    }
                    renderizarDashboardSupervisor(); 
                }
            }
        } else {
            console.error(`Vista con ID ${idVista} no encontrada.`);
            if(document.getElementById(VISTAS.LOGIN)) document.getElementById(VISTAS.LOGIN).classList.remove('hidden-view');
        }
    }
    
    function actualizarNavegacionPorRol() {
        roleSpecificNav.innerHTML = '';
        if (!currentUser) return;
        const createButton = (text, id, viewTarget) => { 
            const button = document.createElement('button');
            button.textContent = text;
            button.id = id;
            button.className = 'bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1 px-3 rounded-md text-sm mr-2 transition duration-150';
            button.addEventListener('click', () => mostrarVista(viewTarget));
            return button;
        };
        if (currentUser.rol === 'admin') {
            roleSpecificNav.appendChild(createButton('Dashboard Admin', 'navAdminDashboard', VISTAS.ADMIN_DASHBOARD));
            roleSpecificNav.appendChild(createButton('Usuarios', 'navGestionUsuarios', VISTAS.ADMIN_GESTION_USUARIOS));
            roleSpecificNav.appendChild(createButton('Cuadernos', 'navGestionCuadernos', VISTAS.ADMIN_GESTION_CUADERNOS));
        } else if (currentUser.rol === 'supervisor') {
            roleSpecificNav.appendChild(createButton('Tablero General', 'navSupervisorDashboard', VISTAS.SUPERVISOR_DASHBOARD));
            roleSpecificNav.appendChild(createButton('Gestionar Novedades', 'navSupervisorGestion', VISTAS.SUPERVISOR_GESTION_NOVEDADES));
        }
    }

    // --- LÓGICA DE AUTENTICACIÓN ---
    function handleLogin(event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        loginError.textContent = '';
        
        console.log("Intentando login con:", usernameInput, passwordInput);
        console.log("Usuarios disponibles:", JSON.parse(JSON.stringify(usuarios))); 


        const usuarioEncontrado = usuarios.find(u => u.username === usernameInput && u.password === passwordInput);

        if (usuarioEncontrado) {
            currentUser = { id: usuarioEncontrado.id, username: usuarioEncontrado.username, rol: usuarioEncontrado.rol, nombreCompleto: usuarioEncontrado.nombreCompleto };
            console.log("Usuario logueado:", currentUser);
            if (currentUser.rol === 'admin') mostrarVista(VISTAS.ADMIN_DASHBOARD);
            else if (currentUser.rol === 'operario') mostrarVista(VISTAS.OPERARIO_DASHBOARD);
            else if (currentUser.rol === 'supervisor') mostrarVista(VISTAS.SUPERVISOR_DASHBOARD); 
            loginForm.reset();
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos.';
            console.warn("Intento de login fallido para:", usernameInput);
        }
    }

    function handleLogout() {
        currentUser = null;
        cuadernoActualOperario = null; 
        vistaAnteriorParaDetalleCuaderno = null;
        mostrarVista(VISTAS.LOGIN);
        console.log("Usuario deslogueado.");
    }

    // --- GESTIÓN DE USUARIOS (ADMIN) ---
    function toggleFormularioUsuario(mostrar = true, usuarioParaEditar = null) {
        if (mostrar) {
            editandoUsuarioId = usuarioParaEditar ? usuarioParaEditar.id : null;
            formUsuarioTitle.textContent = usuarioParaEditar ? 'Editar Usuario' : 'Agregar Nuevo Usuario';
            usuarioUsernameInput.value = usuarioParaEditar ? usuarioParaEditar.username : '';
            usuarioNombreCompletoInput.value = usuarioParaEditar ? usuarioParaEditar.nombreCompleto : '';
            usuarioPasswordInput.value = ''; 
            usuarioPasswordInput.placeholder = usuarioParaEditar ? '(Dejar en blanco para no cambiar)' : 'Contraseña';
            usuarioPasswordInput.required = !usuarioParaEditar; 
            usuarioRolInput.value = usuarioParaEditar ? usuarioParaEditar.rol : 'operario';
            usuarioIdToEditInput.value = editandoUsuarioId || '';
            formNuevoUsuarioContainer.classList.remove('hidden-view');
            usuarioFormError.textContent = '';
        } else {
            formNuevoUsuarioContainer.classList.add('hidden-view');
            formUsuario.reset();
            editandoUsuarioId = null;
            usuarioPasswordInput.placeholder = 'Contraseña';
            usuarioPasswordInput.required = true; 
        }
    }

    function renderizarTablaUsuarios() {
        if (!tablaUsuariosBody) return;
        tablaUsuariosBody.innerHTML = ''; 
        usuarios.forEach(user => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-slate-50 transition-colors';
            tr.innerHTML = `
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.id}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.username}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.nombreCompleto}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.rol}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">
                    <button data-id="${user.id}" class="edit-user-btn text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                    <button data-id="${user.id}" class="delete-user-btn text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                </td>
            `;
            tablaUsuariosBody.appendChild(tr);
        });
    }
    
    function handleGuardarUsuario(event) {
        event.preventDefault();
        usuarioFormError.textContent = '';
        const username = usuarioUsernameInput.value.trim();
        const nombreCompleto = usuarioNombreCompletoInput.value.trim();
        const password = usuarioPasswordInput.value; 
        const rol = usuarioRolInput.value;

        if (!username || !nombreCompleto || !rol) {
            usuarioFormError.textContent = 'Nombre de usuario, nombre completo y rol son obligatorios.';
            return;
        }
        if (editandoUsuarioId) {
            const userIndex = usuarios.findIndex(u => u.id === editandoUsuarioId);
            if (userIndex > -1) {
                if (usuarios.some(u => u.username === username && u.id !== editandoUsuarioId)) {
                    usuarioFormError.textContent = 'Ese nombre de usuario ya está en uso por otro usuario.';
                    return;
                }
                usuarios[userIndex].username = username;
                usuarios[userIndex].nombreCompleto = nombreCompleto;
                usuarios[userIndex].rol = rol;
                if (password) { 
                    usuarios[userIndex].password = password;
                }
                console.log("Usuario editado:", usuarios[userIndex]);
            }
        } else {
            if (!password) {
                 usuarioFormError.textContent = 'La contraseña es obligatoria para nuevos usuarios.';
                 return;
            }
            if (usuarios.find(u => u.username === username)) {
                usuarioFormError.textContent = 'El nombre de usuario ya existe.';
                return;
            }
            const nuevoUsuario = {
                id: 'user_' + Date.now(), 
                username, nombreCompleto, password, rol
            };
            usuarios.push(nuevoUsuario);
            console.log("Nuevo usuario creado:", nuevoUsuario);
        }
        guardarUsuarios();
        renderizarTablaUsuarios();
        toggleFormularioUsuario(false); 
    }

    function handleEditarUsuarioClick(userId) {
        const usuarioAEditar = usuarios.find(u => u.id === userId);
        if (usuarioAEditar) toggleFormularioUsuario(true, usuarioAEditar);
        else console.error("No se encontró el usuario para editar con ID:", userId);
    }

    function handleEliminarUsuarioClick(userId) {
        const usuarioAEliminar = usuarios.find(u => u.id === userId);
        if (!usuarioAEliminar) {
            console.error("No se encontró el usuario para eliminar con ID:", userId);
            return;
        }
        if (usuarioAEliminar.username === 'admin') {
            alert("No se puede eliminar al usuario administrador principal.");
            return;
        }
        if (currentUser && currentUser.id === userId) {
            alert("No puedes eliminarte a ti mismo.");
            return;
        }
        if (confirm(`¿Estás seguro de que quieres eliminar al usuario "${usuarioAEliminar.nombreCompleto}"? Esta acción no se puede deshacer.`)) {
            usuarios = usuarios.filter(u => u.id !== userId);
            guardarUsuarios();
            renderizarTablaUsuarios();
            console.log("Usuario eliminado:", userId);
            if (editandoUsuarioId === userId) toggleFormularioUsuario(false);
        }
    }

    // --- GESTIÓN DE CUADERNOS (ADMIN) ---
    function popularSelectUsuariosOperarios(selectedUserIds = []) {
        if (!cuadernoUsuariosAsignadosContainer) return;
        cuadernoUsuariosAsignadosContainer.innerHTML = ''; 
        const operarios = usuarios.filter(u => u.rol === 'operario');

        if (operarios.length === 0) {
            cuadernoUsuariosAsignadosContainer.innerHTML = '<p class="text-sm text-slate-500">No hay usuarios operarios para asignar.</p>';
            return;
        }

        operarios.forEach(op => {
            const checkboxId = `user-assign-${op.id}`;
            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.className = 'flex items-center space-x-2 p-1 hover:bg-slate-100 rounded cursor-pointer';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = checkboxId;
            checkbox.value = op.id;
            checkbox.className = 'form-checkbox h-4 w-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500';
            if (selectedUserIds.includes(op.id)) {
                checkbox.checked = true;
            }
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(`${op.nombreCompleto} (${op.username})`));
            cuadernoUsuariosAsignadosContainer.appendChild(label);
        });
    }

    function popularSelectorColorCuaderno(claseColorSeleccionada = '') {
        if (!cuadernoColorSelect) return;
        cuadernoColorSelect.innerHTML = ''; 
        COLORES_CUADERNO.forEach(color => {
            const option = document.createElement('option');
            option.value = color.clase;
            option.textContent = color.nombre;
            if (color.clase === claseColorSeleccionada) {
                option.selected = true;
            }
            cuadernoColorSelect.appendChild(option);
        });
    }

    function toggleFormularioCuaderno(mostrar = true, cuadernoParaEditar = null) {
        if (mostrar) {
            editandoCuadernoId = cuadernoParaEditar ? cuadernoParaEditar.id : null;
            formCuadernoTitle.textContent = cuadernoParaEditar ? 'Editar Cuaderno' : 'Agregar Nuevo Cuaderno';
            
            cuadernoIdInput.value = cuadernoParaEditar ? cuadernoParaEditar.id : '';
            cuadernoIdInput.readOnly = !!cuadernoParaEditar; 
            
            cuadernoNombreInput.value = cuadernoParaEditar ? cuadernoParaEditar.nombre : '';
            cuadernoTipoSelect.value = cuadernoParaEditar ? cuadernoParaEditar.tipo : 'novedades'; 
            popularSelectorColorCuaderno(cuadernoParaEditar ? cuadernoParaEditar.colorClase : COLORES_CUADERNO[0].clase); 

            const esChecklist = cuadernoTipoSelect.value === 'checklist';
            if (emailConfigUnificadoDiv) emailConfigUnificadoDiv.classList.remove('hidden-view'); 
            if (emailConfigNovedadesDiv) emailConfigNovedadesDiv.classList.add('hidden-view'); 
            
            if (esChecklist) {
                cuadernoTareasChecklistContainer.classList.remove('hidden-view');
                let tareasTexto = "";
                if (cuadernoParaEditar && Array.isArray(cuadernoParaEditar.tareasDefinicion)) {
                    cuadernoParaEditar.tareasDefinicion.forEach(familia => {
                        tareasTexto += `## ${familia.nombreFamilia}\n`;
                        (familia.tareas || []).forEach(tarea => {
                            tareasTexto += `${tarea}\n`;
                        });
                    });
                }
                cuadernoTareasDefinicionTextarea.value = tareasTexto.trim();
            } else {
                cuadernoTareasChecklistContainer.classList.add('hidden-view');
                cuadernoTareasDefinicionTextarea.value = '';
            }
            
            cuadernoEmailsTodoRealizadoInput.value = cuadernoParaEditar ? (cuadernoParaEditar.emailsTodoRealizado || '') : '';
            cuadernoEmailsConPendientesInput.value = cuadernoParaEditar ? (cuadernoParaEditar.emailsConPendientes || '') : '';


            popularSelectUsuariosOperarios(cuadernoParaEditar ? (cuadernoParaEditar.usuariosAsignados || []) : []);

            cuadernoIdToEditInput.value = editandoCuadernoId || '';
            formNuevoCuadernoContainer.classList.remove('hidden-view');
            cuadernoFormError.textContent = '';
        } else {
            formNuevoCuadernoContainer.classList.add('hidden-view');
            formCuaderno.reset();
            editandoCuadernoId = null;
            cuadernoIdInput.readOnly = false;
            if (cuadernoUsuariosAsignadosContainer) cuadernoUsuariosAsignadosContainer.innerHTML = '';
            if (cuadernoTareasChecklistContainer) cuadernoTareasChecklistContainer.classList.add('hidden-view');
            if (emailConfigUnificadoDiv) emailConfigUnificadoDiv.classList.remove('hidden-view'); 
            if (emailConfigNovedadesDiv) emailConfigNovedadesDiv.classList.add('hidden-view');
        }
    }

    function renderizarTablaCuadernos() {
        if (!tablaCuadernosBody) return;
        tablaCuadernosBody.innerHTML = '';

        cuadernos.forEach(cuaderno => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-slate-50 transition-colors';
            
            const nombresUsuariosAsignados = (cuaderno.usuariosAsignados || []) 
                .map(userId => {
                    const user = usuarios.find(u => u.id === userId);
                    return user ? user.nombreCompleto : 'ID Desconocido';
                })
                .join(', ');

            const colorInfo = COLORES_CUADERNO.find(c => c.clase === cuaderno.colorClase) || {nombre: 'Desconocido'};
            const tipoCuadernoTexto = cuaderno.tipo === 'checklist' ? 'Checklist' : 'Novedades';

            tr.innerHTML = `
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${cuaderno.id}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${cuaderno.nombre}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${tipoCuadernoTexto}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">
                    <span class="px-2 py-1 text-xs rounded-full ${cuaderno.colorClase || 'bg-slate-200 text-slate-800'}">${colorInfo.nombre}</span>
                </td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">${nombresUsuariosAsignados || 'Ninguno'}</td>
                <td class="py-2 px-4 border-b border-slate-200 text-sm">
                    <button data-id="${cuaderno.id}" class="edit-cuaderno-btn text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                    <button data-id="${cuaderno.id}" class="delete-cuaderno-btn text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                </td>
            `;
            tablaCuadernosBody.appendChild(tr);
        });
    }

    function parseTareasDefinicion(textoTareas) {
        const lineas = textoTareas.split('\n').map(l => l.trim());
        const familias = [];
        let familiaActual = null;

        lineas.forEach(linea => {
            if (linea.startsWith('## ')) {
                if (familiaActual) { 
                    familias.push(familiaActual);
                }
                familiaActual = {
                    nombreFamilia: linea.substring(3).trim(), 
                    tareas: []
                };
            } else if (linea && familiaActual) { 
                familiaActual.tareas.push(linea);
            } else if (linea && !familiaActual) { 
                 if (familias.length === 0 || familias[familias.length-1].nombreFamilia !== "Tareas Generales") { 
                    familiaActual = { nombreFamilia: "Tareas Generales", tareas: [linea] };
                    familias.push(familiaActual); 
                 } else { 
                    familias[familias.length-1].tareas.push(linea);
                 }
            }
        });
        if (familiaActual && !familias.includes(familiaActual)) { 
             familias.push(familiaActual);
        }
        return familias.filter(f => f.nombreFamilia && f.tareas.length > 0); 
    }


    function handleGuardarCuaderno(event) {
        event.preventDefault();
        cuadernoFormError.textContent = '';

        const id = cuadernoIdInput.value.trim().toUpperCase(); 
        const nombre = cuadernoNombreInput.value.trim();
        const tipo = cuadernoTipoSelect.value; 
        const tareasDefinicionRaw = cuadernoTareasDefinicionTextarea.value.trim(); 
        const tareasDefinicion = tipo === 'checklist' ? parseTareasDefinicion(tareasDefinicionRaw) : []; 

        const colorClase = cuadernoColorSelect.value; 
        const emailsTodoRealizado = cuadernoEmailsTodoRealizadoInput.value.trim();
        const emailsConPendientes = cuadernoEmailsConPendientesInput.value.trim();

        const usuariosAsignadosSeleccionados = [];
        if (cuadernoUsuariosAsignadosContainer) {
            cuadernoUsuariosAsignadosContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                usuariosAsignadosSeleccionados.push(checkbox.value);
            });
        }
        
        if (!id || !nombre || !tipo) { 
            cuadernoFormError.textContent = 'El ID, Nombre y Tipo del Cuaderno son obligatorios.';
            return;
        }
        if (tipo === 'checklist' && tareasDefinicion.length === 0 && tareasDefinicionRaw !== '') {
             cuadernoFormError.textContent = 'Formato de tareas incorrecto. Use "## Nombre Familia" seguido de tareas, o solo tareas si no hay familias.';
             return;
        }
         if (tipo === 'checklist' && tareasDefinicion.length === 0 && tareasDefinicionRaw === '') {
            cuadernoFormError.textContent = 'Para un cuaderno tipo Checklist, debe definir al menos una tarea.';
            return;
        }


        const datosCuaderno = {
            nombre, tipo, tareasDefinicion, colorClase,
            emailsTodoRealizado, 
            emailsConPendientes, 
            emailsMalo: '', 
            emailsRegular: '',
            emailsBueno: '',
            emailsMuyBueno: '',
            usuariosAsignados: usuariosAsignadosSeleccionados
        };


        if (editandoCuadernoId) {
            const cuadernoIndex = cuadernos.findIndex(c => c.id === editandoCuadernoId);
            if (cuadernoIndex > -1) {
                cuadernos[cuadernoIndex] = { ...cuadernos[cuadernoIndex], ...datosCuaderno };
                console.log("Cuaderno editado:", cuadernos[cuadernoIndex]);
            }
        } else {
            if (cuadernos.find(c => c.id === id)) {
                cuadernoFormError.textContent = 'El ID del cuaderno ya existe. Debe ser único.';
                return;
            }
            const nuevoCuaderno = { id, ...datosCuaderno };
            cuadernos.push(nuevoCuaderno);
            console.log("Nuevo cuaderno creado:", nuevoCuaderno);
        }
        guardarCuadernos();
        renderizarTablaCuadernos();
        toggleFormularioCuaderno(false);
    }

    function handleEditarCuadernoClick(cuadernoId) {
        const cuadernoAEditar = cuadernos.find(c => c.id === cuadernoId);
        if (cuadernoAEditar) {
            toggleFormularioCuaderno(true, cuadernoAEditar);
        } else {
            console.error("No se encontró el cuaderno para editar con ID:", cuadernoId);
        }
    }

    function handleEliminarCuadernoClick(cuadernoId) {
        if (confirm(`¿Estás seguro de que quieres eliminar el cuaderno con ID "${cuadernoId}"? Esta acción no se puede deshacer.`)) {
            cuadernos = cuadernos.filter(c => c.id !== cuadernoId);
            novedades = novedades.filter(n => n.cuadernoId !== cuadernoId);
            checklistEntradas = checklistEntradas.filter(ce => ce.cuadernoId !== cuadernoId);
            guardarCuadernos();
            guardarNovedades();
            guardarChecklistEntradas();
            renderizarTablaCuadernos();
            console.log("Cuaderno eliminado y sus entradas:", cuadernoId);
            if (editandoCuadernoId === cuadernoId) {
                toggleFormularioCuaderno(false);
            }
        }
    }

    // --- FUNCIONALIDAD DEL OPERARIO ---
    function renderizarDashboardOperario() {
        if (!operarioCuadernosContainer || !currentUser || currentUser.rol !== 'operario') {
            if(operarioWelcomeMessage) operarioWelcomeMessage.textContent = 'No tienes cuadernos asignados o no eres un operario.';
            if(operarioCuadernosContainer) operarioCuadernosContainer.innerHTML = '';
            return;
        }

        if(operarioWelcomeMessage) operarioWelcomeMessage.textContent = `Bienvenido, ${currentUser.nombreCompleto}. Selecciona un cuaderno para ver sus novedades:`;
        operarioCuadernosContainer.innerHTML = ''; 

        const cuadernosAsignadosAlOperario = cuadernos.filter(cuaderno =>
            (cuaderno.usuariosAsignados || []).includes(currentUser.id)
        );

        if (cuadernosAsignadosAlOperario.length === 0) {
            operarioCuadernosContainer.innerHTML = '<p class="text-slate-600">No tienes cuadernos asignados actualmente.</p>';
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'; 
        
        cuadernosAsignadosAlOperario.forEach(cuaderno => {
            const card = document.createElement('div');
            const colorClasses = cuaderno.colorClase || COLORES_CUADERNO[0].clase; 
            card.className = `p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between min-h-[150px] ${colorClasses}`;
            
            card.addEventListener('click', () => mostrarVista(VISTAS.OPERARIO_CUADERNO_DETALLE, {cuadernoId: cuaderno.id, cuadernoNombre: cuaderno.nombre, vistaRetorno: VISTAS.OPERARIO_DASHBOARD}));
            
            const nombreCuaderno = document.createElement('h3');
            nombreCuaderno.textContent = cuaderno.nombre;
            const esColorOscuro = colorClasses.includes('text-white');
            nombreCuaderno.className = `text-xl font-bold mb-3 ${esColorOscuro ? 'text-white' : 'text-slate-800'}`;
            card.appendChild(nombreCuaderno);

            const verNovedadesText = document.createElement('p');
            verNovedadesText.textContent = 'Ver/Registrar Novedades \u2192'; 
            verNovedadesText.className = `text-sm font-semibold self-start mt-auto ${esColorOscuro ? 'hover:text-slate-200' : 'hover:text-sky-700'}`;
            card.appendChild(verNovedadesText);
            
            grid.appendChild(card);
        });
        operarioCuadernosContainer.appendChild(grid);
    }

    function mostrarDetalleCuadernoOperario(cuadernoId, cuadernoNombre, vistaDeRetorno) {
        cuadernoActualOperario = { id: cuadernoId, nombre: cuadernoNombre }; 
        vistaAnteriorParaDetalleCuaderno = vistaDeRetorno; 
        if (detalleCuadernoNombre) detalleCuadernoNombre.textContent = `Novedades de: ${cuadernoNombre}`;
        
        const cuaderno = cuadernos.find(c => c.id === cuadernoId);
        if (!cuaderno) {
            console.error("Cuaderno no encontrado para detalle:", cuadernoId);
            if (vistaAnteriorParaDetalleCuaderno) mostrarVista(vistaAnteriorParaDetalleCuaderno);
            else mostrarVista(VISTAS.OPERARIO_DASHBOARD); 
            return;
        }

        if (novedadCalificacionSelect) {
            novedadCalificacionSelect.innerHTML = `
                <option value="">Seleccione una calificación...</option>
                <option value="${CALIFICACIONES_UNIFICADAS.TODO_REALIZADO}">${CALIFICACIONES_UNIFICADAS.TODO_REALIZADO}</option>
                <option value="${CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES}">${CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES}</option>
            `;
        }
        if (checklistCalificacionSelect) { 
             checklistCalificacionSelect.innerHTML = `
                <option value="">Seleccione una calificación...</option>
                <option value="${CALIFICACIONES_UNIFICADAS.TODO_REALIZADO}">${CALIFICACIONES_UNIFICADAS.TODO_REALIZADO}</option>
                <option value="${CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES}">${CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES}</option>
            `;
        }


        if (cuaderno.tipo === 'checklist') {
            detalleContenidoNovedades.classList.add('hidden-view');
            detalleContenidoChecklist.classList.remove('hidden-view');
            btnAbrirFormNovedadDesdeDetalle.classList.add('hidden-view'); 
            renderizarFormularioChecklist(cuaderno);
            renderizarHistorialChecklists(cuadernoId); 
        } else { 
            detalleContenidoChecklist.classList.add('hidden-view');
            detalleContenidoNovedades.classList.remove('hidden-view');
            btnAbrirFormNovedadDesdeDetalle.classList.remove('hidden-view'); 
            renderizarNovedadesDeCuaderno(cuadernoId);
        }
    }

    function renderizarNovedadesDeCuaderno(cuadernoId) {
        if (!listaNovedadesCuadernoOperario) return;
        listaNovedadesCuadernoOperario.innerHTML = '';

        const novedadesDelCuaderno = novedades
            .filter(n => n.cuadernoId === cuadernoId)
            .sort((a, b) => { 
                const dateA = new Date(a.fecha.split('/').reverse().join('-') + 'T' + a.hora);
                const dateB = new Date(b.fecha.split('/').reverse().join('-') + 'T' + b.hora);
                return dateB - dateA;
            });

        if (novedadesDelCuaderno.length === 0) {
            listaNovedadesCuadernoOperario.innerHTML = '<p class="text-slate-500 p-4 text-center">No hay novedades registradas para este cuaderno.</p>';
            return;
        }

        novedadesDelCuaderno.forEach(novedad => {
            const card = document.createElement('div');
            const calificacionBorde = novedad.calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO ? 'Todo-realizado' : 'Con-tareas-pendientes';
            const calificacionClass = `calificacion-${calificacionBorde.replace(/\s+/g, '-')}`; 
            card.className = `novedad-card bg-white p-4 rounded-lg shadow-sm ${calificacionClass}`;

            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <span class="text-xs font-semibold text-slate-600">${novedad.fecha} - ${novedad.hora} - Turno: ${novedad.turno}</span>
                    <span class="px-2 py-0.5 text-xs font-medium rounded-full 
                        ${getCalificacionColorClass(novedad.calificacion, 'text', 'novedades')}"> 
                        ${novedad.calificacion}
                    </span>
                </div>
                <p class="text-xs text-slate-500 mt-1 mb-2">Reportado por: ${novedad.nombreUsuario}</p>
                <p class="text-sm text-slate-700 whitespace-pre-wrap">${novedad.texto}</p>
            `;
            listaNovedadesCuadernoOperario.appendChild(card);
        });
    }


    function abrirFormularioNovedad(cuadernoId, cuadernoNombre) {
        if (!formNovedadModal) return;
        formNovedad.reset(); 
        novedadCuadernoIdInput.value = cuadernoId;
        novedadCuadernoNombreInput.value = cuadernoNombre;
        formNovedadTitle.textContent = `Registrar Novedad para: ${cuadernoNombre}`;
        novedadFormError.textContent = '';
        formNovedadModal.style.display = 'flex'; 
    }

    function cerrarFormularioNovedad() {
        if (formNovedadModal) formNovedadModal.style.display = 'none';
    }

    function handleGuardarNovedad(event) {
        event.preventDefault();
        novedadFormError.textContent = '';

        const cuadernoId = novedadCuadernoIdInput.value;
        const turno = novedadTurnoSelect.value;
        const texto = novedadTextoTextarea.value.trim();
        const calificacion = novedadCalificacionSelect.value; 

        if (!cuadernoId || !turno || !texto || !calificacion) {
            novedadFormError.textContent = 'Todos los campos son obligatorios.';
            return;
        }

        const nuevaNovedad = {
            id: 'nov_' + Date.now(),
            cuadernoId: cuadernoId,
            usuarioId: currentUser.id,
            nombreUsuario: currentUser.nombreCompleto,
            fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }), 
            hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), 
            turno: turno,
            texto: texto,
            calificacion: calificacion 
        };

        novedades.push(nuevaNovedad);
        guardarNovedades();
        console.log("Nueva novedad guardada:", nuevaNovedad);

        simularEnvioEmail(nuevaNovedad); 
        
        cerrarFormularioNovedad();
        
        if (document.getElementById(VISTAS.OPERARIO_CUADERNO_DETALLE) && !document.getElementById(VISTAS.OPERARIO_CUADERNO_DETALLE).classList.contains('hidden-view')) {
            if (cuadernoActualOperario && cuadernoActualOperario.id === cuadernoId) {
                 renderizarNovedadesDeCuaderno(cuadernoId); 
            }
        }
        
        if (document.getElementById(VISTAS.SUPERVISOR_DASHBOARD) && !document.getElementById(VISTAS.SUPERVISOR_DASHBOARD).classList.contains('hidden-view')) {
            const fechaPickerFormateada = supervisorDatePicker.value.split('-').reverse().join('/'); 
            if (nuevaNovedad.fecha === fechaPickerFormateada) { 
                 renderizarDashboardSupervisor();
            }
        }
    }

    function simularEnvioEmail(entrada, tipoEntrada = 'novedad') { 
        const cuaderno = cuadernos.find(c => c.id === entrada.cuadernoId);
        if (!cuaderno) {
            console.error("Error en simulación de email: Cuaderno no encontrado", entrada.cuadernoId);
            return;
        }

        let destinatarios = '';
        if (entrada.calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO) {
            destinatarios = cuaderno.emailsTodoRealizado;
        } else if (entrada.calificacion === CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES) {
            destinatarios = cuaderno.emailsConPendientes;
        }


        if (!destinatarios) {
            console.log(`Simulación Email: No hay destinatarios configurados para la calificación "${entrada.calificacion}" en el cuaderno "${cuaderno.nombre}".`);
            if (emailSimulacionModal && emailSimDestinatarios && emailSimAsunto && emailSimCuerpo) { // Aún mostrar modal pero indicando que no hay destinatarios
                emailSimDestinatarios.textContent = "No configurados";
                emailSimAsunto.textContent = `[SIN ENVÍO] ${tipoEntrada === 'checklist' ? 'Checklist Completado' : 'Novedad'} - ${cuaderno.nombre}`;
                emailSimCuerpo.textContent = `La entrada fue guardada pero no hay destinatarios de email configurados para la calificación "${entrada.calificacion}".`;
                emailSimulacionModal.style.display = 'flex';
            } else {
                 alert(`Entrada guardada. No hay destinatarios de email configurados para esta calificación.`);
            }
            return;
        }

        const asunto = `${tipoEntrada === 'checklist' ? 'Checklist Completado' : 'Novedad'} Cuaderno: ${cuaderno.id} - ${entrada.fecha} - Turno: ${entrada.turno} - Calificación: ${entrada.calificacion}`;
        let cuerpo = `
            ${tipoEntrada === 'checklist' ? 'Checklist Completado' : 'Novedades'} - ${cuaderno.nombre}
            ------------------------------------
            Fecha: ${entrada.fecha}
            Turno: ${entrada.turno}
            Hora: ${entrada.hora}
            Calificación del Turno: ${entrada.calificacion}
            Reportado por: ${entrada.nombreUsuario}
            ------------------------------------
        `;
        if (tipoEntrada === 'novedad') {
            cuerpo += `Novedad:\n${entrada.texto}`;
        } else if (tipoEntrada === 'checklist') {
            // Agrupar tareas por familia para el email
            const tareasAgrupadasEmail = (entrada.tareas || []).reduce((acc, tarea) => {
                const familia = tarea.familiaNombre || "Tareas Generales";
                if (!acc[familia]) {
                    acc[familia] = [];
                }
                acc[familia].push(tarea);
                return acc;
            }, {});

            let tareasEmailTexto = "Tareas del Checklist:\n";
            for (const nombreFamilia in tareasAgrupadasEmail) {
                tareasEmailTexto += `\n## ${nombreFamilia}\n`;
                tareasAgrupadasEmail[nombreFamilia].forEach(t => {
                    // Solo incluir tareas Pendientes o En Proceso en el email
                    if (t.estado === 'Pendiente' || t.estado === 'En Proceso') {
                        tareasEmailTexto += `- ${t.texto}: ${t.estado} ${t.observacionTarea ? '('+t.observacionTarea+')' : ''}\n`;
                    }
                });
            }
             // Verificar si después de filtrar hay tareas para mostrar
            const tareasFiltradasParaEmail = (entrada.tareas || []).filter(t => t.estado === 'Pendiente' || t.estado === 'En Proceso');
            if (tareasFiltradasParaEmail.length > 0) {
                cuerpo += tareasEmailTexto;
            } else {
                cuerpo += "Tareas del Checklist: (Todas las tareas fueron realizadas o no corresponden)\n";
            }


            if (entrada.observaciones) { 
                cuerpo += `\nObservaciones Adicionales:\n${entrada.observaciones}\n`;
            }
        }


        console.log("--- SIMULACIÓN DE ENVÍO DE EMAIL ---");
        console.log("Para:", destinatarios);
        console.log("Asunto:", asunto);
        console.log("Cuerpo:", cuerpo.trim());
        console.log("--- FIN DE SIMULACIÓN ---");

        if (emailSimulacionModal && emailSimDestinatarios && emailSimAsunto && emailSimCuerpo) {
            emailSimDestinatarios.textContent = destinatarios;
            emailSimAsunto.textContent = asunto;
            emailSimCuerpo.textContent = cuerpo.trim();
            emailSimulacionModal.style.display = 'flex';
        } else {
            alert(`Entrada guardada. Simulación de email:\nPara: ${destinatarios}\nAsunto: ${asunto}`);
        }
    }

    // --- FUNCIONALIDAD DEL SUPERVISOR ---
    function renderizarSupervisorGestionNovedadesView() {
        if (!supervisorGestionCuadernosContainer || !currentUser || currentUser.rol !== 'supervisor') {
            if(supervisorGestionWelcomeMessage) supervisorGestionWelcomeMessage.textContent = 'Acceso denegado o no eres supervisor.';
            if(supervisorGestionCuadernosContainer) supervisorGestionCuadernosContainer.innerHTML = '';
            return;
        }

        if(supervisorGestionWelcomeMessage) supervisorGestionWelcomeMessage.textContent = `Bienvenido, ${currentUser.nombreCompleto}. Selecciona un cuaderno para gestionar sus novedades:`;
        supervisorGestionCuadernosContainer.innerHTML = ''; 

        if (cuadernos.length === 0) {
            supervisorGestionCuadernosContainer.innerHTML = '<p class="text-slate-600">No hay cuadernos configurados en el sistema.</p>';
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'; 
        
        cuadernos.forEach(cuaderno => { 
            const card = document.createElement('div');
            const colorClasses = cuaderno.colorClase || COLORES_CUADERNO[0].clase; 
            card.className = `p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between min-h-[150px] ${colorClasses}`;
            
            card.addEventListener('click', () => mostrarVista(VISTAS.OPERARIO_CUADERNO_DETALLE, {cuadernoId: cuaderno.id, cuadernoNombre: cuaderno.nombre, vistaRetorno: VISTAS.SUPERVISOR_GESTION_NOVEDADES}));
            
            const nombreCuaderno = document.createElement('h3');
            nombreCuaderno.textContent = cuaderno.nombre;
            const esColorOscuro = colorClasses.includes('text-white');
            nombreCuaderno.className = `text-xl font-bold mb-3 ${esColorOscuro ? 'text-white' : 'text-slate-800'}`;
            card.appendChild(nombreCuaderno);

            const verNovedadesText = document.createElement('p');
            verNovedadesText.textContent = 'Ver/Registrar Novedades \u2192'; 
            verNovedadesText.className = `text-sm font-semibold self-start mt-auto ${esColorOscuro ? 'hover:text-slate-200' : 'hover:text-sky-700'}`;
            card.appendChild(verNovedadesText);
            
            grid.appendChild(card);
        });
        supervisorGestionCuadernosContainer.appendChild(grid);
    }
    
    function getCalificacionColorClass(calificacion, tipo = 'cell', tipoEntrada = 'novedad') { 
        let baseClass = tipo === 'cell' ? 'calificacion-cell-sm ' : 'px-2 py-0.5 text-xs font-medium rounded-full ';
        
        if (calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO) return baseClass + 'bg-green-500 text-white';
        if (calificacion === CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES) return baseClass + 'bg-red-500 text-white';
        
        switch (calificacion) {
            case 'Malo': return baseClass + 'bg-red-500 text-white'; 
            case 'Regular': return baseClass + 'bg-yellow-400 text-black'; 
            case 'Bueno': return baseClass + 'bg-green-500 text-white'; 
            case 'Muy Bueno': return baseClass + 'bg-sky-500 text-white'; 
            default: return baseClass + 'bg-slate-300 text-slate-700'; 
        }
    }
    
    function getCalificacionAbreviatura(calificacion, tipoEntrada = 'novedad') {
        if (calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO) return 'TR';
        if (calificacion === CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES) return 'TP';
        
        switch (calificacion) {
            case 'Malo': return 'M';
            case 'Regular': return 'R';
            case 'Bueno': return 'B';
            case 'Muy Bueno': return 'MB';
            default: return 'S/C'; 
        }
    }

    function renderizarDashboardSupervisor() {
        if (!supervisorGridNovedadesBody || !supervisorDatePicker) return;

        const fechaSeleccionada = supervisorDatePicker.value; 
        if (!fechaSeleccionada) {
            supervisorGridNovedadesBody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-slate-500">Por favor, seleccione una fecha.</td></tr>';
            return;
        }
        
        const [year, month, day] = fechaSeleccionada.split('-');
        const fechaFormateadaParaComparar = `${day.padStart(2,'0')}/${month.padStart(2,'0')}/${year}`;


        supervisorGridNovedadesBody.innerHTML = ''; 
        let cuadernosConNovedadesHoy = 0;
        let totalNovedadesHoy = 0; 

        cuadernos.forEach(cuaderno => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-slate-50 transition-colors';

            let tieneEntradaEsteCuadernoHoy = false;
            let celdaCuaderno = `<td class="py-2 px-3 border-b border-slate-200 text-sm font-medium text-slate-700">${cuaderno.nombre} <span class="text-xs text-slate-500">(${cuaderno.tipo === 'checklist' ? 'Checklist' : 'Novedades'})</span></td>`;
            let celdasTurnos = '';

            TURNOS_LAB.forEach(turno => {
                let ultimaEntradaDelTurno = null;
                let calificacionParaMostrar = null;
                let entradasDelTurno = [];

                if (cuaderno.tipo === 'checklist') {
                    entradasDelTurno = checklistEntradas.filter(ce => 
                        ce.cuadernoId === cuaderno.id &&
                        ce.fecha === fechaFormateadaParaComparar &&
                        ce.turno === turno
                    );
                } else { 
                    entradasDelTurno = novedades.filter(n => 
                        n.cuadernoId === cuaderno.id &&
                        n.fecha === fechaFormateadaParaComparar &&
                        n.turno === turno
                    );
                }
                
                if (entradasDelTurno.length > 0) {
                    tieneEntradaEsteCuadernoHoy = true;
                    totalNovedadesHoy += entradasDelTurno.length; 
                    ultimaEntradaDelTurno = entradasDelTurno.sort((a,b) => new Date('1970/01/01 ' + b.hora) - new Date('1970/01/01 ' + a.hora))[0];
                    calificacionParaMostrar = ultimaEntradaDelTurno.calificacion;
                }
                
                const contenidoCeldaTurno = `<span class="calificacion-cell-sm ${getCalificacionColorClass(calificacionParaMostrar, 'cell', cuaderno.tipo)}">${getCalificacionAbreviatura(calificacionParaMostrar, cuaderno.tipo)}</span>`; 
                celdasTurnos += `<td class="py-2 px-3 border-b border-slate-200 text-center">${contenidoCeldaTurno}</td>`;
            });

            if (tieneEntradaEsteCuadernoHoy) {
                cuadernosConNovedadesHoy++;
            }

            const celdaDetalles = `
                <td class="py-2 px-3 border-b border-slate-200 text-center">
                    <button data-cuaderno-id="${cuaderno.id}" data-cuaderno-nombre="${cuaderno.nombre}" data-cuaderno-tipo="${cuaderno.tipo}" data-fecha="${fechaFormateadaParaComparar}" 
                            class="ver-detalles-supervisor-btn text-sky-600 hover:text-sky-800" title="Ver detalles del día">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline-block">
                          <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </td>`;
            
            tr.innerHTML = celdaCuaderno + celdasTurnos + celdaDetalles;
            supervisorGridNovedadesBody.appendChild(tr);
        });

        if (cuadernos.length === 0) {
             supervisorGridNovedadesBody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-slate-500">No hay cuadernos configurados.</td></tr>';
        } else if (supervisorGridNovedadesBody.innerHTML === '' && cuadernos.length > 0) { 
             supervisorGridNovedadesBody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-500">No hay novedades para la fecha ${fechaFormateadaParaComparar}.</td></tr>`;
        }

        if (totalCuadernosConNovedadesSpan) totalCuadernosConNovedadesSpan.textContent = cuadernosConNovedadesHoy;
        if (totalCuadernosSinNovedadesSpan) totalCuadernosSinNovedadesSpan.textContent = cuadernos.length - cuadernosConNovedadesHoy;
        if (totalNovedadesRegistradasSpan) totalNovedadesRegistradasSpan.textContent = totalNovedadesHoy;
    }

    function mostrarDetallesNovedadesParaSupervisor(cuadernoId, cuadernoNombre, fecha, tipoCuaderno) {
        if (!detalleNovedadesModal || !detalleNovedadesContent || !detalleNovedadesTitle) return;

        detalleNovedadesTitle.textContent = `Detalles de "${cuadernoNombre}" (${tipoCuaderno === 'checklist' ? 'Checklist' : 'Novedades'}) - Fecha: ${fecha}`;
        detalleNovedadesContent.innerHTML = ''; 

        let entradasDelDia = [];
        if (tipoCuaderno === 'checklist') {
            entradasDelDia = checklistEntradas
                .filter(n => n.cuadernoId === cuadernoId && n.fecha === fecha)
                .sort((a, b) => { 
                    const turnoAIndex = TURNOS_LAB.indexOf(a.turno);
                    const turnoBIndex = TURNOS_LAB.indexOf(b.turno);
                    if (turnoAIndex !== turnoBIndex) return turnoAIndex - turnoBIndex;
                    return new Date('1970/01/01 ' + a.hora) - new Date('1970/01/01 ' + b.hora); 
                });
        } else { // 'novedades'
            entradasDelDia = novedades
                .filter(n => n.cuadernoId === cuadernoId && n.fecha === fecha)
                .sort((a, b) => { 
                    const turnoAIndex = TURNOS_LAB.indexOf(a.turno);
                    const turnoBIndex = TURNOS_LAB.indexOf(b.turno);
                    if (turnoAIndex !== turnoBIndex) return turnoAIndex - turnoBIndex;
                    const horaA = parseInt(a.hora.split(':')[0]) * 60 + parseInt(a.hora.split(':')[1]);
                    const horaB = parseInt(b.hora.split(':')[0]) * 60 + parseInt(b.hora.split(':')[1]);
                    return horaA - horaB; 
                });
        }


        if (entradasDelDia.length === 0) {
            detalleNovedadesContent.innerHTML = `<p class="text-slate-500 p-4 text-center">No hay ${tipoCuaderno === 'checklist' ? 'checklists completados' : 'novedades registradas'} para este cuaderno en la fecha seleccionada.</p>`;
        } else {
            entradasDelDia.forEach(entrada => {
                const card = document.createElement('div');
                let califParaBorde = entrada.calificacion;
                if (tipoCuaderno === 'checklist') { 
                    califParaBorde = entrada.calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO ? 'Todo-realizado' : 'Con-tareas-pendientes';
                } else { 
                     califParaBorde = entrada.calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO ? 'Todo-realizado' : 'Con-tareas-pendientes';
                }
                const calificacionBordeClass = `calificacion-${califParaBorde.replace(/\s+/g, '-')}`; 
                card.className = `novedad-card bg-white p-4 rounded-lg shadow-sm mb-3 ${calificacionBordeClass}`;
                
                let contenidoEntradaHtml = '';
                if (tipoCuaderno === 'checklist') {
                    // Agrupar tareas por familia para mostrar
                    const tareasAgrupadas = (entrada.tareas || []).reduce((acc, tarea) => {
                        const familia = tarea.familiaNombre || "Tareas Generales";
                        if (!acc[familia]) {
                            acc[familia] = [];
                        }
                        acc[familia].push(tarea);
                        return acc;
                    }, {});

                    for (const nombreFamilia in tareasAgrupadas) {
                        contenidoEntradaHtml += `<h5 class="text-sm font-semibold text-sky-700 mt-2 mb-1">${nombreFamilia}</h5>`;
                        contenidoEntradaHtml += '<table class="min-w-full text-sm">';
                        contenidoEntradaHtml += `<thead class="bg-slate-50"><tr>
                                                    <th class="w-2/5 px-2 py-1 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tarea</th>
                                                    <th class="w-1/4 px-2 py-1 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
                                                    <th class="w-2/5 px-2 py-1 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Observación</th>
                                                 </tr></thead>`;
                        contenidoEntradaHtml += '<tbody class="bg-white divide-y divide-slate-200">';
                        tareasAgrupadas[nombreFamilia].forEach(t => {
                            let estadoColorClass = 'text-slate-600';
                            if (t.estado === 'Realizado') estadoColorClass = 'text-green-600 font-semibold';
                            else if (t.estado === 'En Proceso') estadoColorClass = 'text-yellow-600 font-semibold';
                            else if (t.estado === 'Pendiente') estadoColorClass = 'text-red-600 font-semibold';
                            else if (t.estado === 'No corresponde') estadoColorClass = 'text-gray-500 font-medium';
                            contenidoEntradaHtml += `<tr>
                                                        <td class="px-2 py-1 whitespace-normal">${t.texto}</td>
                                                        <td class="px-2 py-1 whitespace-nowrap"><span class="${estadoColorClass}">${t.estado}</span></td>
                                                        <td class="px-2 py-1 whitespace-normal">${t.observacionTarea || ''}</td>
                                                     </tr>`;
                        });
                        contenidoEntradaHtml += '</tbody></table>';
                    }

                    if (entrada.observaciones) { 
                        contenidoEntradaHtml += `<div class="mt-2 pt-2 border-t border-slate-200">
                                                    <p class="text-xs font-semibold text-slate-600 mb-1">Observaciones Generales:</p>
                                                    <p class="text-sm text-slate-700 whitespace-pre-wrap">${entrada.observaciones}</p>
                                                 </div>`;
                    }
                } else {
                    contenidoEntradaHtml = `<p class="text-sm text-slate-700 whitespace-pre-wrap">${entrada.texto}</p>`;
                }

                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <span class="text-xs font-semibold text-slate-600">${entrada.fecha} - ${entrada.hora} - Turno: ${entrada.turno}</span>
                        <span class="px-2 py-0.5 text-xs font-medium rounded-full ${getCalificacionColorClass(entrada.calificacion, 'text', tipoCuaderno)}">
                            ${entrada.calificacion}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 mt-1 mb-2">Reportado por: ${entrada.nombreUsuario}</p>
                    ${contenidoEntradaHtml}
                `;
                detalleNovedadesContent.appendChild(card);
            });
        }
        detalleNovedadesModal.style.display = 'flex';
    }

    // --- FUNCIONALIDAD CHECKLIST ---
    function renderizarFormularioChecklist(cuaderno) {
        if (!listaTareasChecklist || !checklistCuadernoIdInput || !formChecklist) return;
        
        listaTareasChecklist.innerHTML = ''; 
        checklistCuadernoIdInput.value = cuaderno.id; 
        formChecklist.reset(); 
        if(checklistObservacionesTextarea) checklistObservacionesTextarea.value = ''; 

        if (!cuaderno.tareasDefinicion || cuaderno.tareasDefinicion.length === 0) {
            listaTareasChecklist.innerHTML = '<p class="text-slate-500">No hay tareas definidas para este checklist.</p>';
            return;
        }

        // Crear una única tabla para todas las familias y tareas
        const table = document.createElement('table');
        table.className = 'min-w-full divide-y divide-slate-200 mb-4';
        const thead = document.createElement('thead');
        thead.className = 'bg-slate-50';
        thead.innerHTML = `
            <tr>
                <th scope="col" class="w-2/5 px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tarea</th>
                <th scope="col" class="w-1/4 px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
                <th scope="col" class="w-2/5 px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Observación Tarea</th>
            </tr>
        `;
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        tbody.className = 'bg-white divide-y divide-slate-200';

        cuaderno.tareasDefinicion.forEach(familia => {
            // Fila para el nombre de la familia
            const familiaTr = document.createElement('tr');
            familiaTr.className = 'bg-sky-50'; // Un color distintivo para la familia
            const familiaTd = document.createElement('td');
            familiaTd.colSpan = 3; // Que ocupe todas las columnas
            familiaTd.className = 'px-4 py-2 text-sm font-semibold text-sky-700';
            familiaTd.textContent = familia.nombreFamilia;
            familiaTr.appendChild(familiaTd);
            tbody.appendChild(familiaTr);

            // Filas para las tareas de esta familia
            (familia.tareas || []).forEach((tareaTexto) => {
                const tr = document.createElement('tr');
                tr.dataset.tareaTexto = tareaTexto; 
                tr.dataset.familiaNombre = familia.nombreFamilia; 

                const tdTarea = document.createElement('td');
                tdTarea.className = 'px-4 py-2 whitespace-normal text-sm text-slate-700'; 
                tdTarea.textContent = tareaTexto;
                tr.appendChild(tdTarea);

                const tdEstado = document.createElement('td');
                tdEstado.className = 'px-4 py-2 whitespace-nowrap text-sm';
                const selectEstado = document.createElement('select');
                selectEstado.className = 'w-full p-1 border border-slate-300 rounded-md focus:ring-sky-500 focus:border-sky-500 text-xs';
                ESTADOS_TAREA_CHECKLIST.forEach(estado => {
                    const option = document.createElement('option');
                    option.value = estado;
                    option.textContent = estado;
                    selectEstado.appendChild(option);
                });
                
                selectEstado.addEventListener('change', (e) => {
                    const obsInput = e.target.closest('tr').querySelector('input[type="text"]');
                    if (e.target.value === 'En Proceso') {
                        obsInput.placeholder = 'Observación (obligatorio)';
                        obsInput.classList.add('border-red-300', 'focus:border-red-500', 'focus:ring-red-500');
                        obsInput.classList.remove('border-slate-300');
                    } else {
                        obsInput.placeholder = 'Observación (opcional)';
                        obsInput.classList.remove('border-red-300', 'focus:border-red-500', 'focus:ring-red-500');
                        obsInput.classList.add('border-slate-300');
                    }
                });
                tdEstado.appendChild(selectEstado);
                tr.appendChild(tdEstado);

                const tdObservacion = document.createElement('td');
                tdObservacion.className = 'px-4 py-2 whitespace-nowrap text-sm';
                const inputObs = document.createElement('input'); 
                inputObs.type = 'text';
                inputObs.className = 'w-full p-1 border border-slate-300 rounded-md focus:ring-sky-500 focus:border-sky-500 text-xs';
                inputObs.placeholder = 'Observación (opcional)';
                tdObservacion.appendChild(inputObs);
                tr.appendChild(tdObservacion);
                
                tbody.appendChild(tr);
            });
        });
        table.appendChild(tbody);
        listaTareasChecklist.appendChild(table);
    }

    function handleGuardarChecklist(event) {
        event.preventDefault();
        if (!checklistFormError || !checklistTurnoSelect || !checklistCalificacionSelect || !listaTareasChecklist || !checklistCuadernoIdInput || !checklistObservacionesTextarea) return;
        
        checklistFormError.textContent = '';
        const cuadernoId = checklistCuadernoIdInput.value;
        const turno = checklistTurnoSelect.value;
        const calificacion = checklistCalificacionSelect.value; 
        const observacionesGlobales = checklistObservacionesTextarea.value.trim(); 

        if (!cuadernoId || !turno || !calificacion) {
            checklistFormError.textContent = 'Debe seleccionar un turno y una calificación general.';
            return;
        }

        const tareasCompletadas = [];
        const filasTareas = listaTareasChecklist.querySelectorAll('tbody tr:not(.bg-sky-50)'); 
        let hayErrorEnTarea = false;

        filasTareas.forEach(fila => {
            if (hayErrorEnTarea) return; 

            const textoTarea = fila.dataset.tareaTexto; 
            const familiaNombre = fila.dataset.familiaNombre; 
            const selectEstado = fila.querySelector('select');
            const inputObservacion = fila.querySelector('input[type="text"]');
            const estadoTarea = selectEstado.value;
            const observacionTarea = inputObservacion.value.trim();

            if (estadoTarea === 'En Proceso' && !observacionTarea) {
                checklistFormError.textContent = `La tarea "${textoTarea}" en la familia "${familiaNombre}" está "En Proceso" y requiere una observación.`;
                hayErrorEnTarea = true;
                inputObservacion.focus(); 
                inputObservacion.classList.add('border-red-500'); 
                return;
            } else {
                inputObservacion.classList.remove('border-red-500'); 
            }
            
            tareasCompletadas.push({
                familiaNombre: familiaNombre, 
                texto: textoTarea,
                estado: estadoTarea,
                observacionTarea: observacionTarea
            });
        });

        if (hayErrorEnTarea) {
            return; 
        }


        if (tareasCompletadas.length === 0) {
            const cuaderno = cuadernos.find(c => c.id === cuadernoId);
            if (!cuaderno || !cuaderno.tareasDefinicion || cuaderno.tareasDefinicion.length === 0) {
                 checklistFormError.textContent = 'Este checklist no tiene tareas definidas. No se puede guardar.';
                 return;
            }
        }
        
        const nuevaEntradaChecklist = {
            id: 'chk_' + Date.now(),
            cuadernoId: cuadernoId,
            usuarioId: currentUser.id,
            nombreUsuario: currentUser.nombreCompleto,
            fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
            hora: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
            turno: turno,
            calificacion: calificacion,
            tareas: tareasCompletadas,
            observaciones: observacionesGlobales 
        };

        checklistEntradas.push(nuevaEntradaChecklist);
        guardarChecklistEntradas();
        console.log("Nueva entrada de checklist guardada:", nuevaEntradaChecklist);

        simularEnvioEmail(nuevaEntradaChecklist, 'checklist');
        
        if(checklistObservacionesTextarea) checklistObservacionesTextarea.value = ''; 
        if(checklistFormError) checklistFormError.textContent = '';
        
        filasTareas.forEach(fila => {
            fila.querySelector('select').value = ESTADOS_TAREA_CHECKLIST[0]; 
            fila.querySelector('input[type="text"]').value = '';
            fila.querySelector('input[type="text"]').placeholder = 'Observación (opcional)'; 
            fila.querySelector('input[type="text"]').classList.remove('border-red-300', 'focus:border-red-500', 'focus:ring-red-500');
            fila.querySelector('input[type="text"]').classList.add('border-slate-300');
        });

        renderizarHistorialChecklists(cuadernoId);

        if (document.getElementById(VISTAS.SUPERVISOR_DASHBOARD) && !document.getElementById(VISTAS.SUPERVISOR_DASHBOARD).classList.contains('hidden-view')) {
            const fechaPickerFormateada = supervisorDatePicker.value.split('-').reverse().join('/');
            if (nuevaEntradaChecklist.fecha === fechaPickerFormateada) {
                renderizarDashboardSupervisor();
            }
        }
        // No mostrar alert, ya que el modal de email lo reemplaza
        // alert('Checklist guardado con éxito.');
    }

    function renderizarHistorialChecklists(cuadernoId) {
        if (!historialChecklistsCuaderno) return;
        historialChecklistsCuaderno.innerHTML = '';

        const entradasDelCuaderno = checklistEntradas
            .filter(ce => ce.cuadernoId === cuadernoId)
            .sort((a, b) => {
                const dateA = new Date(a.fecha.split('/').reverse().join('-') + 'T' + a.hora);
                const dateB = new Date(b.fecha.split('/').reverse().join('-') + 'T' + b.hora);
                return dateB - dateA; 
            });

        if (entradasDelCuaderno.length === 0) {
            historialChecklistsCuaderno.innerHTML = '<p class="text-slate-500 p-4 text-center">No hay checklists guardados para este cuaderno.</p>';
            return;
        }

        entradasDelCuaderno.forEach(entrada => {
            const card = document.createElement('div');
            const calificacionBorde = entrada.calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO ? 'Todo-realizado' : 'Con-tareas-pendientes';
            const calificacionClass = `calificacion-${calificacionBorde.replace(/\s+/g, '-')}`;
            card.className = `novedad-card bg-white p-4 rounded-lg shadow-sm mb-3 ${calificacionClass}`;
            
            const tareasAgrupadas = (entrada.tareas || []).reduce((acc, tarea) => {
                const familia = tarea.familiaNombre || "Tareas Generales";
                if (!acc[familia]) {
                    acc[familia] = [];
                }
                acc[familia].push(tarea);
                return acc;
            }, {});

            let familiasHtml = '<div class="overflow-x-auto">'; 
            familiasHtml += '<table class="min-w-full text-sm mt-2">'; 
            familiasHtml += `<thead class="bg-slate-50"><tr>
                               <th class="w-2/5 px-2 py-1 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tarea</th>
                               <th class="w-1/4 px-2 py-1 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
                               <th class="w-2/5 px-2 py-1 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Observación</th>
                           </tr></thead>`;
            familiasHtml += '<tbody class="bg-white divide-y divide-slate-200">';

            for (const nombreFamilia in tareasAgrupadas) {
                familiasHtml += `<tr><td colspan="3" class="bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-700">${nombreFamilia}</td></tr>`;
                
                tareasAgrupadas[nombreFamilia].forEach(t => {
                    let estadoColorClass = 'text-slate-600';
                    if (t.estado === 'Realizado') estadoColorClass = 'text-green-600 font-semibold';
                    else if (t.estado === 'En Proceso') estadoColorClass = 'text-yellow-600 font-semibold';
                    else if (t.estado === 'Pendiente') estadoColorClass = 'text-red-600 font-semibold';
                    else if (t.estado === 'No corresponde') estadoColorClass = 'text-gray-500 font-medium'; 
                    
                    familiasHtml += `<tr>
                                     <td class="px-2 py-1 whitespace-normal">${t.texto}</td>
                                     <td class="px-2 py-1 whitespace-nowrap"><span class="${estadoColorClass}">${t.estado}</span></td>
                                     <td class="px-2 py-1 whitespace-normal">${t.observacionTarea || ''}</td>
                                   </tr>`;
                });
            }
            familiasHtml += '</tbody></table></div>';


            let observacionesHtml = '';
            if (entrada.observaciones) {
                observacionesHtml = `<div class="mt-3 pt-2 border-t border-slate-200">
                                        <p class="text-xs font-semibold text-slate-600 mb-1">Observaciones Generales:</p>
                                        <p class="text-sm text-slate-700 whitespace-pre-wrap">${entrada.observaciones}</p>
                                     </div>`;
            }

            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <span class="text-xs font-semibold text-slate-600">${entrada.fecha} - ${entrada.hora} - Turno: ${entrada.turno}</span>
                    <span class="px-2 py-0.5 text-xs font-medium rounded-full ${getCalificacionColorClass(entrada.calificacion, 'text', 'checklist')}">
                        ${entrada.calificacion}
                    </span>
                </div>
                <p class="text-xs text-slate-500 mt-1 mb-2">Reportado por: ${entrada.nombreUsuario}</p>
                ${familiasHtml}
                ${observacionesHtml}
            `;
            historialChecklistsCuaderno.appendChild(card);
        });
    }


    // --- INICIALIZACIÓN Y EVENT LISTENERS ---
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (logoutButton) logoutButton.addEventListener('click', handleLogout);

    const btnGoToGestionUsuarios = document.getElementById('btnGoToGestionUsuarios');
    const btnGoToGestionCuadernos = document.getElementById('btnGoToGestionCuadernos');
    if (btnGoToGestionUsuarios) btnGoToGestionUsuarios.addEventListener('click', () => mostrarVista(VISTAS.ADMIN_GESTION_USUARIOS));
    if (btnGoToGestionCuadernos) btnGoToGestionCuadernos.addEventListener('click', () => mostrarVista(VISTAS.ADMIN_GESTION_CUADERNOS));

    if (btnNuevoUsuario) btnNuevoUsuario.addEventListener('click', () => toggleFormularioUsuario(true, null));
    if (cancelarFormUsuarioBtn) cancelarFormUsuarioBtn.addEventListener('click', () => toggleFormularioUsuario(false));
    if (formUsuario) formUsuario.addEventListener('submit', handleGuardarUsuario);
    if (tablaUsuariosBody) {
        tablaUsuariosBody.addEventListener('click', (event) => {
            const target = event.target.closest('button'); 
            if (target && target.classList.contains('edit-user-btn')) handleEditarUsuarioClick(target.dataset.id);
            else if (target && target.classList.contains('delete-user-btn')) handleEliminarUsuarioClick(target.dataset.id);
        });
    }

    if (cuadernoTipoSelect) { 
        cuadernoTipoSelect.addEventListener('change', (event) => {
            const esChecklist = event.target.value === 'checklist';
            if (cuadernoTareasChecklistContainer) { 
                cuadernoTareasChecklistContainer.classList.toggle('hidden-view', !esChecklist);
            }
            if (emailConfigUnificadoDiv) emailConfigUnificadoDiv.classList.remove('hidden-view');
            if (emailConfigNovedadesDiv) emailConfigNovedadesDiv.classList.add('hidden-view');
        });
    }
    if (btnNuevoCuaderno) btnNuevoCuaderno.addEventListener('click', () => toggleFormularioCuaderno(true, null));
    if (cancelarFormCuadernoBtn) cancelarFormCuadernoBtn.addEventListener('click', () => toggleFormularioCuaderno(false));
    if (formCuaderno) formCuaderno.addEventListener('submit', handleGuardarCuaderno);
    if (tablaCuadernosBody) {
        tablaCuadernosBody.addEventListener('click', (event) => {
            const target = event.target.closest('button');
             if (target && target.classList.contains('edit-cuaderno-btn')) handleEditarCuadernoClick(target.dataset.id);
            else if (target && target.classList.contains('delete-cuaderno-btn')) handleEliminarCuadernoClick(target.dataset.id);
        });
    }

    if (formNovedad) formNovedad.addEventListener('submit', handleGuardarNovedad);
    if (closeFormNovedadModalBtn) closeFormNovedadModalBtn.addEventListener('click', cerrarFormularioNovedad);
    if (cancelNovedadBtn) cancelNovedadBtn.addEventListener('click', cerrarFormularioNovedad);
    
    if (btnVolverADashboardUsuario) { 
        btnVolverADashboardUsuario.addEventListener('click', () => {
            if (vistaAnteriorParaDetalleCuaderno) {
                mostrarVista(vistaAnteriorParaDetalleCuaderno);
            } else if (currentUser.rol === 'operario') {
                mostrarVista(VISTAS.OPERARIO_DASHBOARD);
            } else if (currentUser.rol === 'supervisor') {
                mostrarVista(VISTAS.SUPERVISOR_GESTION_NOVEDADES); 
            } else {
                 mostrarVista(VISTAS.LOGIN); 
            }
            cuadernoActualOperario = null; 
            vistaAnteriorParaDetalleCuaderno = null;
        });
    }
    if (btnAbrirFormNovedadDesdeDetalle) {
        btnAbrirFormNovedadDesdeDetalle.addEventListener('click', () => {
            if (cuadernoActualOperario) {
                abrirFormularioNovedad(cuadernoActualOperario.id, cuadernoActualOperario.nombre);
            } else {
                console.error("No hay un cuaderno actual seleccionado para agregar novedad.");
                if (vistaAnteriorParaDetalleCuaderno) {
                     mostrarVista(vistaAnteriorParaDetalleCuaderno);
                } else if (currentUser && currentUser.rol === 'operario') {
                    mostrarVista(VISTAS.OPERARIO_DASHBOARD);
                } else if (currentUser && currentUser.rol === 'supervisor') {
                     mostrarVista(VISTAS.SUPERVISOR_GESTION_NOVEDADES);
                }
            }
        });
    }

    if (supervisorDatePicker) {
        supervisorDatePicker.addEventListener('change', renderizarDashboardSupervisor);
    }
    if (supervisorGridNovedadesBody) {
        supervisorGridNovedadesBody.addEventListener('click', (event) => {
            const target = event.target.closest('.ver-detalles-supervisor-btn');
            if (target) {
                const cuadernoId = target.dataset.cuadernoId;
                const cuadernoNombre = target.dataset.cuadernoNombre;
                const fecha = target.dataset.fecha;
                const tipoCuaderno = target.dataset.cuadernoTipo; 
                mostrarDetallesNovedadesParaSupervisor(cuadernoId, cuadernoNombre, fecha, tipoCuaderno);
            }
        });
    }
    if(closeDetalleNovedadesModalBtn) {
        closeDetalleNovedadesModalBtn.addEventListener('click', () => {
            if(detalleNovedadesModal) detalleNovedadesModal.style.display = 'none';
        });
    }
    if(closeEmailSimulacionModalBtn) { 
        closeEmailSimulacionModalBtn.addEventListener('click', () => {
            if(emailSimulacionModal) emailSimulacionModal.style.display = 'none';
        });
    }
    if(okEmailSimulacionModalBtn) { 
        okEmailSimulacionModalBtn.addEventListener('click', () => {
            if(emailSimulacionModal) emailSimulacionModal.style.display = 'none';
        });
    }


    if (formChecklist) {
        formChecklist.addEventListener('submit', handleGuardarChecklist);
    }


    inicializarDatos();
    mostrarVista(VISTAS.LOGIN);
});
