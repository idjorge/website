    /*
    1. Modificar tu arreglo de equipos actuales
    2. Multiplicación de días * los equipos eexistentes ahorita estan 56 por que es
    7*8
    3. Actualizar tus if 
    */
    
    // CONSTANTE PARA LOS EQUIPOS ACTUALES
    const EQUIPOS_ACTUALES = [
        {
            id: 1,
            nombre: 'GRUPO 1',
            numero: 1
        },
        {
            id: 2,
            nombre: 'GRUPO 2',
            numero: 2
        },
        {
            id: 3,
            nombre: 'GRUPO 3',
            numero: 3
        },
        {
            id: 4,
            nombre: 'GRUPO 4',
            numero: 4
        },
        {
            id: 5,
            nombre: 'GRUPO 5',
            numero: 5
        },
        {
            id: 6,
            nombre: 'GRUPO 6',
            numero: 6
        },
        {
            id: 7,
            nombre: 'GRUPO 7',
            numero: 7
        },
        {
            id: 8,
            nombre: 'GRUPO 8',
            numero: 8 
        }
    ];

    /*
        56 son los por los 8 equipos que se hace la multiplicación de 7 días * los equipos existentes
    */

    // FECHA PUESTA EN INGLES POR LA LIBRERÍA
    const FECHA_INICIAL = '07/18/2021';

    // CONSTANTE PARA OBTENER DIFERENCIA DE DIAS
    const AHORA = moment().locale('es');

    // CONSTANTE PARA OBTENER DIFERENCIA DE DIAS
    const PASADA = moment(FECHA_INICIAL);

    // CONSTANTE ALMACENAR OBTENER DIFERENCIA DE DIAS (AHORA MENOS FECHA PASADA, NOS RETORNA NUMERO DE DIAS)
    const DIFERENCIA = AHORA.diff(PASADA, 'd');

    // FUNCION PARA SACAR EL NUMERO DE EQUIPO DE ACUERDO A LOS DIAS (DIFERENCIA)
    const obtenerEquipoFiltrado = (diferencia) => {

        // CONSTANTE PARA SABER SI SE VA A REINICIAR EL CONTEO (CUANDO YA HAYAN PASADO TODOS LOS EQUIPOS)
        const DIVISION = parseInt(diferencia / 56);

        if (DIVISION > 0) {


            // COSTANTE PARA SABER CUANTOS DIAS SE VAN A SUMAR A LA FECHA INICIAL
            const MULTIPLOS_POR_LOS_SIETE_EQUIPOS = 56 * DIVISION;

            // CONDICION PARA RETORNAR SIEMPRE EL EQUIPO 7 CUANDO HAYAN PASADO TODOS LOS EQUIPOS Y SEA EL ULTIMO DOMINGO
            if (diferencia % 56 === 0) {
                return 7;
            }

            // FECHA PUESTA EN INGLES POR LA LIBRERÍA
            const FECHA_REINICIADA = moment(FECHA_INICIAL).add(MULTIPLOS_POR_LOS_SIETE_EQUIPOS, 'd').format('MM/DD/YYYY');

            // CONSTANTE PARA OBTENER DIFERENCIA DE DIAS
            const AHORA = moment().locale('es');

            // CONSTANTE PARA OBTENER DIFERENCIA DE DIAS
            const PASADA = moment(FECHA_REINICIADA);

            // CONSTANTE ALMACENAR OBTENER DIFERENCIA DE DIAS (AHORA MENOS FECHA PASADA, NOS RETORNA NUMERO DE DIAS)
            const DIFERENCIA = AHORA.diff(PASADA, 'd');

            // SE RETOMA LA MISMA DIFERENCIA DE DIAS CON LA FECHA REINICIADA
            diferencia = DIFERENCIA;
        }

        // SECCION PARA RETORNAR EL NUMERO DE EQUIPO DE ACUERDO A LOS DIAS PASADOS DE LA FECHA INICIAL O LA REINICIADA

        //direncia >= los días de la semana  && diferencia <= los días aseo que son 7 días y retornar
        if (diferencia >= 1 && diferencia <= 7) { return 1; }
        if (diferencia >= 8 && diferencia <= 14) { return 2; }
        if (diferencia >= 15 && diferencia <= 21) { return 3; }
        if (diferencia >= 22 && diferencia <= 28) { return 4; }
        if (diferencia >= 29 && diferencia <= 35) { return 5; }
        if (diferencia >= 36 && diferencia <= 42) { return 6; }
        if (diferencia >= 43 && diferencia <= 49) { return 7; }
        if (diferencia >= 51 && diferencia <= 57) { return 8; }  
    };
    // Function onClick button review
    const revisarClick = () => {
       
        // CONSTANTE PARA SABER QUE NUMERO DE EQUIPO SE BUSCARA
        const DIFERENCIA_OBTENIDA = obtenerEquipoFiltrado(DIFERENCIA);

        // CONSTANTE PARA ALMACENAR AL EQUIPO ENCONTRADO DE ACUERDO AL NUMERO
        const EQUIPO_FILTRADO = EQUIPOS_ACTUALES.find(e => e.numero === DIFERENCIA_OBTENIDA);

        /* swal( `GRUPO  #${EQUIPO_FILTRADO.numero}` , `Esta semana le toca el ASEO al GRUPO: #${EQUIPO_FILTRADO.numero}`, "info");*/

   

        Swal.fire({
            title: 'Esta semana le corresponde el aseo al:',
            // text:
            html: `GRUPO  #${EQUIPO_FILTRADO.numero}`,
            //icon: 'info',
            // confirmButtonText:
            footer: 'El privilegio es para los dias Jueves y Sabado',
            // width:
            // padding:
            // background:
            //grow:
            // backdrop:
            //timer: 5000,
            //timerProgressBar: true,
            // toast:
            // position:
            // allowOutsideClick:
            // allowEscapeKey:
            // allowEnterKey:
            // stopKeydownPropagation:
        
            // input:
            // inputPlaceholder:
            // inputValue:
            // inputOptions:

                // showConfirmButton:
            confirmButtonColor: '#ff9b07',
            // confirmButtonAriaLabel:
        
            // showCancelButton:
            // cancelButtonText:
            // cancelButtonColor:
            // cancelButtonAriaLabel:
            
            // buttonsStyling:
            // showCloseButton:
            // closeButtonAriaLabel:
        
        
            imageUrl: 'media/cleaning1.png',
            imageWidth: '150px',
            // imageHeight:
            imageAlt: 'cleaning',
        
            customClass:{
            // 	container:
            // 	popup:
            // 	header:
            title: 'title-class',
            // 	closeButton:
            htmlContainer: 'group-class1',
            // 	icon:
            // 	image:
            // 	content:
            // 	input:
            // 	actions:
            // 	confirmButton:
            // 	cancelButton:
            // 	footer:	
            }
        
        
        });

    };

