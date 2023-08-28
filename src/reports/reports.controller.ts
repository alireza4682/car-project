import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGaurd } from 'src/gaurds/auth.gaurds';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGaurd)
  createReport(@Body() body: CreateReportDto) {
    return this.reportsService.create(body);
  }
}
