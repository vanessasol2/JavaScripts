const repodroctorMusica ={

    estado: "apagado",

    play : function(cancion){ //no trabajar el this con funcion flecha
        
        if(this.estado==="apagado"){
            console.log(`Comenzando reproduciendo Cancion... ${cancion}`) //metodo: funcion a un obejcto
            //cambiar estado
            this.estado= "play"
        }else{
            console.log(`Cancion en ejecucion...Stop para apagar`)
        }
        
    },
    stop : function(){
        if(this.estado==="apagado"){
            console.log(`*****Termiando Reproducion...`)
        }else{
            console.log(`---------Apagando Reproductor`)
            this.estado ="apagado"
        }
        
    },
    //getter
    getEstado : function(){
        this.estado
    },
    setEstado: function(){
        this.estado = estado
    }
}

repodroctorMusica.play("Love the sun");

repodroctorMusica.stop();

repodroctorMusica.stop();


