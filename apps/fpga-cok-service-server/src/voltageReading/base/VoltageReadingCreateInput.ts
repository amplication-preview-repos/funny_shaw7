/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsNumber, Min, Max } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VoltageReadingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  value?: number | null;
}

export { VoltageReadingCreateInput as VoltageReadingCreateInput };
