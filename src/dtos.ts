import { IsNotEmpty, IsString, IsNumber, IsPositive, isString } from "class-validator";

export class Pacient {
    @IsString()
    @IsNotEmpty()
    nombre: string
    @IsString()
    @IsNotEmpty()
    apellido: string
    @IsNumber()
    @IsNotEmpty()
    dni: number
    @IsString()
    @IsNotEmpty()
    localidad: string
    @IsString()
    @IsNotEmpty()
    nacimiento: string
    @IsString()
    @IsNotEmpty()
    alergias: string

}