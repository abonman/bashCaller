import { IsString, IsInt, IsArray } from 'class-validator';

export class BashCommandResponseDto {
    @IsString()
    command: string;
    @IsArray()
    @IsString({ each: true })
    stdout: string[];
}

export class BashCommandRequestDto {
    @IsInt()
    userId: number;
    @IsString()
    command: string;
}
