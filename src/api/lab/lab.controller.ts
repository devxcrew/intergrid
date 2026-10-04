import { FastifyRequest, FastifyReply } from 'fastify';
import { labProvider } from './lab.provider.js';
import { createLabDraftSchema, updateLabDraftSchema } from './lab.schema.js';

export const labController = {
  async show(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) {
    const id = req.params.id;
    const draft = await labProvider.getDraft(id);
    if (!draft) return res.status(404).send({ error: 'Not found' });
    return res.send({ data: draft });
  },

  async store(req: FastifyRequest, res: FastifyReply) {
    const parsed = createLabDraftSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).send({ errors: parsed.error.format() });
    }
    const draft = await labProvider.createDraft(parsed.data);
    return res.status(201).send({ data: draft });
  },

  async update(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) {
    const id = req.params.id;
    const parsed = updateLabDraftSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).send({ errors: parsed.error.format() });
    }
    try {
      const draft = await labProvider.updateDraft(id, parsed.data);
      return res.send({ data: draft });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      return res.status(404).send({ error: errorMsg });
    }
  },

  async destroy(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) {
    const id = req.params.id;
    const success = await labProvider.deleteDraft(id);
    if (!success) return res.status(404).send({ error: 'Not found' });
    return res.status(204).send();
  }
};
