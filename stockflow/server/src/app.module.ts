import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { BrandsModule } from './brands/brands.module.js';
import { SuppliersModule } from './suppliers/suppliers.module.js';
import { ProductsModule } from './products/products.module.js';
import { SalesModule } from './sales/sales.module.js';
import { InventoryModule } from './inventory/inventory.module.js';
import { ReportsModule } from './reports/reports.module.js';
import { AlertsModule } from './alerts/alerts.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    BrandsModule,
    SuppliersModule,
    ProductsModule,
    SalesModule,
    InventoryModule,
    ReportsModule,
    AlertsModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
