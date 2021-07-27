import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { InsurerProfileModule } from "./insurer/insurer-profile/insurer-profile.module";
import { OfferModule } from "./insurer/offer/offer.module";
import { ReportModule } from "./insurer/report/report.module";
import { ClientProfileModule } from "./consumer/client-profile/client-profile.module";
import { ProductModule } from "./consumer/product/product.module";

// Custom Modules

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.ilbdz.mongodb.net/insuranceDB?retryWrites=true&w=majority", {
			autoCreate: true,
		}),
		InsurerProfileModule,
		OfferModule,
		ReportModule,
		ClientProfileModule,
		ProductModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
