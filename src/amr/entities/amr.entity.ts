import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AmrChargeHistory } from '../../amr-charge-history/entities/amr-charge-history.entity';
import { TimeTable } from '../../time-table/entities/time-table.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Amr {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'amr-001',
    description: 'amr 이름',
  })
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  name: string;

  @ApiProperty({
    example: false,
    description: '충전중 여부',
  })
  @Column({ nullable: false })
  charging: boolean;

  @ApiProperty({
    example: 1,
    description: '공정 코드',
  })
  @Column({ nullable: false })
  prcsCD: number;

  @ApiProperty({
    example: false,
    description: 'ACS 모드 (Auto = 0, Manual = 1)',
  })
  @Column({ nullable: false })
  ACSMode: boolean;

  @ApiProperty({
    example: 2,
    description: '로봇모드 (Manual = 0, semiAuto = 1, auto = 2)',
  })
  @Column({ nullable: false })
  mode: number;

  @ApiProperty({
    example: 0,
    description: '마지막에러의 에러레벨 (info=0, warning=1, critical=2)',
  })
  @Column({ nullable: false })
  errorLevel: number;

  @ApiProperty({
    example: 'Error found',
    description: '마지막에러의 에러코드',
  })
  @Column({ nullable: false })
  errorCode: string;

  @ApiProperty({
    example: new Date(),
    description: '미션시작시간',
  })
  @Column({ nullable: false })
  startTime: Date;

  @ApiProperty({
    example: new Date(),
    description: '미션종료시간',
  })
  @Column({ nullable: false })
  endTime: Date;

  @ApiProperty({
    example: 10,
    description: '누적이동거리(m)',
  })
  @Column({ nullable: false })
  travelDist: number;

  @ApiProperty({
    example: new Date(),
    description: '누적운행시간(M)',
  })
  @Column({ nullable: false })
  oprTime: Date;

  @ApiProperty({
    example: new Date(),
    description: '누적정지시간(M)',
  })
  @Column({ nullable: false })
  stopTime: Date;

  @ApiProperty({
    example: 90,
    description: '충전시작 배터리량',
  })
  @Column({ nullable: false })
  startBatteryLevel: number;

  @ApiProperty({
    example: 90,
    description: '마지막 동기화시간',
  })
  @Column({ nullable: false })
  lastBatteryLevel: number;

  @ApiProperty({
    example: true,
    description: '시뮬레아션 모드',
  })
  @Column({ nullable: false })
  simulation: boolean;

  @ApiProperty({
    example: new Date(),
    description: '데이터 업데이트 일자',
  })
  @Column({ nullable: false })
  logDT: Date;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => AmrChargeHistory, (amrChargeHistory) => amrChargeHistory.amr)
  amrChargeHistories: AmrChargeHistory[];

  @OneToMany(() => TimeTable, (timeTable) => timeTable.amr)
  timeTables: TimeTable[];
}
