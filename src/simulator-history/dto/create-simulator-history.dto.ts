import { PickType } from '@nestjs/swagger';
import { SimulatorHistory } from '../entities/simulator-history.entity';

export class CreateSimulatorHistoryDto extends PickType(SimulatorHistory, [
  'x',
  'y',
  'z',
  'SimulatorResult',
  'Uld',
  'Awb',
]) {}
