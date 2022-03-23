import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  private fakeUsers = [
    { email: 'react@gmail.io' },
    { email: 'vue@gmail.io' },
    { email: 'angular@gmail.io' },
  ];

  async create(createPaymentDto: CreatePaymentDto) {
    const { email } = createPaymentDto;
    const user = this.fakeUsers.find((user) => user.email === email);

    if (user) {
      return { status: 'success' };
    }

    throw new BadRequestException();
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
