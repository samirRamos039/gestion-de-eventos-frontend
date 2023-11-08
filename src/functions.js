
import Swal from 'sweetalert2';
import { nextTick } from '@vue/runtime-core';
import axios from 'axios'

export function showalerta(msj, icono, foco= ''){
    if(foco !== ''){
       //nextTick(()=>focus.value.focus)
        document.getElementById(foco).focus();
    }
    
    Swal.fire({
        title:msj,
        icon:icono,
        //customClass:{confirmButton:'btn btn-primary'}
        buttonsStyling:false,

    });
}

export function confirmation(name,url,redirecturl){
    
    const alert = Swal.mixin({
        buttonsStyling:true
    });
    alert.fire({
        title:'ESTAS SEGURO ELIMINAR '+name+'?',
        text:msg,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-check"></i> cancelar'
    }).then((res)=>{
        if(res.isConfirmed){
            solicitud('DELETE',{id:id},url,'Eliminado con exito');
        }else{
            mostrarAlerta('operacion cancelada','info');
        }
        
    });

    
}

export function solicitud(method,params,url,msg){
    axios({method:method,url:url,data:params}).them(function(res){
         const estado = res.status;
         if(estado == 200){
            showalerta(msg,'success');
            window.setTimeout(function(){
                window.location.href='/'

            },1000);
         }else{
            showalerta('no se pudo recuperar la respuesta','error');
         }
    }).catch(function(error){
        showalerta('servidor no disponible', 'error');
    });
}

export async function sendRequest(method,params,url,redirecturl=''){
    
}