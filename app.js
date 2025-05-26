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
    const cuadernoIdToEditInput = document.getElementById('cuadernoIdToEdit'); // Firestore document ID
    const cuadernoIdManualInput = document.getElementById('cuadernoId'); // El ID legible/manual
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
    const closeFormNovedadModalBtnNovedad = document.getElementById('closeFormNovedadModal'); // Renombrado para evitar conflicto
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
    let cuadernos = []; // Se cargará desde Firestore
    let novedades = []; // Se cargará desde Firestore
    let checklistEntradas = []; // Se cargará desde Firestore
    let editandoUsuarioId = null; 
    let editandoCuadernoFirestoreId = null; // ID del documento de Firestore para el cuaderno en edición
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
            const cuadernosSnapshot = await db.collection(COLECCION_CUADERNOS).get();
            cuadernos = cuadernosSnapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));
            
            if (cuadernosSnapshot.empty) {
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
                const snapshot = await db.collection(COLECCION_CUADERNOS).get();
                cuadernos = snapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));
            }

            const novedadesSnapshot = await db.collection(COLECCION_NOVEDADES).orderBy("fecha", "desc").orderBy("hora", "desc").get();
            novedades = novedadesSnapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));

            const checklistsSnapshot = await db.collection(COLECCION_CHECKLISTS).orderBy("fecha", "desc").orderBy("hora", "desc").get();
            checklistEntradas = checklistsSnapshot.docs.map(doc => ({ firestoreDocId: doc.id, ...doc.data() }));
            
            console.log("Datos globales cargados desde Firestore:", { cuadernos, novedades, checklistEntradas });

        } catch (error) {
            console.error("Error cargando datos globales desde Firestore: ", error);
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
        
        try {
            console.log(`Intentando iniciar sesión con email: ${emailInput}`);
            await auth.signInWithEmailAndPassword(emailInput, passwordInput);
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
            const querySnapshot = await db.collection(COLECCION_USUARIOS).get();
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
                    alert("Información del usuario actualizada. Para cambiar la contraseña de un usuario existente, por favor use la consola de Firebase Authentication.");
                }
            } else {
                if (!password) {
                     usuarioFormError.textContent = 'La contraseña es obligatoria para nuevos usuarios.';
                     return;
                }
                
                // No es necesario verificar si el email ya existe en Firestore aquí,
                // createUserWithEmailAndPassword lo hará en Firebase Auth.

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
        // Evitar eliminar al admin "semilla" si es el único admin
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
    // Las funciones de cuadernos, novedades, checklist, etc., se migrarán en el siguiente paso.
    // Por ahora, se dejan las funciones placeholder para que la estructura no se rompa.
    
    function popularSelectUsuariosOperarios(selectedUserIds = []) {
        if (!cuadernoUsuariosAsignadosContainer) return;
        cuadernoUsuariosAsignadosContainer.innerHTML = ''; 
        const operarios = usuarios.filter(u => u.rol === 'operario');

        if (operarios.length === 0) {
            cuadernoUsuariosAsignadosContainer.innerHTML = '<p class="text-sm text-slate-500">No hay usuarios operarios para asignar.</p>';
            return;
        }

        operarios.forEach(op => {
            const checkboxId = `user-assign-${op.uid}`;
            const label = document.createElement('label');
            label.htmlFor = checkboxId;
            label.className = 'flex items-center space-x-2 p-1 hover:bg-slate-100 rounded cursor-pointer';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = checkboxId;
            checkbox.value = op.uid;
            checkbox.className = 'form-checkbox h-4 w-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500';
            if (selectedUserIds.includes(op.uid)) {
                checkbox.checked = true;
            }
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(`${op.nombreCompleto} (${op.email})`));
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

    async function toggleFormularioCuaderno(mostrar = true, firestoreDocId = null) { 
        if (mostrar) {
            editandoCuadernoFirestoreId = firestoreDocId; 
            let cuadernoParaEditar = null;
            if (firestoreDocId) {
                try {
                    const docSnap = await db.collection(COLECCION_CUADERNOS).doc(firestoreDocId).get();
                    if (docSnap.exists) {
                        cuadernoParaEditar = { firestoreDocId: docSnap.id, ...docSnap.data()};
                    } else {
                        console.error("Cuaderno para editar no encontrado en Firestore:", firestoreDocId);
                    }
                } catch(e){ console.error("Error obteniendo cuaderno para editar:", e); }
            }

            formCuadernoTitle.textContent = cuadernoParaEditar ? 'Editar Cuaderno' : 'Agregar Nuevo Cuaderno';
            
            cuadernoIdManualInput.value = cuadernoParaEditar ? cuadernoParaEditar.id : ''; 
            cuadernoIdManualInput.readOnly = !!cuadernoParaEditar; 
            
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

            if (usuarios.length === 0) { 
                const usuariosSnapshot = await db.collection(COLECCION_USUARIOS).get();
                usuarios = usuariosSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }));
            }
            popularSelectUsuariosOperarios(cuadernoParaEditar ? (cuadernoParaEditar.usuariosAsignados || []) : []);


            cuadernoIdToEditInput.value = editandoCuadernoFirestoreId || ''; 
            formNuevoCuadernoContainer.classList.remove('hidden-view');
            cuadernoFormError.textContent = '';
        } else {
            formNuevoCuadernoContainer.classList.add('hidden-view');
            formCuaderno.reset();
            editandoCuadernoFirestoreId = null;
            cuadernoIdManualInput.readOnly = false;
            if (cuadernoUsuariosAsignadosContainer) cuadernoUsuariosAsignadosContainer.innerHTML = '';
            if (cuadernoTareasChecklistContainer) cuadernoTareasChecklistContainer.classList.add('hidden-view');
            if (emailConfigUnificadoDiv) emailConfigUnificadoDiv.classList.remove('hidden-view'); 
            if (emailConfigNovedadesDiv && emailConfigNovedadesDiv.id === 'emailConfigNovedades') {
                emailConfigNovedadesDiv.classList.add('hidden-view');
            }
        }
    }
    
    // --- PLACEHOLDERS (SE MIGRARÁN LUEGO) ---
    function renderizarTablaCuadernos() { if(tablaCuadernosBody) tablaCuadernosBody.innerHTML = '<tr><td colspan="6">Funcionalidad de Cuadernos en desarrollo con Firebase.</td></tr>';}
    async function handleGuardarCuaderno(event) { event.preventDefault(); alert("Guardar Cuaderno con Firebase: Pendiente de implementación completa."); }
    async function handleEditarCuadernoClick(firestoreDocId) { await toggleFormularioCuaderno(true, firestoreDocId); }
    async function handleEliminarCuadernoClick(firestoreDocId) { alert("Eliminar Cuaderno con Firebase: Pendiente de implementación completa.");}
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
    function simularEnvioEmail(entrada, tipoEntrada = 'novedad') {
        const cuaderno = cuadernos.find(c => c.firestoreId === entrada.cuadernoId || c.id === entrada.cuadernoId); 
        if (!cuaderno) {
            console.error("Simular Email: Cuaderno no encontrado para la entrada:", entrada);
             if (emailSimulacionModal) {
                emailSimDestinatarios.textContent = "Error";
                emailSimAsunto.textContent = "Error: Cuaderno no encontrado";
                emailSimCuerpo.textContent = `No se pudo encontrar el cuaderno con ID: ${entrada.cuadernoId}`;
                emailSimulacionModal.style.display = 'flex';
            }
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
            if (emailSimulacionModal && emailSimDestinatarios && emailSimAsunto && emailSimCuerpo) { 
                emailSimDestinatarios.textContent = "No configurados";
                emailSimAsunto.textContent = `[SIN ENVÍO] ${tipoEntrada === 'checklist' ? 'Checklist Completado' : 'Novedad'} - ${cuaderno.nombre}`;
                emailSimCuerpo.textContent = `La entrada fue guardada pero no hay destinatarios de email configurados para la calificación "${entrada.calificacion}".`;
                emailSimulacionModal.style.display = 'flex';
            }
            return;
        }

        const asunto = `${tipoEntrada === 'checklist' ? 'Checklist Completado' : 'Novedad'} Cuaderno: ${cuaderno.nombre}, Fecha: ${entrada.fecha}, Turno: ${entrada.turno}`; 
        let cuerpo = `CUADERNO: ${cuaderno.nombre}\n`;
        cuerpo += `FECHA: ${entrada.fecha}\n`;
        cuerpo += `TURNO: ${entrada.turno}\n`;
        cuerpo += `HORA: ${entrada.hora}\n`;
        cuerpo += `USUARIO: ${entrada.nombreUsuario}\n`;
        cuerpo += `CALIFICACIÓN: ${entrada.calificacion}\n`;
        cuerpo += `------------------------------------\n`;

        if (tipoEntrada === 'novedad') {
            cuerpo += `NOVEDAD:\n${entrada.texto}`;
        } else if (tipoEntrada === 'checklist') {
            cuerpo += `TAREAS DEL CHECKLIST (Solo Pendientes o En Proceso):\n\n`;
            
            const tareasAgrupadasEmail = (entrada.tareas || []).reduce((acc, tarea) => {
                if (tarea.estado === 'Pendiente' || tarea.estado === 'En Proceso') { 
                    const familia = tarea.familiaNombre || "Tareas Generales";
                    if (!acc[familia]) {
                        acc[familia] = [];
                    }
                    acc[familia].push(tarea);
                }
                return acc;
            }, {});

            let hayTareasParaReportar = false;
            for (const nombreFamilia in tareasAgrupadasEmail) {
                if (tareasAgrupadasEmail[nombreFamilia].length > 0) {
                    hayTareasParaReportar = true;
                    cuerpo += `FAMILIA: ${nombreFamilia}\n`;
                    const anchoTarea = 40; 
                    const anchoEstado = 15;
                    
                    tareasAgrupadasEmail[nombreFamilia].forEach(t => {
                        let linea = `- ${t.texto.padEnd(anchoTarea).substring(0, anchoTarea)} `;
                        linea += `${t.estado.padEnd(anchoEstado).substring(0, anchoEstado)} `;
                        if (t.observacionTarea) {
                            linea += `(${t.observacionTarea})`;
                        }
                        cuerpo += `${linea.trim()}\n`;
                    });
                    cuerpo += "\n"; 
                }
            }
             if (!hayTareasParaReportar && entrada.calificacion === CALIFICACIONES_UNIFICADAS.CON_TAREAS_PENDIENTES) {
                cuerpo += "(No se listaron tareas específicas como Pendientes o En Proceso, pero la calificación general indica pendientes)\n";
            } else if (!hayTareasParaReportar && entrada.calificacion === CALIFICACIONES_UNIFICADAS.TODO_REALIZADO) {
                cuerpo += "(Todas las tareas fueron realizadas o no corresponden)\n";
            }


            if (entrada.observaciones) { 
                cuerpo += `\nOBSERVACIONES GENERALES:\n${entrada.observaciones}\n`;
            }
        }

        if (emailSimulacionModal && emailSimDestinatarios && emailSimAsunto && emailSimCuerpo) {
            emailSimDestinatarios.textContent = destinatarios;
            emailSimAsunto.textContent = asunto;
            emailSimCuerpo.textContent = cuerpo.trim();
            emailSimulacionModal.style.display = 'flex';
        } 
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

    // La inicialización de datos y la primera llamada a mostrarVista
    // ahora son manejadas por onAuthStateChanged.
});