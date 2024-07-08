import * as graphql from "@nestjs/graphql";
import { VoltageReadingResolverBase } from "./base/voltageReading.resolver.base";
import { VoltageReading } from "./base/VoltageReading";
import { VoltageReadingService } from "./voltageReading.service";

@graphql.Resolver(() => VoltageReading)
export class VoltageReadingResolver extends VoltageReadingResolverBase {
  constructor(protected readonly service: VoltageReadingService) {
    super(service);
  }
}
