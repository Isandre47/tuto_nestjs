import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deposit } from './entity/deposit.entity';
import { DepositService } from './services/deposit.service';
import { DepositController } from './controllers/deposit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Deposit])],
  controllers: [DepositController],
  providers: [DepositService],
})
export class DepositModule {}
