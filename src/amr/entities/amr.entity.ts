import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AmrChargeHistory } from '../../amr-charge-history/entities/amr-charge-history.entity';
import { AmrData } from '../../amr-data/entities/amr-data.entity';
import { StackerData } from '../../stacker-data/entities/stacker-data.entity';

@Entity()
export class Amr {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ nullable: false })
  charging: boolean;

  @Column({ nullable: false })
  prcsCD: number;

  @Column({ nullable: false })
  ACSMode: boolean;

  @Column({ nullable: false })
  mode: number;

  @Column({ nullable: false })
  errorLevel: number;

  @Column({ nullable: false })
  errorCode: string;

  @Column({ nullable: false })
  startTime: Date;

  @Column({ nullable: false })
  endTime: Date;

  @Column({ nullable: false })
  travelDist: number;

  @Column({ nullable: false })
  oprTime: Date;

  @Column({ nullable: false })
  stopTime: Date;

  @Column({ nullable: false })
  startBatteryLevel: number;

  @Column({ nullable: false })
  lastBatteryLevel: number;

  @Column({ nullable: false })
  simulation: boolean;

  @Column({ nullable: false })
  logDT: Date;

  @Column({ nullable: false })
  createdAt: Date;
  @Column({ nullable: false })
  updatedAt: Date;
  @Column({ nullable: false })
  deletedAt: Date | null;

  @OneToMany(() => AmrChargeHistory, (amrChargeHistory) => amrChargeHistory.amr)
  amrChargeHistories: AmrChargeHistory[];

  @OneToMany(() => AmrData, (amrData) => amrData.amr)
  amrDatas: AmrData[];

  @OneToMany(() => StackerData, (stackerData) => stackerData.amr)
  stackerDatas: StackerData[];
}
