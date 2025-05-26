// app.js - Lógica para el Cuaderno de Novedades del Laboratorio
// Versión con Firebase (Autenticación y Firestore)

document.addEventListener('DOMContentLoaded', () => {
    // Firebase services ya están inicializados en index.html y disponibles como 'auth' y 'db'

    // --- SELECTORES DEL DOM ---
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
    const usuarioIdToEditInput = document.getElementById('usuarioIdToEdit'); 
    const usuarioEmailInput = document.getElementById('usuarioEmail'); 
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
    const cuadernoIdManualInput = document.getElementById('cuadernoId'); 
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
    const closeFormNovedadModalBtnNovedad = document.getElementById('closeFormNovedadModal'); 
    const cancelNovedadBtn = document.getElementById('cancelNovedad');
    const novedadFormError = document.getElementById('novedadFormError');
    

    // --- Nombres de Colecciones Firestore ---
    const COLECCION_USUARIOS = 'usuarios';
    const COLECCION_CUADERNOS = 'cuadernos';
    const COLECCION_NOVEDADES = 'novedades';
    const COLECCION_CHECKLISTS = 'checklistEntradas';


    // --- ESTADO DE LA APLICACIÓN ---
    let currentUser = null; 
    let usuarios = []; 
    let cuadernos = []; 
    let novedades = []; 
    let checklistEntradas = []; 
    let editandoUsuarioId = null; 
    let editandoCuadernoFirestoreId = null; 
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
    async function cargarDatosGlobales() { 
        try {
            const cuadernosSnapshot = await db.collection(COLECCION_CUADERNOS).orderBy("nombre").get(); // Ordenar por nombre para consistencia
            cuadernos = cuadernosSnapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));
            
            if (cuadernosSnapshot.empty && currentUser && currentUser.rol === 'admin') { // Solo el admin crea datos semilla
                console.log("No hay cuadernos en Firestore, creando datos semilla...");
                const cuadernosSeed = [
                    {
                        id: 'LAB-HEMA', nombre: 'Laboratorio Central - Hematología', tipo: 'novedades', usuariosAsignados: [], 
                        colorClase: 'bg-red-500 text-white hover:bg-red-600', 
                        emailsTodoRealizado: 'jefe.lab@example.com,gerencia@example.com', 
                        emailsConPendientes: 'jefe.lab@example.com,alerta.calidad@example.com', 
                        tareasDefinicion: [] 
                    },
                    {
                        id: 'CHK-LIMPIEZA', nombre: 'Checklist Limpieza General', tipo: 'checklist', usuariosAsignados: [],
                        colorClase: 'bg-green-500 text-white hover:bg-green-600', 
                        emailsTodoRealizado: 'supervisor.limpieza@example.com', 
                        emailsConPendientes: 'jefe.calidad@example.com', 
                        tareasDefinicion: [ 
                            { nombreFamilia: "Área de Recepción", tareas: ["Limpiar mostrador", "Verificar folletos"] },
                            { nombreFamilia: "Equipos", tareas: ["Calibrar equipo A", "Revisar mantenimiento equipo B"] }
                        ] 
                    }
                ];
                const batch = db.batch();
                for (const cuaderno of cuadernosSeed) {
                    const docRef = db.collection(COLECCION_CUADERNOS).doc(cuaderno.id); 
                    batch.set(docRef, cuaderno);
                }
                await batch.commit();
                console.log("Cuadernos semilla creados en Firestore.");
                const snapshot = await db.collection(COLECCION_CUADERNOS).orderBy("nombre").get();
                cuadernos = snapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));
            }

            // Simplificar query para evitar error de índice, ordenar en cliente si es necesario después
            const novedadesSnapshot = await db.collection(COLECCION_NOVEDADES).orderBy("fecha", "desc").get();
            novedades = novedadesSnapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));

            const checklistsSnapshot = await db.collection(COLECCION_CHECKLISTS).orderBy("fecha", "desc").get();
            checklistEntradas = checklistsSnapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));
            
            console.log("Datos globales cargados desde Firestore:", { cuadernos, novedades, checklistEntradas });

        } catch (error) {
            console.error("Error cargando datos globales desde Firestore: ", error);
            // Mostrar un error más amigable al usuario si es necesario
        }
    }


    // --- LÓGICA DE NAVEGACIÓN Y VISTAS ---
    async function mostrarVista(idVista, params = {}) { 
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
            if (idVista === VISTAS.ADMIN_GESTION_USUARIOS) await renderizarTablaUsuarios(); 
            else if (idVista === VISTAS.ADMIN_GESTION_CUADERNOS) await renderizarTablaCuadernos(); 
            else if (idVista === VISTAS.OPERARIO_DASHBOARD) await renderizarDashboardOperario(); 
            else if (idVista === VISTAS.SUPERVISOR_GESTION_NOVEDADES) await renderizarSupervisorGestionNovedadesView(); 
            else if (idVista === VISTAS.OPERARIO_CUADERNO_DETALLE && params.cuadernoId) {
                 await mostrarDetalleCuadernoOperario(params.cuadernoId, params.cuadernoNombre, params.vistaRetorno || VISTAS.OPERARIO_DASHBOARD); 
            } else if (idVista === VISTAS.SUPERVISOR_DASHBOARD) {
                if (supervisorDatePicker) {
                    if (!supervisorDatePicker.value) { 
                         supervisorDatePicker.valueAsDate = new Date();
                    }
                    await renderizarDashboardSupervisor(); 
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
            console.log("onAuthStateChanged: Usuario autenticado:", user.uid, user.email);
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
                console.log("onAuthStateChanged: currentUser establecido desde Firestore:", currentUser);
            } else {
                console.warn(`onAuthStateChanged: Documento para usuario ${user.uid} no encontrado en Firestore.`);
                // CAMBIA "admin@ejemplo.com" AL EMAIL EXACTO DE TU ADMIN EN FIREBASE AUTH
                if (user.email === "mfbarcelo@gmail.com") { 
                     console.log("Intentando establecer rol de admin para el usuario semilla.");
                     try {
                        const adminData = {
                            email: user.email,
                            nombreCompleto: "Administrador Principal", 
                            rol: "admin",
                            uid: user.uid
                        };
                        await db.collection(COLECCION_USUARIOS).doc(user.uid).set(adminData);
                        currentUser = adminData;
                        console.log("onAuthStateChanged: currentUser establecido para admin semilla:", currentUser);
                     } catch (errorSetAdmin) {
                        console.error("Error estableciendo rol de admin en Firestore:", errorSetAdmin);
                        await auth.signOut(); 
                        return; 
                     }
                } else {
                    console.error(`Usuario ${user.email} autenticado pero sin perfil en Firestore. Contactar administrador.`);
                    alert(`Tu cuenta (${user.email}) no está completamente configurada. Por favor, contacta al administrador.`);
                    await auth.signOut();
                    return;
                }
            }

            await cargarDatosGlobales(); 

            if (currentUser.rol === 'admin') mostrarVista(VISTAS.ADMIN_DASHBOARD);
            else if (currentUser.rol === 'operario') mostrarVista(VISTAS.OPERARIO_DASHBOARD);
            else if (currentUser.rol === 'supervisor') mostrarVista(VISTAS.SUPERVISOR_DASHBOARD);
            else mostrarVista(VISTAS.LOGIN);
            
        } else {
            currentUser = null;
            cuadernos = []; 
            novedades = [];
            checklistEntradas = [];
            mostrarVista(VISTAS.LOGIN);
            console.log("onAuthStateChanged: Usuario deslogueado o no autenticado.");
        }
    });


    async function handleLogin(event) {
        event.preventDefault();
        const emailInput = document.getElementById('loginEmail').value;
        const passwordInput = document.getElementById('loginPassword').value;
        loginError.textContent = '';
        
        if (!emailInput || !passwordInput) {
            loginError.textContent = 'Por favor, ingrese email y contraseña.';
            return;
        }

        try {
            console.log(`Intentando iniciar sesión con email: ${emailInput}`);
            await auth.signInWithEmailAndPassword(emailInput, passwordInput);
            // onAuthStateChanged se encargará de la redirección y carga de datos.
            loginForm.reset();
        } catch (error) {
            console.error("Error de inicio de sesión:", error.code, error.message);
            let friendlyMessage = "Email o contraseña incorrectos.";
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                friendlyMessage = "Email o contraseña incorrectos.";
            } else if (error.code === 'auth/invalid-email') {
                friendlyMessage = "El formato del email no es válido.";
            }
            loginError.textContent = friendlyMessage;
        }
    }

    async function handleLogout() {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    }

    // --- GESTIÓN DE USUARIOS (ADMIN) ---
    function toggleFormularioUsuario(mostrar = true, usuarioParaEditar = null) {
        if (mostrar) {
            editandoUsuarioId = usuarioParaEditar ? usuarioParaEditar.uid : null; 
            formUsuarioTitle.textContent = usuarioParaEditar ? 'Editar Usuario' : 'Agregar Nuevo Usuario';
            usuarioEmailInput.value = usuarioParaEditar ? usuarioParaEditar.email : '';
            usuarioEmailInput.readOnly = !!usuarioParaEditar; 
            usuarioNombreCompletoInput.value = usuarioParaEditar ? usuarioParaEditar.nombreCompleto : '';
            usuarioPasswordInput.value = ''; 
            usuarioPasswordInput.placeholder = usuarioParaEditar ? '(Dejar en blanco para no cambiar contraseña)' : 'Contraseña';
            usuarioPasswordInput.required = !usuarioParaEditar; 
            usuarioRolInput.value = usuarioParaEditar ? usuarioParaEditar.rol : 'operario';
            
            usuarioIdToEditInput.value = editandoUsuarioId || ''; 

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
            const querySnapshot = await db.collection(COLECCION_USUARIOS).orderBy("nombreCompleto").get(); // Ordenar por nombre
            const usuariosFirestore = [];
            querySnapshot.forEach((doc) => {
                usuariosFirestore.push({ uid: doc.id, ...doc.data() });
            });
            usuarios = usuariosFirestore; 

            tablaUsuariosBody.innerHTML = ''; 
            if (usuarios.length === 0) {
                 tablaUsuariosBody.innerHTML = '<tr><td colspan="4" class="p-4 text-center">No hay usuarios registrados.</td></tr>';
                 return;
            }

            usuarios.forEach(user => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50 transition-colors';
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

        try {
            if (editandoUsuarioId) { 
                await db.collection(COLECCION_USUARIOS).doc(editandoUsuarioId).update({
                    nombreCompleto: nombreCompleto,
                    rol: rol,
                    email: email 
                });
                console.log("Usuario actualizado en Firestore:", editandoUsuarioId);
                 if (password) {
                    alert("Información del usuario actualizada. Para cambiar la contraseña de un usuario existente, por favor use la consola de Firebase Authentication o implemente una función de 'reset password'.");
                }
            } else {
                if (!password) {
                     usuarioFormError.textContent = 'La contraseña es obligatoria para nuevos usuarios.';
                     return;
                }
                
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                const newUser = userCredential.user;
                console.log("Nuevo usuario creado en Firebase Auth:", newUser.uid);

                await db.collection(COLECCION_USUARIOS).doc(newUser.uid).set({
                    uid: newUser.uid,
                    email: email,
                    nombreCompleto: nombreCompleto,
                    rol: rol
                });
                console.log("Información adicional del usuario guardada en Firestore");
            }
            await renderizarTablaUsuarios(); 
            toggleFormularioUsuario(false); 
        } catch (error) {
            console.error("Error guardando usuario:", error);
            if (error.code === 'auth/email-already-in-use') {
                usuarioFormError.textContent = 'El email ya está en uso en Firebase Authentication.';
            } else if (error.code === 'auth/weak-password') {
                usuarioFormError.textContent = 'La contraseña es demasiado débil (mínimo 6 caracteres).';
            } else {
                usuarioFormError.textContent = 'Error al guardar usuario: ' + error.message;
            }
        }
    }
    
    function handleEditarUsuarioClick(userId) { 
        const usuarioAEditar = usuarios.find(u => u.uid === userId); 
        if (usuarioAEditar) {
            toggleFormularioUsuario(true, usuarioAEditar);
        } else {
            console.error("No se encontró el usuario para editar con UID:", userId);
        }
    }

    async function handleEliminarUsuarioClick(userId) { 
        const usuarioAEliminar = usuarios.find(u => u.uid === userId);
        if (!usuarioAEliminar) {
            console.error("No se encontró el usuario para eliminar con UID:", userId);
            return;
        }
        
        if (currentUser && currentUser.uid === userId) {
            alert("No puedes eliminarte a ti mismo.");
            return;
        }
        const admins = usuarios.filter(u => u.rol === 'admin');
        if (usuarioAEliminar.rol === 'admin' && admins.length <= 1 && admins[0].uid === userId) {
             alert("No se puede eliminar al único administrador.");
            return;
        }


        if (confirm(`¿Estás seguro de que quieres eliminar al usuario "${usuarioAEliminar.nombreCompleto || usuarioAEliminar.email}"? Esta acción es compleja y requiere eliminar de Authentication también (manual por ahora).`)) {
            try {
                await db.collection(COLECCION_USUARIOS).doc(userId).delete();
                console.log("Usuario eliminado de Firestore:", userId);
                
                alert(`Usuario ${usuarioAEliminar.nombreCompleto || usuarioAEliminar.email} eliminado de la base de datos de la app. Por favor, elimínalo también de Firebase Authentication manualmente si es necesario.`);

                if (editandoUsuarioId === userId) {
                    toggleFormularioUsuario(false);
                }
                await renderizarTablaUsuarios(); 
            } catch (error) {
                console.error("Error eliminando usuario de Firestore:", error);
                alert("Error al eliminar usuario de la base de datos de la app.");
            }
        }
    }


    // --- GESTIÓN DE CUADERNOS (ADMIN) ---
    // ... (Las funciones de cuadernos se migrarán en el siguiente paso) ...
    async function renderizarTablaCuadernos() { 
        if (!tablaCuadernosBody) return;
        tablaCuadernosBody.innerHTML = '<tr><td colspan="6" class="p-4 text-center">Cargando cuadernos...</td></tr>';
        
        try {
            // 'cuadernos' ya debería estar cargado por cargarDatosGlobales()
            // Si no, recargar aquí:
            if (cuadernos.length === 0 && currentUser) { // Solo recargar si está vacío y hay usuario
                 await cargarDatosGlobales();
            }


            tablaCuadernosBody.innerHTML = ''; 
            if (cuadernos.length === 0) {
                 tablaCuadernosBody.innerHTML = '<tr><td colspan="6" class="p-4 text-center">No hay cuadernos configurados.</td></tr>';
                 return;
            }

            cuadernos.forEach(cuaderno => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50 transition-colors';
                
                const nombresUsuariosAsignados = (cuaderno.usuariosAsignados || []) 
                    .map(userId => {
                        const user = usuarios.find(u => u.uid === userId); // Comparar con uid
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
                        <button data-id="${cuaderno.firestoreDocId}" class="edit-cuaderno-btn text-blue-600 hover:text-blue-800 mr-2 font-medium">Editar</button>
                        <button data-id="${cuaderno.firestoreDocId}" class="delete-cuaderno-btn text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                    </td>
                `;
                tablaCuadernosBody.appendChild(tr);
            });
        } catch (error) {
            console.error("Error renderizando tabla de cuadernos:", error);
            tablaCuadernosBody.innerHTML = '<tr><td colspan="6" class="p-4 text-center text-red-500">Error al cargar cuadernos.</td></tr>';
        }
    }

    async function handleGuardarCuaderno(event) { 
        event.preventDefault();
        cuadernoFormError.textContent = '';

        const idManual = cuadernoIdManualInput.value.trim().toUpperCase(); 
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
                usuariosAsignadosSeleccionados.push(checkbox.value); // Estos son UIDs
            });
        }
        
        if (!idManual || !nombre || !tipo) { 
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
            id: idManual, // Guardar el ID manual
            nombre, tipo, tareasDefinicion, colorClase,
            emailsTodoRealizado, 
            emailsConPendientes, 
            usuariosAsignados: usuariosAsignadosSeleccionados
        };

        try {
            if (editandoCuadernoFirestoreId) { // Este es el ID del documento de Firestore
                await db.collection(COLECCION_CUADERNOS).doc(editandoCuadernoFirestoreId).update(datosCuaderno);
                console.log("Cuaderno actualizado en Firestore:", editandoCuadernoFirestoreId);
            } else {
                // Al crear, el ID manual (idManual) será el ID del documento en Firestore
                const docRef = db.collection(COLECCION_CUADERNOS).doc(idManual);
                const docSnap = await docRef.get();
                if (docSnap.exists) {
                    cuadernoFormError.textContent = 'El ID del cuaderno ya existe. Debe ser único.';
                    return;
                }
                await docRef.set(datosCuaderno);
                console.log("Nuevo cuaderno creado en Firestore con ID:", idManual);
            }
            await cargarDatosGlobales(); // Recargar todos los cuadernos
            await renderizarTablaCuadernos(); 
            toggleFormularioCuaderno(false);
        } catch (error) {
            console.error("Error guardando cuaderno en Firestore:", error);
            cuadernoFormError.textContent = "Error al guardar cuaderno: " + error.message;
        }
    }
    
    async function handleEditarCuadernoClick(firestoreDocId) { 
        await toggleFormularioCuaderno(true, firestoreDocId); 
    }

    async function handleEliminarCuadernoClick(firestoreDocId) { 
        const cuadernoAEliminar = cuadernos.find(c => c.firestoreDocId === firestoreDocId);
        if (!cuadernoAEliminar) {
            console.error("Cuaderno a eliminar no encontrado en el array local:", firestoreDocId);
            return;
        }

        if (confirm(`¿Estás seguro de que quieres eliminar el cuaderno "${cuadernoAEliminar.nombre}"? Esta acción no se puede deshacer y eliminará todas sus novedades y checklists.`)) {
            try {
                // Eliminar el cuaderno
                await db.collection(COLECCION_CUADERNOS).doc(firestoreDocId).delete();
                
                // Eliminar novedades asociadas (esto puede ser costoso si hay muchas, considerar funciones de Firebase para producción)
                const novedadesQuery = db.collection(COLECCION_NOVEDADES).where("cuadernoId", "==", cuadernoAEliminar.id);
                const novedadesSnap = await novedadesQuery.get();
                const batchNovedades = db.batch();
                novedadesSnap.forEach(doc => batchNovedades.delete(doc.ref));
                await batchNovedades.commit();

                // Eliminar checklists asociados
                const checklistsQuery = db.collection(COLECCION_CHECKLISTS).where("cuadernoId", "==", cuadernoAEliminar.id);
                const checklistsSnap = await checklistsQuery.get();
                const batchChecklists = db.batch();
                checklistsSnap.forEach(doc => batchChecklists.delete(doc.ref));
                await batchChecklists.commit();

                console.log("Cuaderno y sus entradas eliminados de Firestore:", firestoreDocId);
                
                await cargarDatosGlobales(); // Recargar todos los datos
                await renderizarTablaCuadernos(); 
                if (editandoCuadernoFirestoreId === firestoreDocId) {
                    toggleFormularioCuaderno(false);
                }
            } catch (error) {
                console.error("Error eliminando cuaderno de Firestore:", error);
                alert("Error al eliminar cuaderno.");
            }
        }
    }

    // --- PLACEHOLDERS PARA FUNCIONES RESTANTES ---
    function popularSelectUsuariosOperarios(selectedUserIds = []) { /* ... (mantenida para referencia, necesita 'usuarios' poblado) ... */ }
    function popularSelectorColorCuaderno(claseColorSeleccionada = '') { /* ... (mantenida) ... */ }
    function parseTareasDefinicion(textoTareas) { /* ... (mantenida) ... */ }
    function renderizarDashboardOperario() { if(operarioCuadernosContainer) operarioCuadernosContainer.innerHTML = '<p>Funcionalidad de Operario en desarrollo con Firebase.</p>';}
    async function mostrarDetalleCuadernoOperario(cuadernoFirestoreId, cuadernoNombre, vistaDeRetorno) { alert(`Mostrar Detalles para ${cuadernoNombre} con Firebase: Pendiente.`); if (vistaDeRetorno) mostrarVista(vistaDeRetorno);}
    function renderizarNovedadesDeCuaderno(cuadernoFirestoreId) { /* ... */ }
    function abrirFormularioNovedad(cuadernoFirestoreId, cuadernoNombre) { alert(`Abrir Form Novedad para ${cuadernoNombre} con Firebase: Pendiente.`);}
    function cerrarFormularioNovedad() { if (formNovedadModal) formNovedadModal.style.display = 'none'; }
    async function handleGuardarNovedad(event) { event.preventDefault(); alert("Guardar Novedad con Firebase: Pendiente."); }
    function renderizarSupervisorGestionNovedadesView() { if(supervisorGestionCuadernosContainer) supervisorGestionCuadernosContainer.innerHTML = '<p>Gestión Supervisor en desarrollo con Firebase.</p>';}
    async function renderizarDashboardSupervisor() { if(supervisorGridNovedadesBody) supervisorGridNovedadesBody.innerHTML = '<tr><td colspan="5">Tablero Supervisor con Firebase: Pendiente.</td></tr>';}
    async function mostrarDetallesNovedadesParaSupervisor(cuadernoFirestoreId, cuadernoNombre, fecha, tipoCuaderno) { alert(`Mostrar Detalles Supervisor para ${cuadernoNombre} con Firebase: Pendiente.`);}
    function renderizarFormularioChecklist(cuaderno) { if(listaTareasChecklist) listaTareasChecklist.innerHTML = '<p>Formulario Checklist con Firebase: Pendiente.</p>';}
    async function handleGuardarChecklist(event) { event.preventDefault(); alert("Guardar Checklist con Firebase: Pendiente.");}
    function renderizarHistorialChecklists(cuadernoFirestoreId) { if(historialChecklistsCuaderno) historialChecklistsCuaderno.innerHTML = '<p>Historial Checklist con Firebase: Pendiente.</p>';}
    function simularEnvioEmail(entrada, tipoEntrada = 'novedad') { /* ... (mantenida, pero dependerá de 'cuadernos' cargado) ... */ }
    

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
            if (emailConfigNovedadesDiv && emailConfigNovedadesDiv.id === 'emailConfigNovedades') { 
                 emailConfigNovedadesDiv.classList.add('hidden-view');
            }
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

    // Listeners para modales y otras funcionalidades se mantendrán o adaptarán
    if (closeFormNovedadModalBtnNovedad) closeFormNovedadModalBtnNovedad.addEventListener('click', cerrarFormularioNovedad);
    if (cancelNovedadBtn) cancelNovedadBtn.addEventListener('click', cerrarFormularioNovedad);
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
    
    // La llamada a mostrarVista(VISTAS.LOGIN) se maneja por onAuthStateChanged.
});
