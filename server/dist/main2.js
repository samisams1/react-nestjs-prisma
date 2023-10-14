"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const graphql_1 = require("graphql");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    const httpServer = (0, http_1.createServer)(app.getHttpAdapter().getInstance());
    const io = new socket_io_1.Server(httpServer);
    const subscriptionServer = subscriptions_transport_ws_1.SubscriptionServer.create({
        execute: graphql_1.execute,
        subscribe: graphql_1.subscribe,
        schema: app.get('GqlSchema'),
    }, {
        server: httpServer,
        path: '/subscriptions',
    });
    await app.listen(5000, () => {
        console.log('Nest application is running on port 5000');
    });
    const shutdownSignals = ['SIGINT', 'SIGTERM'];
    shutdownSignals.forEach((signal) => {
        process.on(signal, () => {
            subscriptionServer.close();
            process.exit(0);
        });
    });
}
bootstrap();
//# sourceMappingURL=main2.js.map