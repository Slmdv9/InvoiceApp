import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InvoiceModel } from "./invoice.model";
import { forwardRef } from "@nestjs/common/utils";
import { CustomerModel } from "src/customer/customer.model";
import { InvoiceService } from "./invoice.service";
import { InvoiceResolver } from "./invoice.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([InvoiceModel]), forwardRef(() => CustomerModel)],
    providers: [InvoiceService, InvoiceResolver],
    exports: [InvoiceService]
})

export class InvoiceModule{}