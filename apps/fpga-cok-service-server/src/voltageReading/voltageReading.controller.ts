import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoltageReadingService } from "./voltageReading.service";
import { VoltageReadingControllerBase } from "./base/voltageReading.controller.base";

@swagger.ApiTags("voltageReadings")
@common.Controller("voltageReadings")
export class VoltageReadingController extends VoltageReadingControllerBase {
  constructor(protected readonly service: VoltageReadingService) {
    super(service);
  }
}
