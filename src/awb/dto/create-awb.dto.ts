import { ApiProperty, PickType } from '@nestjs/swagger';
import { Awb } from '../entities/awb.entity';
import { Scc } from '../../scc/entities/scc.entity';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Column } from 'typeorm';

export class CreateAwbDto extends PickType(Awb, [
  'name',
  'prefab',
  'waterVolume',
  'squareVolume',
  'width',
  'length',
  'depth',
  'weight',
  'isStructure',
  'barcode',
  'destination',
  'source',
  'breakDown',
  'piece',
  'state',
  'parent',
  'modelPath',
  'simulation',
  'dataCapacity',
  'flight',
  'from',
  'airportArrival',
  'path',
  'spawnRatio',
  'description',
  'rmComment',
  'localTime',
  'localInTerminal',
]) {
  @ApiProperty({
    example:
      '[{"code": "Scc-001",\n' +
      '"name": "드라이아이스",\n' +
      '"score": "1",\n' +
      '"description": "",\n' +
      '"path": ""},\n' +
      '{"code": "Scc-002",\n' +
      '"name": "위험물질",\n' +
      '"score": "2",\n' +
      '"description": "",\n' +
      '"path": ""}]',
    description: 'SCCFK',
  })
  scc: Partial<Scc>[];

  /*
  aircraft 요소
   */
  @ApiProperty({
    example: 'test',
    description: '항공기 이름',
  })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: new Date().toISOString(),
    description: '고유코드',
  })
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    example: '{ "test": "test" }',
    description: '항공기 정보',
  })
  info: unknown;

  // 피드백 반영 후 새로생긴 칼럼
  @ApiProperty({
    example: true,
    description: '허용가능',
  })
  allow: boolean;

  @ApiProperty({
    example: true,
    description: '허용가능 드라이아이스',
  })
  allowDryIce: boolean;

  /*
  aircraftSchedule 요소
   */
  @ApiProperty({
    example: 'GEN',
    description: '현지출발시간',
  })
  @IsString()
  @MaxLength(5)
  source: string;

  // 피드백 반영 후 새로생긴 칼럼
  @ApiProperty({
    example: '2023-07-10:15:00:00',
    description: '현지출발시간',
  })
  localDepartureTime: string;

  @ApiProperty({
    example: '2023-07-14:15:00:00',
    description: '한국도착시간',
  })
  koreaArrivalTime: string;

  @ApiProperty({
    example: '2023-07-14:13:00:00',
    description: '작업시작시간',
  })
  workStartTime: string;

  @ApiProperty({
    example: '2023-07-15:13:00:00',
    description: '작업완료목표시간',
  })
  workCompleteTargetTime: string;

  @ApiProperty({
    example: '2023-07-15:13:00:00',
    description: '한국출항시간',
  })
  koreaDepartureTime: string;

  @ApiProperty({
    example: '2023-07-15:13:00:00',
    description: '현지도착시간',
  })
  localArrivalTime: string;

  @ApiProperty({
    example: ['GEN', 'TEL', 'QRL'],
    description: '경유지',
  })
  waypoint: string[];

  @ApiProperty({
    example: 'test',
    description: '도착지',
  })
  destination: string;

  @ApiProperty({
    example: 'test1',
    description: '출발지',
  })
  departure: string;
}
