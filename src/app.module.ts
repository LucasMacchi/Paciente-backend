import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientModule } from './pacient/pacient.module';

@Module({
  imports: [PacientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
