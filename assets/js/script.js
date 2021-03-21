class Multimedia{
    constructor(url){
        //se hace un clouse  guardando el valor de la url en una variable protegida
        const _url = url;
        // y se retorna en  funcion 
        this.urlss = () => _url

    }
    get url(){
        return this.urlss();
    }
    setInicio(){
    return "Este metodo es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        const _id = id;
        this.identificar = () =>_id;

    }
    //  get para proteger la funcion 
    get id(){
        return this.identificar();
    }
    playMultimedia(){
     Media(this.url, this.id)
    }
    // falta instanciar playMultimedia 
    setInicio(time = 0){
        const inicio = document.getElementById(this.id);
        if (!inicio) return;
     inicio.setAttribute("src",`${this.url}?start=${time}`)
    }
  
}

// FUNCION AUTOEJECUTABLE SE DEBE COLOCAR () AL UNICIO Y FINAL
const  Media = (() =>{
        const elementosMedios = (url,id) => {
        let ids = document.getElementById(id);
        // validacion por si id no existe o da error
        if (!ids) return;
        ids.setAttribute("src",url);
    }
    // // retornar de privda a publica 1era forma
    // const elementosMediosPublica = (url, id) => elementosMedios (url,id);
    // return elementosMediosPublica;


//   manera de retornar funcion privada en publica de forma directa 2da forma
   return (url,id) => elementosMedios(url,id);
})();


const movie = new Reproductor ("https://www.youtube.com/embed/lAxgztbYDbs","movie");
movie.playMultimedia()
// llarmar el set Inicio
movie.setInicio(5);
const serie= new Reproductor ("https://www.youtube.com/embed/UBhlqe2OTt4","serie")
serie.playMultimedia()
const music = new Reproductor ("https://www.youtube.com/embed/nCkpzqqog4k","music")
music.playMultimedia()

