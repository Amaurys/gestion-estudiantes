export class Estudiante {
    idEstudiante: number;
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: Date;
    idCurso: number;
    direccion: string;
  
    constructor(
      idEstudiante: number,
      nombre: string,
      apellido: string,
      edad: number,
      fechaNacimiento: Date,
      idCurso: number,
      direccion: string
    ) {
      this.idEstudiante = idEstudiante;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.fechaNacimiento = fechaNacimiento;
      this.idCurso = idCurso;
      this.direccion = direccion;
    }
  }  