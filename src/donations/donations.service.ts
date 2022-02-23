import { Injectable } from '@nestjs/common';
import { Donation, Prisma } from '@prisma/client';
import { OrderByParams } from 'src/graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  async findAll(orderBy?: OrderByParams): Promise<Donation[]> {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};

    return this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  async findOne(id: number): Promise<Donation> {
    return this.prisma.donation.findUnique({
      where: { id },
    });
  }
}
