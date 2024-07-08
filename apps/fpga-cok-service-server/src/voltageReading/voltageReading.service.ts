import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoltageReadingServiceBase } from "./base/voltageReading.service.base";

@Injectable()
export class VoltageReadingService extends VoltageReadingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
