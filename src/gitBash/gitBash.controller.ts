import { Body, Controller, Get, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BashCommandRequestDto, BashCommandResponseDto } from './dto/gitBash.dto';
import { gitBashService } from './gitBash.service';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('gitBash')
@Controller('gitBash')
export class gitBashController {

  constructor(private readonly bashCommandService: gitBashService) { }

  @Get("/:userId")
  @ApiOperation({ summary: 'get help' })
  async help(@Param('userId') userId: string): Promise<string[]> {
    Logger.log('Calling gitBashController:help()', { type: "GET", "userId": userId });
    return await this.bashCommandService.help();
  }

  @Post("/run")
  @ApiOperation({ summary: 'run command' })
  @UsePipes(new ValidationPipe({ skipMissingProperties: false }))
  async bashCommand(@Body() bashCommandRequest: BashCommandRequestDto): Promise<BashCommandResponseDto> {
  Logger.log('Calling gitBashController:bashCommand()', { type: "POST", userId: bashCommandRequest.userId,bashCommandRequest:bashCommandRequest });
    return await this.bashCommandService.runBashCommand(bashCommandRequest);
  }

  @Get("/availableCommandList/:userId")
  @ApiOperation({ summary: 'get available commands' })
  async availableCommandList(@Param('userId') userId: string): Promise<string[]> {
    Logger.log('Calling gitBashController:availableCommandList()', { type: "GET", "userId": userId });
    return await this.bashCommandService.availableCommands();
  }

  @Get("/branches/:userId")
  @ApiOperation({ summary: 'get all branches' })
  async availableBranches(@Param('userId') userId: string): Promise<string[]> {
    Logger.log('Calling gitBashController:availableBranches()', { type: "GET", "userId": userId });
    return await this.bashCommandService.availableBranches();
  }
}
