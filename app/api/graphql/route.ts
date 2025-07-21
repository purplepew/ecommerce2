import { typeDefs } from "@/graphql/schema/typeDefs";
import { resolvers } from "@/graphql/schema/resolvers";
import { createYoga, createSchema } from "graphql-yoga";
import { NextRequest } from "next/server";

const yogaApp = createYoga({
    graphqlEndpoint: '/api/graphql',
    schema: createSchema({
        typeDefs,
        resolvers,
    }),
    fetchAPI: { Request, Response}
})

export const GET = (req: NextRequest, ctx: any) => yogaApp.handleRequest(req, ctx);
export const POST = (req: NextRequest, ctx: any) => yogaApp.handleRequest(req, ctx);