import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

// Custom Modules


@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017/<database_name>", { autoCreate: true }),
		// MongooseModule.forRoot("mongodb+srv://<username>:<password>@ecommerce-nestjs-angula.qp0gp.mongodb.net/ecommerce?retryWrites=true&w=majority"),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
