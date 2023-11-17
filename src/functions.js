
import Swal from "sweetalert2";
import { nextTick } from '@vue/runtime-core';
import {useAuthStore } from '@/stores/auth'

export function showalerta(msj, icono, focus){
    if(focus !== '' && focus !== 'undefined'){
       nextTick( () => focus.value.focus());
    }
    
    Swal.fire({
        title:msj,
        icon:icono,
        buttonsStyling:true
        // customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
    });
}

export function confirmation(name, url, redirect){
    const alert = Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'¿Estas seguro que quieres eliminar a '+name+' de tus contactos?',
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
        }).then((res)=>{
            if(res.isConfirmed){
                sendRequest('DELETE',{},url,redirect);
            }else{
                showalerta('operacion cancelada','info', '');
            }
        
        });
}

// export function solicitud(method,params,url,msg){
//     axios({method:method,url:url,data:params}).them(function(res){
//          const estado = res.status;
//          if(estado == 200){
//             showalerta(msg,'success');
//             window.setTimeout(function(){
//                 window.location.href='/'

//             },100);
//          }else{
//             showalerta('no se pudo recuperar la respuesta','error');
//          }
//     }).catch(function(error){
//         showalerta('servidor no disponible', 'error');
//     });
// }

export async function sendRequest(method,params,url,redirect=''){
    const authStore = useAuthStore();
    axios.defaults.headers.common['Authorization'] = 'Bearer '+authStore.authToken;
    let res;
    await axios({ method:method, url:url, data:params }).then(
        response => {
            res = response.data.status,
            showalerta(response.data.message, 'success', ''),
            setTimeout(
                () => (redirect !== '') ? window.location.href = redirect:''
                ,2000)
        }).catch((errors) => {
            console.log(errors.response.data);

        })
    return res;
}