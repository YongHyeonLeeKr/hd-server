import { Module } from '@nestjs/common';
import { AmrService } from './amr.service';
import { AmrController } from './amr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amr } from './entities/amr.entity';
import { AmrCharger } from '../amr-charger/entities/amr-charger.entity';
import { AmrChargeHistory } from '../amr-charge-history/entities/amr-charge-history.entity';
import { MqttModule } from '../mqtt.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Amr, AmrCharger, AmrChargeHistory]),
    // mqtt 모듈설정
    MqttModule,
  ],
  controllers: [AmrController],
  providers: [AmrService],
})
export class AmrModule {}
