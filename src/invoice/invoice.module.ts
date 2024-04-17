import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InvoiceModel } from "./invoice.model";
import { CustomerModel } from "src/customer/customer.model";
import { InvoiceService } from "./invoice.service";
import { InvoiceResolver } from "./invoice.resolver";
import { CustomerModule } from "src/customer/customer.module";

@Module({
    imports: [TypeOrmModule.forFeature([InvoiceModel]), forwardRef(() => CustomerModule)],
    providers: [InvoiceService, InvoiceResolver],
    exports: [InvoiceService]
})

export class InvoiceModule{}