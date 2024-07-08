import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
@ObjectType("VoltageReadingDtoObject")
class VoltageReadingDto {
    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    value!: number;
}

export { VoltageReadingDto as VoltageReadingDto };