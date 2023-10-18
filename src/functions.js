import Swal from 'sweetalert2';
import { nectTick } from '@vue/runtime-core';

export function show alerta (msj, icon, focus) {
    if(focus !== ''){
        nextTick( () => focus.value.focus());
    }
    Swal.fire({
        title:msj,icon:icon,buttonsStyling:true
    });
}

export function confirmation(name,url,redirection){
    const alert = Swal.mixin({buttonsStyling:true});
    alert.fire({
        title: '¿Estas seguro que quieres eliminar ' + name + ' ?',
        icon: 'question', showCancelButton:true,
        confirmButtonText: '<i class="fa-solid fa-check"></i> Continuar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'
    }).then( (result) =>{
        if(result.isConfirmed){

        }
    });
}

export async function sendRequest(method, params, url, redirect=''){
    
}