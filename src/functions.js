
import Swal from 'sweetalert2';
import { nextTick } from '@vue/runtime-core';
import axios from 'axios'

export function showalerta(msj, icono, focus){
    if(focus !== ""){
       nextTick(()=>focus.value.focus)

    }
    
    Swal.fire({
        title:msj,
        icon:icono,

        buttonsStyling:true,

    });
}

export function confirmation(name,url,redirecturl){
    
    const alert = Swal.mixin({
        buttonsStyling:true
    });
    alert.fire({
        title:'ESTAS SEGURO '+name+'?',
        text:msg,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-check"></i> cancel'
    }).then((res)=>{
        if(res.isConfirmed){
            solicitud('DELETE',{id:id},url,'Eliminado con exito');
        }else{
            mostrarAlerta('operacion cancelada','info');
        }
        
    });

    
}

export function solicitud(method, params, url,msg){
    axios({method:metodo,url:url,data:parametros}).them(function(res){
         const estado = res.status
         if(estado == 200){
            mostrarAlerta(meg,'success');
            window.setTimeout(function(){
                window.location.href='/'

            },1000);
         }else{
            mostrarAlerta('wrong','error')
         }
    }).catch(function(error){
        mostrarAlerta('error', 'error')
    });
}

export async function sendReques(method,params,url,redirecturl=''){

}