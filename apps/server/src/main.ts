import Fastify from 'fastify';
import type { FastifyRequest, FastifyReply } from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';
import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({
    logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'static'),
    prefix: '/',
});

fastify.register(swagger, {
    openapi: {
        info: {
            title: 'Test API',
            description: 'Test API',
            // termsOfService: '',
            contact: {
                name: 'User',
                url: 'user.azurewebsites.net',
                email: 'user@mail.com',
            },
            license: {
                name: 'Apache 2.0',
                url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
            },
            version: '1.0.0',
        },
    },
});

fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
});

const namedObject = Type.Object(
    {
        name: Type.Optional(Type.String({ description: 'Имя', examples: ["test"] })),
        test: Type.Optional(Type.Number({ description: 'число' })),
        id: Type.Number({ description: 'номер' }),
    },
    { description: 'Тело запроса sum' }
);

type NamedObject = Static<typeof namedObject>;

fastify.register(
    (instance, opts, done) => {
        instance.get(
            '/hello/:name',
            {
                schema: {
                    params: namedObject,
                    // querystring: namedObject,
                    description: namedObject.description,
                    tags: ['Greeting'],
                    response: {
                        200: namedObject,
                    },
                },
            },
            async (request: FastifyRequest<{ Params: NamedObject }>, reply: FastifyReply) => {
                const { name } = request.params;
                return { message: `Hello, ${name}!` };
            }
        );

        instance.post(
            '/sum',
            {
                schema: {
                    description: 'Суммируем два числа',
                    tags: ['Math'],
                    body: {
                        type: 'object',
                        required: ['a', 'b'],
                        properties: {
                            a: { type: 'number' },
                            b: { type: 'number' },
                        },
                    },
                    response: {
                        200: {
                            type: 'object',
                            properties: {
                                result: { type: 'number' },
                            },
                        },
                    },
                },
            },
            async (
                request: FastifyRequest<{ Body: { a: number; b: number } }>,
                reply: FastifyReply
            ) => {
                const { a, b } = request.body;
                if (typeof a !== 'number' || typeof b !== 'number') {
                    return reply.status(400).send({ error: 'a и b должны быть числами' });
                }
                return { result: a + b };
            }
        );

        done();
    },
    { prefix: '/api' }
);

const PORT = +process.env.PORT || 3000;

const start = async () => {
    try {
        await fastify.listen({
            port: PORT,
        });
        console.log(`Server running at http://localhost:${PORT}`);
        console.log(`Swagger docs: http://localhost:${PORT}/docs`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
// npx openapi-typescript http://localhost:3000/docs/json -o dist/api/apiModels.ts
// fastify generate-swagger --yaml=true app.js

// import createClient from "openapi-fetch";
// import type { paths } from "./api/apiModels";
// const client = createClient<paths>({ baseUrl: "https://api.example.com" });
// const { data, error } = await client.GET("/users");

// npx orval --config orval.config.js
// orval.config.js
// module.exports = {
//   petstore: {
//     input: './openapi.yaml',
//     output: {
//       target: './src/api/petstore.ts',
//       client: 'axios',   // или 'fetch'
//       override: {
//         mutator: {
//           path: './src/custom-fetch.ts', // если свой fetch нужен
//           name: 'customFetch',
//         },
//       },
//     },
//   },
// };

// npx openapi-typescript-codegen --input ./openapi.yaml --output ./src/api

