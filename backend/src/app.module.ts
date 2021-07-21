import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { InsurerProfileModule } from "./insurer/insurer-profile/insurer-profile.module";
import { OfferModule } from "./insurer/offer/offer.module";
import { ReportModule } from "./insurer/report/report.module";
import { ClientProfileModule } from "./consumer/client-profile/client-profile.module";
import { ProductModule } from "./consumer/product/product.module";
import { AuthenticationModule } from './everyone/authentication/authentication.module';

// Custom Modules

@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017/<database_name>", {
			autoCreate: true,
		}),
		InsurerProfileModule,
		OfferModule,
		ReportModule,
		ClientProfileModule,
		ProductModule,
		AuthenticationModule,
		// MongooseModule.forRoot("mongodb+srv://<username>:<password>@ecommerce-nestjs-angula.qp0gp.mongodb.net/ecommerce?retryWrites=true&w=majority"),
	],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
