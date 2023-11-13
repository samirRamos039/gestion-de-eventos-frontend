
import Swal from "sweetalert2";
import { nextTick } from '@vue/runtime-core';
import axios from "axios";

export function showalerta(msj, icono, foco= ''){
    if(foco !== ''){
       //nextTick(()=>focus.value.focus)
        document.getElementById(foco).focus();
    }
    
    Swal.fire({
        title:msj,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
}

export function confirmation(urlSlash,id,title,message){
    var url=urlSlash+id;
    const alert = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton:'btn btn-danger'}
    });
    alert.fire({
        title:title,
        text:message,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
        }).then((res)=>{
            if(res.isConfirmed){
                solicitud('DELETE',{id:id},url,'Eliminado con exito');
            }else{
                showalerta('operacion cancelada','info');
            }
        
        });
    Swal.fire({
        title:title,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    });
    
}

export function solicitud(method,params,url,msg){
    axios({method:method,url:url,data:params}).them(function(res){
         const estado = res.status;
         if(estado == 200){
            showalerta(msg,'success');
            window.setTimeout(function(){
                window.location.href='/'

            },100);
         }else{
            showalerta('no se pudo recuperar la respuesta','error');
         }
    }).catch(function(error){
        showalerta('servidor no disponible', 'error');
    });
}

export async function sendRequest(method,params,url,redirecturl=''){
    
}