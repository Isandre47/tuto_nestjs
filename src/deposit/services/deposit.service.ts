import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Deposit } from '../entity/deposit.entity';
import { Repository } from 'typeorm';
import { DepositDto } from '../dto/DepositDto';

@Injectable()
export class DepositService {
  constructor(@InjectRepository(Deposit) private readonly depositRepository: Repository<Deposit>) {}

  async syncDeposit(deposit: DepositDto) {
    await this.depositRepository.save({
      ...deposit,
      deposit_date: new Date().toISOString(),
    });
  }
}
