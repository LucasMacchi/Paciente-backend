import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { Pacient } from 'src/dtos';

@Controller('pacient')
export class PacientController {
  constructor(private readonly pacientService: PacientService) {
    this.pacientService = pacientService
  }

  //Returns all pacients
  @Get('/all')
  getAllPacients() {
    return this.pacientService.getAll()
  }
  //Returns pacients with specific DNI
  @Get('/:dni')
  getPacient(@Param() dni: number) {

  }
  //Creates a pacients
  @Post('/create')
  createPacient(@Body() pacient: Pacient) {

  }
  //Deletes a pacient using dni
  @Delete('delete/:dni')
  deletePacient(@Param() dni: number) {

  }
  //Edits an existing pacient using dni
  @Patch('/edit/:dni')
  editPacient(@Param() dni: number){

  }

}
