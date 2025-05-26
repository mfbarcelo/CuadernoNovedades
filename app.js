// app.js - Lógica para el Cuaderno de Novedades del Laboratorio
// Versión con Firebase (Autenticación y Firestore)

document.addEventListener('DOMContentLoaded', () => {
    // Firebase services ya están inicializados en index.html y disponibles como 'auth' y 'db'

    // --- SELECTORES DEL DOM ---
    // ... (mantener todos los selectores del DOM existentes)
    const loginView = document.getElementById('loginView');
    const adminDashboardView = document.getElementById('adminDashboardView');
    const adminGestionUsuariosView = document.getElementById('adminGestionUsuariosView');
    const adminGestionCuadernosView = document.getElementById('adminGestionCuadernosView');
    const operarioDashboardView = document.getElementById('operarioDashboardView');
    const operarioCuadernoDetalleView = document.getElementById('operarioCuadernoDetalleView'); 
    const supervisorDashboardView = document.getElementById('supervisorDashboardView'); 
    const supervisorGestionNovedadesView = document.getElementById('supervisorGestionNovedadesView'); 
    const mainNav = document.getElementById('mainNav');
    const operarioCuadernosContainer = document.getElementById('operarioCuadernosContainer');
    const operarioWelcomeMessage = document.getElementById('operarioWelcomeMessage');
    const detalleCuadernoNombre = document.getElementById('detalleCuadernoNombre'); 
    const listaNovedadesCuadernoOperario = document.getElementById('listaNovedadesCuadernoOperario');
    const btnVolverADashboardUsuario = document.getElementById('btnVolverADashboardUsuario'); 
    const btnAbrirFormNovedadDesdeDetalle = document.getElementById('btnAbrirFormNovedadDesdeDetalle');
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
    const supervisorDatePicker = document.getElementById('supervisorDatePicker');
    const supervisorGridNovedadesBody = document.getElementById('supervisorGridNovedadesBody');
    const totalCuadernosConNovedadesSpan = document.getElementById('totalCuadernosConNovedades');
    const totalCuadernosSinNovedadesSpan = document.getElementById('totalCuadernosSinNovedades');
    const totalNovedadesRegistradasSpan = document.getElementById('totalNovedadesRegistradas');
    const supervisorGestionWelcomeMessage = document.getElementById('supervisorGestionWelcomeMessage');
    const supervisorGestionCuadernosContainer = document.getElementById('supervisorGestionCuadernosContainer');
    const formNovedadModal = document.getElementById('formNovedadModal');
    const detalleNovedadesModal = document.getElementById('detalleNovedadesModal');
    const detalleNovedadesTitle = document.getElementById('detalleNovedadesTitle');
    const detalleNovedadesContent = document.getElementById('detalleNovedadesContent');
    const closeDetalleNovedadesModalBtn = document.getElementById('closeDetalleNovedadesModal');
    const emailSimulacionModal = document.getElementById('emailSimulacionModal');
    const emailSimDestinatarios = document.getElementById('emailSimDestinatarios');
    const emailSimAsunto = document.getElementById('emailSimAsunto');
    const emailSimCuerpo = document.getElementById('emailSimCuerpo');
    const closeEmailSimulacionModalBtn = document.getElementById('closeEmailSimulacionModal');
    const okEmailSimulacionModalBtn = document.getElementById('okEmailSimulacionModal');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const currentUserDisplay = document.getElementById('currentUserDisplay');
    const loginError = document.getElementById('loginError');
    const roleSpecificNav = document.getElementById('roleSpecificNav');
    const btnNuevoUsuario = document.getElementById('btnNuevoUsuario');
    const formNuevoUsuarioContainer = document.getElementById('formNuevoUsuarioContainer');
    const formUsuario = document.getElementById('formUsuario');
    const formUsuarioTitle = document.getElementById('formUsuarioTitle');
    const usuarioIdToEditInput = document.getElementById('usuarioIdToEdit'); // Este es el UID de Firebase Auth
    const usuarioEmailInput = document.getElementById('usuarioEmail'); // Cambiado de usuarioUsernameInput
    const usuarioNombreCompletoInput = document.getElementById('usuarioNombreCompleto');
    const usuarioPasswordInput = document.getElementById('usuarioPassword');
    const usuarioRolInput = document.getElementById('usuarioRol');
    const cancelarFormUsuarioBtn = document.getElementById('cancelarFormUsuario');
    const usuarioFormError = document.getElementById('usuarioFormError');
    const tablaUsuariosBody = document.getElementById('tablaUsuariosBody');
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
    
    // --- Nombres de Colecciones Firestore ---
    const COLECCION_USUARIOS = 'usuarios';
    const COLECCION_CUADERNOS = 'cuadernos';
    const COLECCION_NOVEDADES = 'novedades';
    const COLECCION_CHECKLISTS = 'checklistEntradas';


    // --- ESTADO DE LA APLICACIÓN ---
    let currentUser = null; // { uid, email, rol, nombreCompleto }
    // Los arrays de datos ahora se cargarán desde Firestore
    let usuarios = []; // Se cargará desde Firestore (solo info adicional, Auth es la fuente de verdad para usuarios)
    let cuadernos = [];
    let novedades = [];
    let checklistEntradas = []; 
    let editandoUsuarioId = null; // UID del usuario en edición
    let editandoCuadernoId = null; // ID del documento del cuaderno en Firestore
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


    // --- LÓGICA DE DATOS (Firestore) ---
    async function cargarDatosInicialesDesdeFirestore() {
        try {
            // Cargar Cuadernos
            const cuadernosSnapshot = await db.collection(COLECCION_CUADERNOS).get();
            if (cuadernosSnapshot.empty) {
                console.log("No hay cuadernos en Firestore, creando datos semilla...");
                const cuadernosSeed = [
                    {
                        id: 'LAB-HEMA', nombre: 'Laboratorio Central - Hematología', tipo: 'novedades', usuariosAsignados: [], // Se asignarán UIDs de Firebase
                        colorClase: 'bg-red-500 text-white hover:bg-red-600', 
                        emailsTodoRealizado: 'jefe.lab@example.com', emailsConPendientes: 'alerta.calidad@example.com', 
                        tareasDefinicion: [] 
                    },
                    {
                        id: 'CHK-LIMPIEZA', nombre: 'Checklist Limpieza General', tipo: 'checklist', usuariosAsignados: [],
                        colorClase: 'bg-green-500 text-white hover:bg-green-600', 
                        emailsTodoRealizado: 'supervisor.limpieza@example.com', emailsConPendientes: 'jefe.calidad@example.com', 
                        tareasDefinicion: [ 
                            { nombreFamilia: "Área General", tareas: ["Suelos limpios", "Papeleras vacías"] },
                            { nombreFamilia: "Mesadas", tareas: ["Despejadas y desinfectadas"] }
                        ] 
                    }
                ];
                for (const cuaderno of cuadernosSeed) {
                    await db.collection(COLECCION_CUADERNOS).doc(cuaderno.id).set(cuaderno);
                }
                console.log("Cuadernos semilla creados en Firestore.");
                // Volver a cargar después de crear
                 const snapshot = await db.collection(COLECCION_CUADERNOS).get();
                 cuadernos = snapshot.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() })); // Guardar ID de Firestore
            } else {
                 cuadernos = cuadernosSnapshot.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
            }

            // Cargar Novedades
            const novedadesSnapshot = await db.collection(COLECCION_NOVEDADES).orderBy("fecha", "desc").orderBy("hora", "desc").get();
            novedades = novedadesSnapshot.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));

            // Cargar ChecklistEntradas
            const checklistsSnapshot = await db.collection(COLECCION_CHECKLISTS).orderBy("fecha", "desc").orderBy("hora", "desc").get();
            checklistEntradas = checklistsSnapshot.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
            
            console.log("Datos cargados desde Firestore:", { cuadernos, novedades, checklistEntradas });

        } catch (error) {
            console.error("Error cargando datos iniciales desde Firestore: ", error);
        }
    }


    // --- LÓGICA DE NAVEGACIÓN Y VISTAS ---
    async function mostrarVista(idVista, params = {}) { // Hacerla async por si carga datos
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
                currentUserDisplay.textContent = `Usuario: ${currentUser.nombreCompleto || currentUser.email} (${currentUser.rol || 'N/A'})`;
                actualizarNavegacionPorRol();
            }
            // Cargar datos específicos de la vista
            if (idVista === VISTAS.ADMIN_GESTION_USUARIOS) await renderizarTablaUsuarios(); // ahora async
            else if (idVista === VISTAS.ADMIN_GESTION_CUADERNOS) await renderizarTablaCuadernos(); // ahora async
            else if (idVista === VISTAS.OPERARIO_DASHBOARD) await renderizarDashboardOperario(); // ahora async
            else if (idVista === VISTAS.SUPERVISOR_GESTION_NOVEDADES) await renderizarSupervisorGestionNovedadesView(); // ahora async
            else if (idVista === VISTAS.OPERARIO_CUADERNO_DETALLE && params.cuadernoId) {
                 await mostrarDetalleCuadernoOperario(params.cuadernoId, params.cuadernoNombre, params.vistaRetorno || VISTAS.OPERARIO_DASHBOARD); // ahora async
            } else if (idVista === VISTAS.SUPERVISOR_DASHBOARD) {
                if (supervisorDatePicker) {
                    if (!supervisorDatePicker.value) { 
                         supervisorDatePicker.valueAsDate = new Date();
                    }
                    await renderizarDashboardSupervisor(); // ahora async
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
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // Usuario está logueado
            console.log("Usuario autenticado:", user.uid, user.email);
            // Obtener rol y nombre completo de Firestore
            const userDocRef = db.collection(COLECCION_USUARIOS).doc(user.uid);
            const userDoc = await userDocRef.get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                currentUser = {
                    uid: user.uid,
                    email: user.email,
                    rol: userData.rol,
                    nombreCompleto: userData.nombreCompleto
                };
                // Cargar datos de la app ahora que el usuario está autenticado y tenemos su rol
                await cargarDatosInicialesDesdeFirestore(); 

                // Redirigir según rol
                if (currentUser.rol === 'admin') mostrarVista(VISTAS.ADMIN_DASHBOARD);
                else if (currentUser.rol === 'operario') mostrarVista(VISTAS.OPERARIO_DASHBOARD);
                else if (currentUser.rol === 'supervisor') mostrarVista(VISTAS.SUPERVISOR_DASHBOARD);
                else mostrarVista(VISTAS.LOGIN); // Fallback si el rol no es reconocido
            } else {
                // Esto podría pasar si un usuario existe en Auth pero no en Firestore (ej. admin creado manualmente)
                // O si es un usuario nuevo que aún no tiene su doc en Firestore (el admin lo crea)
                console.warn(`Documento para usuario ${user.uid} no encontrado en Firestore. Asumiendo rol por defecto o esperando creación por admin.`);
                // Para el admin creado manualmente en Firebase, podemos asignarle el rol aquí si es el primer uso
                if (user.email === "admin@admin.com" || user.email === "admin@tu-dominio.com") { // Ajustar si es necesario
                     console.log("Intentando establecer rol de admin para el usuario semilla.");
                     try {
                        await db.collection(COLECCION_USUARIOS).doc(user.uid).set({
                            email: user.email,
                            nombreCompleto: "Administrador Firebase",
                            rol: "admin"
                        });
                        currentUser = { uid: user.uid, email: user.email, rol: "admin", nombreCompleto: "Administrador Firebase" };
                        await cargarDatosInicialesDesdeFirestore();
                        mostrarVista(VISTAS.ADMIN_DASHBOARD);
                     } catch (errorSetAdmin) {
                        console.error("Error estableciendo rol de admin:", errorSetAdmin);
                        handleLogout();
                     }
                } else {
                    // Otros usuarios deberían ser creados por un admin a través de la app.
                    // Por ahora, si no hay doc, no podrán hacer mucho más que estar logueados.
                     currentUser = { uid: user.uid, email: user.email, rol: null, nombreCompleto: user.email }; // Rol desconocido
                     mostrarVista(VISTAS.LOGIN); // O una vista de "esperando aprobación"
                     // alert("Tu cuenta está siendo procesada. Por favor, contacta al administrador.");
                     // handleLogout(); // O desloguear si no tiene rol
                }
            }
        } else {
            // Usuario deslogueado
            currentUser = null;
            cuadernos = []; // Limpiar datos locales al desloguear
            novedades = [];
            checklistEntradas = [];
            mostrarVista(VISTAS.LOGIN);
            console.log("Usuario deslogueado o no autenticado.");
        }
    });


    async function handleLogin(event) {
        event.preventDefault();
        const emailInput = document.getElementById('loginEmail').value; // Cambiado de 'username'
        const passwordInput = document.getElementById('loginPassword').value; // Cambiado de 'password'
        loginError.textContent = '';
        
        try {
            await auth.signInWithEmailAndPassword(emailInput, passwordInput);
            // onAuthStateChanged se encargará de la redirección y carga de datos.
            loginForm.reset();
        } catch (error) {
            console.error("Error de inicio de sesión:", error);
            loginError.textContent = 'Email o contraseña incorrectos.';
        }
    }

    async function handleLogout() {
        try {
            await auth.signOut();
            // onAuthStateChanged se encargará de limpiar currentUser y mostrar loginView.
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }

    // --- GESTIÓN DE USUARIOS (ADMIN) ---
    function toggleFormularioUsuario(mostrar = true, usuarioParaEditar = null) {
        // ... (lógica sin cambios, pero usuarioIdToEditInput.value será el UID de Firebase)
        if (mostrar) {
            editandoUsuarioId = usuarioParaEditar ? usuarioParaEditar.uid : null; // Usar uid de Firebase
            formUsuarioTitle.textContent = usuarioParaEditar ? 'Editar Usuario' : 'Agregar Nuevo Usuario';
            usuarioEmailInput.value = usuarioParaEditar ? usuarioParaEditar.email : '';
            usuarioEmailInput.readOnly = !!usuarioParaEditar; // Email no editable
            usuarioNombreCompletoInput.value = usuarioParaEditar ? usuarioParaEditar.nombreCompleto : '';
            usuarioPasswordInput.value = ''; 
            usuarioPasswordInput.placeholder = usuarioParaEditar ? '(Dejar en blanco para no cambiar contraseña)' : 'Contraseña';
            // Contraseña solo requerida para NUEVOS usuarios en el formulario
            usuarioPasswordInput.required = !usuarioParaEditar; 
            usuarioRolInput.value = usuarioParaEditar ? usuarioParaEditar.rol : 'operario';
            
            usuarioIdToEditInput.value = editandoUsuarioId || ''; // Almacena el UID para edición

            formNuevoUsuarioContainer.classList.remove('hidden-view');
            usuarioFormError.textContent = '';
        } else {
            formNuevoUsuarioContainer.classList.add('hidden-view');
            formUsuario.reset();
            editandoUsuarioId = null;
            usuarioEmailInput.readOnly = false;
            usuarioPasswordInput.placeholder = 'Contraseña';
            usuarioPasswordInput.required = true; 
        }
    }

    async function renderizarTablaUsuarios() {
        if (!tablaUsuariosBody) return;
        tablaUsuariosBody.innerHTML = '<tr><td colspan="4" class="p-4 text-center">Cargando usuarios...</td></tr>';
        
        try {
            const usuariosSnapshot = await db.collection(COLECCION_USUARIOS).get();
            usuarios = usuariosSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() })); // uid es el ID del doc

            tablaUsuariosBody.innerHTML = ''; 
            if (usuarios.length === 0) {
                 tablaUsuariosBody.innerHTML = '<tr><td colspan="4" class="p-4 text-center">No hay usuarios registrados (aparte del admin inicial si fue creado).</td></tr>';
                 return;
            }

            usuarios.forEach(user => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50 transition-colors';
                // El ID de la tabla ahora es el email, el UID se usa internamente
                tr.innerHTML = `
                    <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.email}</td>
                    <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.nombreCompleto}</td>
                    <td class="py-2 px-4 border-b border-slate-200 text-sm">${user.rol}</td>
                    <td class="py-2 px-4 border-b border-slate-200 text-sm">
                        <button data-id="${user.uid}" class="edit-user-btn text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                        <button data-id="${user.uid}" class="delete-user-btn text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                    </td>
                `;
                tablaUsuariosBody.appendChild(tr);
            });
        } catch (error) {
            console.error("Error renderizando tabla de usuarios:", error);
            tablaUsuariosBody.innerHTML = '<tr><td colspan="4" class="p-4 text-center text-red-500">Error al cargar usuarios.</td></tr>';
        }
    }
    
    async function handleGuardarUsuario(event) {
        event.preventDefault();
        usuarioFormError.textContent = '';
        const email = usuarioEmailInput.value.trim();
        const nombreCompleto = usuarioNombreCompletoInput.value.trim();
        const password = usuarioPasswordInput.value; 
        const rol = usuarioRolInput.value;

        if (!email || !nombreCompleto || !rol) {
            usuarioFormError.textContent = 'Email, nombre completo y rol son obligatorios.';
            return;
        }

        if (editandoUsuarioId) { // editandoUsuarioId es el UID
            // Lógica de edición: Solo actualiza Firestore (rol, nombreCompleto). 
            // La contraseña y el email se gestionan directamente en Firebase Auth por el admin.
            try {
                await db.collection(COLECCION_USUARIOS).doc(editandoUsuarioId).update({
                    nombreCompleto: nombreCompleto,
                    rol: rol
                    // Nota: El email no se actualiza aquí, ya que es el identificador en Auth.
                    // La contraseña se actualiza en Firebase Auth directamente si es necesario.
                });
                console.log("Usuario actualizado en Firestore:", editandoUsuarioId);
                // Si se proveyó una nueva contraseña, el admin debería cambiarla en Firebase Auth console.
                // O implementar una función de admin para cambiarla (más complejo).
                 if (password) {
                    alert("Información del usuario actualizada. Para cambiar la contraseña, por favor use la consola de Firebase Authentication o implemente una función específica para ello.");
                }
            } catch (error) {
                console.error("Error actualizando usuario en Firestore: ", error);
                usuarioFormError.textContent = "Error al actualizar usuario: " + error.message;
                return;
            }
        } else {
            // Lógica de creación
            if (!password) {
                 usuarioFormError.textContent = 'La contraseña es obligatoria para nuevos usuarios.';
                 return;
            }
            try {
                // 1. Crear usuario en Firebase Authentication
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const newUser = userCredential.user;
                console.log("Nuevo usuario creado en Firebase Auth:", newUser.uid);

                // 2. Guardar información adicional en Firestore
                await db.collection(COLECCION_USUARIOS).doc(newUser.uid).set({
                    email: email,
                    nombreCompleto: nombreCompleto,
                    rol: rol,
                    uid: newUser.uid // Guardar uid también en el documento
                });
                console.log("Información adicional del usuario guardada en Firestore");

            } catch (error) {
                console.error("Error creando usuario:", error);
                if (error.code === 'auth/email-already-in-use') {
                    usuarioFormError.textContent = 'El email ya está en uso.';
                } else if (error.code === 'auth/weak-password') {
                    usuarioFormError.textContent = 'La contraseña es demasiado débil (mínimo 6 caracteres).';
                } else {
                    usuarioFormError.textContent = 'Error al crear usuario: ' + error.message;
                }
                return;
            }
        }
        
        await renderizarTablaUsuarios(); // Refrescar tabla desde Firestore
        toggleFormularioUsuario(false); 
    }

    function handleEditarUsuarioClick(userId) { // userId es el UID
        const usuarioAEditar = usuarios.find(u => u.uid === userId); // Buscar por uid
        if (usuarioAEditar) {
            toggleFormularioUsuario(true, usuarioAEditar);
        } else {
            console.error("No se encontró el usuario para editar con UID:", userId);
        }
    }

    async function handleEliminarUsuarioClick(userId) { // userId es el UID
        const usuarioAEliminar = usuarios.find(u => u.uid === userId);
        if (!usuarioAEliminar) {
            console.error("No se encontró el usuario para eliminar con UID:", userId);
            return;
        }
        // Evitar eliminar el admin actual o a sí mismo (basado en currentUser.uid)
        if (currentUser && currentUser.uid === userId) {
            alert("No puedes eliminarte a ti mismo.");
            return;
        }
        // Podríamos tener una lista de emails de admins que no se pueden borrar, o basarnos en el rol
        // if (usuarioAEliminar.rol === 'admin' && usuarios.filter(u => u.rol === 'admin').length <= 1) {
        //    alert("No se puede eliminar al único administrador.");
        //    return;
        // }


        if (confirm(`¿Estás seguro de que quieres eliminar al usuario "${usuarioAEliminar.nombreCompleto || usuarioAEliminar.email}"? Esta acción es compleja y requiere eliminar de Authentication también (manual por ahora).`)) {
            try {
                // Eliminar de Firestore
                await db.collection(COLECCION_USUARIOS).doc(userId).delete();
                console.log("Usuario eliminado de Firestore:", userId);
                
                // NOTA IMPORTANTE: Eliminar de Firebase Authentication es una operación sensible
                // y generalmente se hace desde un backend con privilegios de admin, o requiere
                // reautenticación reciente del usuario. Para esta demo, se indicará al admin
                // que lo borre manualmente de la consola de Firebase Authentication.
                alert(`Usuario ${usuarioAEliminar.nombreCompleto || usuarioAEliminar.email} eliminado de la base de datos de la app. Por favor, elimínalo también de Firebase Authentication manualmente si es necesario.`);

                if (editandoUsuarioId === userId) {
                    toggleFormularioUsuario(false);
                }
                await renderizarTablaUsuarios(); // Refrescar
            } catch (error) {
                console.error("Error eliminando usuario de Firestore:", error);
                alert("Error al eliminar usuario de la base de datos de la app.");
            }
        }
    }

    // --- GESTIÓN DE CUADERNOS (ADMIN) ---
    // ... (Las funciones de cuadernos, novedades, checklist se adaptarán después) ...
    // ... (Mantener las funciones existentes que usan los arrays locales por ahora para no romper todo)
    // ... (Solo se han modificado las partes de Autenticación y Gestión de Usuarios en esta etapa)

    // --- Las siguientes funciones CRUD de cuadernos y entradas necesitan ser migradas a Firestore ---
    // Esto se hará en el siguiente paso. Por ahora, la app no funcionará completamente
    // para la gestión de cuadernos, novedades y checklists hasta que se migren.

    function popularSelectUsuariosOperarios(selectedUserIds = []) {
        if (!cuadernoUsuariosAsignadosContainer) return;
        cuadernoUsuariosAsignadosContainer.innerHTML = ''; 
        // Filtrar usuarios desde el array 'usuarios' que ya debería estar cargado de Firestore
        const operarios = usuarios.filter(u => u.rol === 'operario');

        if (operarios.length === 0) {
            cuadernoUsuariosAsignadosContainer.innerHTML = '<p class="text-sm text-slate-500">No hay usuarios operarios para asignar.</p>';
            return;
        }

        operarios.forEach(op => {
            const checkboxId = `user-assign-${op.uid}`; // Usar op.uid
            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.className = 'flex items-center space-x-2 p-1 hover:bg-slate-100 rounded cursor-pointer';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = checkboxId;
            checkbox.value = op.uid; // Usar op.uid
            checkbox.className = 'form-checkbox h-4 w-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500';
            if (selectedUserIds.includes(op.uid)) { // Comparar con op.uid
                checkbox.checked = true;
            }
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(`${op.nombreCompleto} (${op.email})`));
            cuadernoUsuariosAsignadosContainer.appendChild(label);
        });
    }
    
    // Funciones de cuadernos, novedades, checklists (NO MODIFICADAS AÚN PARA FIRESTORE)
    // Se dejarán aquí para que la estructura general del script no se rompa,
    // pero su funcionalidad dependerá de los arrays locales que ahora están vacíos
    // hasta que se implemente su carga/guardado con Firestore.
    // ESTAS FUNCIONES NECESITARÁN SER ASÍNCRONAS Y USAR 'await db...'

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

    async function toggleFormularioCuaderno(mostrar = true, firestoreDocId = null) { // firestoreDocId es el ID del doc en Firestore
        if (mostrar) {
            editandoCuadernoId = firestoreDocId; // Guardar el ID de Firestore
            let cuadernoParaEditar = null;
            if (firestoreDocId) {
                const docSnap = await db.collection(COLECCION_CUADERNOS).doc(firestoreDocId).get();
                if (docSnap.exists) {
                    cuadernoParaEditar = { firestoreId: docSnap.id, ...docSnap.data()};
                } else {
                    console.error("Cuaderno para editar no encontrado en Firestore:", firestoreDocId);
                }
            }

            formCuadernoTitle.textContent = cuadernoParaEditar ? 'Editar Cuaderno' : 'Agregar Nuevo Cuaderno';
            
            cuadernoIdInput.value = cuadernoParaEditar ? cuadernoParaEditar.id : ''; // Este es el ID legible/manual
            cuadernoIdInput.readOnly = !!cuadernoParaEditar; 
            
            cuadernoNombreInput.value = cuadernoParaEditar ? cuadernoParaEditar.nombre : '';
            cuadernoTipoSelect.value = cuadernoParaEditar ? cuadernoParaEditar.tipo : 'novedades'; 
            popularSelectorColorCuaderno(cuadernoParaEditar ? cuadernoParaEditar.colorClase : COLORES_CUADERNO[0].clase); 

            const esChecklist = cuadernoTipoSelect.value === 'checklist';
            if (emailConfigUnificadoDiv) emailConfigUnificadoDiv.classList.remove('hidden-view'); 
            if (emailConfigNovedadesDiv && emailConfigNovedadesDiv.id === 'emailConfigNovedades') { 
                 emailConfigNovedadesDiv.classList.add('hidden-view'); 
            }
            
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

            // Popular usuarios asignados requiere que 'usuarios' (con UIDs) esté cargado
            await renderizarTablaUsuarios(); // Asegurar que 'usuarios' esté poblado
            popularSelectUsuariosOperarios(cuadernoParaEditar ? (cuadernoParaEditar.usuariosAsignados || []) : []);


            cuadernoIdToEditInput.value = editandoCuadernoId || ''; // Almacena el ID de Firestore
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
            if (emailConfigNovedadesDiv && emailConfigNovedadesDiv.id === 'emailConfigNovedades') {
                emailConfigNovedadesDiv.classList.add('hidden-view');
            }
        }
    }
    
    // ... (Resto de funciones de cuadernos, novedades, checklist, supervisor, etc.,
    //      necesitarán ser adaptadas a Firestore en pasos subsiguientes.
    //      Por ahora, solo se modificó la parte de Autenticación y Gestión de Usuarios)


    // --- INICIALIZACIÓN Y EVENT LISTENERS ---
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
    
    // Listener para `onAuthStateChanged` se define arriba para que se ejecute pronto.

    // ... (Resto de listeners como estaban, pero su funcionalidad dependerá de los datos de Firestore)

    // Inicializar datos y mostrar vista de login (onAuthStateChanged manejará la vista inicial)
    // No llamar a mostrarVista(VISTAS.LOGIN) aquí directamente, dejar que onAuthStateChanged lo haga.
    // La carga de datos desde Firestore se hará DESPUÉS de que el usuario esté autenticado.
    // El primer renderizado de la tabla de usuarios se hará cuando se muestre la vista de gestión de usuarios.
    
    // Botones de navegación del Admin Dashboard
    const btnGoToGestionUsuarios = document.getElementById('btnGoToGestionUsuarios');
    const btnGoToGestionCuadernos = document.getElementById('btnGoToGestionCuadernos');

    if (btnGoToGestionUsuarios) btnGoToGestionUsuarios.addEventListener('click', () => mostrarVista(VISTAS.ADMIN_GESTION_USUARIOS));
    if (btnGoToGestionCuadernos) btnGoToGestionCuadernos.addEventListener('click', () => mostrarVista(VISTAS.ADMIN_GESTION_CUADERNOS));

    // Listeners para Gestión de Usuarios
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

    // Listeners para Gestión de Cuadernos (se completarán cuando se migre cuadernos a Firestore)
    if (cuadernoTipoSelect) { 
        cuadernoTipoSelect.addEventListener('change', (event) => {
            const esChecklist = event.target.value === 'checklist';
            if (cuadernoTareasChecklistContainer) { 
                cuadernoTareasChecklistContainer.classList.toggle('hidden-view', !esChecklist);
            }
            if (emailConfigUnificadoDiv) emailConfigUnificadoDiv.classList.remove('hidden-view');
            if (emailConfigNovedadesDiv && emailConfigNovedadesDiv.id === 'emailConfigNovedades') {
                 emailConfigNovedadesDiv.classList.add('hidden-view');
            }
        });
    }
    if (btnNuevoCuaderno) btnNuevoCuaderno.addEventListener('click', () => toggleFormularioCuaderno(true, null)); // Ya es async
    if (cancelarFormCuadernoBtn) cancelarFormCuadernoBtn.addEventListener('click', () => toggleFormularioCuaderno(false)); // Ya es async
    // if (formCuaderno) formCuaderno.addEventListener('submit', handleGuardarCuaderno); // Se migrará
    // if (tablaCuadernosBody) { // Se migrará
    //     tablaCuadernosBody.addEventListener('click', (event) => {
    //         const target = event.target.closest('button');
    //          if (target && target.classList.contains('edit-cuaderno-btn')) handleEditarCuadernoClick(target.dataset.id);
    //         else if (target && target.classList.contains('delete-cuaderno-btn')) handleEliminarCuadernoClick(target.dataset.id);
    //     });
    // }

    // Formulario Novedad y Checklist (se migrarán)
    // if (formNovedad) formNovedad.addEventListener('submit', handleGuardarNovedad);
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
    // if (btnAbrirFormNovedadDesdeDetalle) { // Se migrará
    //     btnAbrirFormNovedadDesdeDetalle.addEventListener('click', () => {
    //         // ...
    //     });
    // }

    // Dashboard Supervisor (se migrará)
    // if (supervisorDatePicker) supervisorDatePicker.addEventListener('change', renderizarDashboardSupervisor);
    // if (supervisorGridNovedadesBody) { // Se migrará
    //     // ...
    // }
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

    // if (formChecklist) formChecklist.addEventListener('submit', handleGuardarChecklist); // Se migrará


    // No llamar a inicializarDatos() aquí directamente, se llamará desde onAuthStateChanged
    // No llamar a mostrarVista(VISTAS.LOGIN) aquí, onAuthStateChanged lo maneja.

});
