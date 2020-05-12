class Persona{
    constructor(nombres, apellidos){
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
    metodo1(){
        return this.nombres;
    };
    impresion(){
        document.write("Nombres: "+this.nombres)
    };
};

function mostrar(){
    var name = new Persona(document.getElementById("nombres").value,
    document.getElementById("apellidos").value);

    name.metodo1();
    name.impresion();
}