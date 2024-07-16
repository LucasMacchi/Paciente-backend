import { Injectable } from '@nestjs/common';
import pacientsJSON = require("../mocks/pacients.json")
import { Pacient } from 'src/dtos';
import * as dotenv from 'dotenv'
dotenv.config();

const val_mock = process.env.USE_MOCK

@Injectable()
export class PacientService {

    getAll(): Pacient[] | null {
        if(val_mock){
            const pacientes: Pacient[] = pacientsJSON.pacientes
            return pacientes
        }
        else{
            return null
        }

    }

}
