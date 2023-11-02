import Swal from 'sweetalert2';
//import { nectTick } from '@vue/runtime-core';
import axios from axios

export function showalerta(titulo, icono, foco){
    if(foco !== ''){
       document.getElementById(foco).focus();
    }
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary',popup:'animated zoonIn'},
        buttonsStyling:false

    });
}

export function confirmation(urlSlash,id,titulo,msg){
    var url = urlSlash+id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton: 'btn btn-danger'},
    });
    swalWithBootstrapButton.fire({
        title:titulo,
        text:msg,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-check"></i> si, eliminar'
    }).then((res)=>{
        if(res.isConfirmed){
            solicitud('DELETE',{id:id},url,'Eliminado con exito');
        }else{
            mostrarAlerta('operacion cancelada','info');
        }
        
    });

    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary',popup:'animated zoonIn'},
        buttonsStyling:false

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
//jjjjjj