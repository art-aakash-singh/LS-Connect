import { BadRequestException, Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  getHealth(): { success: boolean } {
    return {
      success: true,
    };
  }

  @Get('error')
  getError(){
  throw new Error('Bad request error');
  }
}
