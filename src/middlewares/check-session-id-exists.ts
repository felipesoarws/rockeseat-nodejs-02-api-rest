import { FastifyReply, FastifyRequest } from "fastify";

export async function checkSessionIdExists(
  req: FastifyRequest,
  rep: FastifyReply
) {
  const sessionId = req.cookies.sessionId;

  if (!sessionId) {
    rep.status(401).send({
      error: "Unauthorized.",
    });
  }
}
