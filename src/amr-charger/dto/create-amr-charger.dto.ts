import { PickType } from '@nestjs/swagger';
import { AmrCharger } from '../entities/amr-charger.entity';

export class CreateAmrChargerDto extends PickType(AmrCharger, [
  'name',
  'working',
  'x',
  'y',
  'z',
]) {}
