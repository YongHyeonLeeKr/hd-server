import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AmrChargeHistoryService } from './amr-charge-history.service';
import { CreateAmrChargeHistoryDto } from './dto/create-amr-charge-history.dto';
import { UpdateAmrChargeHistoryDto } from './dto/update-amr-charge-history.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('amr-charge-history')
@ApiTags('amr-charge-history')
export class AmrChargeHistoryController {
  constructor(
    private readonly amrChargeHistoryService: AmrChargeHistoryService,
  ) {}

  @Post()
  create(@Body() createAmrChargeHistoryDto: CreateAmrChargeHistoryDto) {
    return this.amrChargeHistoryService.create(createAmrChargeHistoryDto);
  }

  @Get()
  findAll() {
    return this.amrChargeHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amrChargeHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAmrChargeHistoryDto: UpdateAmrChargeHistoryDto,
  ) {
    return this.amrChargeHistoryService.update(+id, updateAmrChargeHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amrChargeHistoryService.remove(+id);
  }
}
