import { PickType } from '@nestjs/swagger';
import { TimeTable } from '../entities/time-table.entity';

export class CreateTimeTableDto extends PickType(TimeTable, [
  'data',
  'Uld',
  'Amr',
  'Awb',
]) {}
