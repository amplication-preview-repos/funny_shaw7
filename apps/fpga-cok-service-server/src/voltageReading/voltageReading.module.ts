import { Module } from "@nestjs/common";
import { VoltageReadingModuleBase } from "./base/voltageReading.module.base";
import { VoltageReadingService } from "./voltageReading.service";
import { VoltageReadingController } from "./voltageReading.controller";
import { VoltageReadingResolver } from "./voltageReading.resolver";

@Module({
  imports: [VoltageReadingModuleBase],
  controllers: [VoltageReadingController],
  providers: [VoltageReadingService, VoltageReadingResolver],
  exports: [VoltageReadingService],
})
export class VoltageReadingModule {}
