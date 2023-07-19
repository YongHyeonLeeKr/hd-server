import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AwbService } from './awb.service';
import { CreateAwbDto } from './dto/create-awb.dto';
import { UpdateAwbDto } from './dto/update-awb.dto';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('awb')
@ApiTags('Awb(화물,vms)')
export class AwbController {
  constructor(private readonly awbService: AwbService) {}

  @Post()
  create(@Body() createAwbDto: CreateAwbDto) {
    return this.awbService.create(createAwbDto);
  }

  @ApiOperation({ summary: '해포 실행' })
  @ApiBody({ type: [CreateAwbDto] })
  @Post('/break-down/:parent')
  breakDown(
    @Param('parent') parent: string,
    @Body() createAwbDtoArray: Array<CreateAwbDto>,
  ) {
    return this.awbService.breakDown(parent, createAwbDtoArray);
  }

  @Get()
  findAll() {
    return this.awbService.findAll();
  }

  @ApiOperation({ summary: '해포화물 검색' })
  @Get('/family/:id')
  getFamily(@Param('id') id: string) {
    return this.awbService.findFamily(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.awbService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAwbDto: UpdateAwbDto) {
    return this.awbService.update(+id, updateAwbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.awbService.remove(+id);
  }

  @ApiOperation({ summary: '파일 업로드 하기' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
