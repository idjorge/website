    /*
    1. Modificar tu arreglo de equipos actuales
    2. Multiplicación de días * los equipos eexistentes ahorita estan 56 por que es
    7*8
    3. Actualizar tus if 
    */
    
    // CONSTANTE PARA LOS EQUIPOS ACTUALES
    const EQUIPOS_ACTUALES_2 = [
        {
            id: 1,
            nombre: 'Tigritos',
            numero: 1
        },
        {
            id: 2,
            nombre: 'Ranitas',
            numero: 2
        },
        {
            id: 3,
            nombre: 'Lobitos',
            numero: 3
        },
        {
            id: 4,
            nombre: 'Pequenines',
            numero: 4
        },
        {
            id: 5,
            nombre: 'Azulitos',
            numero: 5
        },
        {
            id: 6,
            nombre: 'Perfumaditos',
            numero: 6
        },
        {
            id: 7,
            nombre: 'Botecitos',
            numero: 7
        },
        {
            id: 8,
            nombre: 'Pollitos',
            numero: 8 
        }
    ];

    /*
        56 son los por los 8 equipos que se hace la multiplicación de 7 días * los equipos existentes
    */

    // FECHA PUESTA EN INGLES POR LA LIBRERÍA   MESES/ DÍAS Y AÑO
    const FECHA_INICIAL_2 = '07/11/2021';

    // CONSTANTE PARA OBTENER DIFERENCIA DE DIAS
    const AHORA_2 = moment().locale('es');

    // CONSTANTE PARA OBTENER DIFERENCIA DE DIAS
    const PASADA_2 = moment(FECHA_INICIAL_2);

    // CONSTANTE ALMACENAR OBTENER DIFERENCIA DE DIAS (AHORA_2 MENOS FECHA PASADA_2, NOS RETORNA NUMERO DE DIAS)
    const DIFERENCIA_2 = AHORA_2.diff(PASADA_2, 'd');

    // FUNCION PARA SACAR EL NUMERO DE EQUIPO DE ACUERDO A LOS DIAS (DIFERENCIA)
    const obtenerEquipoFiltrado_2 = (diferencia_2) => {

        // CONSTANTE PARA SABER SI SE VA A REINICIAR EL CONTEO (CUANDO YA HAYAN PASADO TODOS LOS EQUIPOS)
        const DIVISION_2 = parseInt(diferencia_2 / 56);

        if (DIVISION_2 > 0) {

            // COSTANTE PARA SABER CUANTOS DIAS SE VAN A SUMAR A LA FECHA INICIAL
            const MULTIPLOS_POR_LOS_SIETE_EQUIPOS_2 = 56 * DIVISION_2;

            // CONDICION PARA RETORNAR SIEMPRE EL EQUIPO 7 CUANDO HAYAN PASADO TODOS LOS EQUIPOS Y SEA EL ULTIMO DOMINGO
            if (diferencia_2 % 56 === 0) {
                return 7;
            }

            // FECHA PUESTA EN INGLES POR LA LIBRERÍA
            const FECHA_REINICIADA_2 = moment(FECHA_INICIAL_2).add(MULTIPLOS_POR_LOS_SIETE_EQUIPOS_2, 'd').format('MM/DD/YYYY');

            // CONSTANTE PARA OBTENER DIFERENCIA_2 DE DIAS
            const AHORA_2 = moment().locale('es');

            // CONSTANTE PARA OBTENER DIFERENCIA_2 DE DIAS
            const PASADA_2 = moment(FECHA_REINICIADA_2);

            // CONSTANTE ALMACENAR OBTENER DIFERENCIA_2 DE DIAS (AHORA_2 MENOS FECHA PASADA_2, NOS RETORNA NUMERO DE DIAS)
            const DIFERENCIA_2 = AHORA_2.diff(PASADA_2, 'd');

            // SE RETOMA LA MISMA DIFERENCIA_2 DE DIAS CON LA FECHA REINICIADA
            diferencia_2 = DIFERENCIA_2;
        }

        // SECCION PARA RETORNAR EL NUMERO DE EQUIPO DE ACUERDO A LOS DIAS PASADOS DE LA FECHA INICIAL O LA REINICIADA

        //direncia >= los días de la semana  && diferencia <= los días aseo que son 7 días y retornar
        if (diferencia_2 >= 1 && diferencia_2 <= 7) { return 1; }
        if (diferencia_2 >= 8 && diferencia_2 <= 14) { return 2; }
        if (diferencia_2 >= 15 && diferencia_2 <= 21) { return 3; }
        if (diferencia_2 >= 22 && diferencia_2 <= 28) { return 4; }
        if (diferencia_2 >= 29 && diferencia_2 <= 35) { return 5; }
        if (diferencia_2 >= 36 && diferencia_2 <= 42) { return 6; }
        if (diferencia_2 >= 43 && diferencia_2 <= 49) { return 7; }
        if (diferencia_2 >= 51 && diferencia_2 <= 57) { return 8; }  
    };

    // Function onClick button review
    const hospitalidad = () => {

        console.log('boton 2');
        // CONSTANTE PARA SABER QUE NUMERO DE EQUIPO SE BUSCARA
        const DIFERENCIA_OBTENIDA_2 = obtenerEquipoFiltrado_2(DIFERENCIA_2);

        // CONSTANTE PARA ALMACENAR AL EQUIPO ENCONTRADO DE ACUERDO AL NUMERO
        const EQUIPO_FILTRADO_2 = EQUIPOS_ACTUALES_2.find(e => e.numero === DIFERENCIA_OBTENIDA_2);

        Swal.fire({
            title: 'Esta semana le corresponde la hospitalidad al:',
            // text:
            html: `GRUPO  #${EQUIPO_FILTRADO_2.numero}`,
            //icon: 'info',
            // confirmButtonText:
            footer: 'El privilegio es para el dia Sabado',
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
            confirmButtonColor: '#00AAE4',
            // confirmButtonAriaLabel:
        
            // showCancelButton:
            // cancelButtonText:
            // cancelButtonColor:
            // cancelButtonAriaLabel:
            
            // buttonsStyling:
            // showCloseButton:
            // closeButtonAriaLabel:
        
        
            imageUrl: 'media/hospitality.png',
            imageWidth: '250px',
            // imageHeight:
            imageAlt: 'hospitalidad',
        
            customClass:{
            // 	container:
            // 	popup:
            // 	header:
            title: 'title-class',
            // 	closeButton:
            htmlContainer: 'group-class',
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
