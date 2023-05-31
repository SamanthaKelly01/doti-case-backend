const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");


const create = validateRequest({
    body: z.object({
        nome: z.string({required_error: "O nome é obrigatório"}),
        email: z
        .string({required_error: "O email é obrigatório"})
        .email("O email é invalido"),
        senha: z.string({required_error: "A senha é obrigatória"}),
        endereco: z.string({required_error: "O endereço é obrigatório"}),
        descricao: z.string({required_error: "A descrição é obrigatória"}),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
    }),
});

const update = validateRequest({
    body: z.object({
        nome: z.optional(z.string()),
        email: z.optional(z.string().email("O email não é válido")),
        senha: z.optional(z.string()),
        endereco: z.optional(z.string()),
        descricao: z.optional(z.string()),

    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
    }),
})
module.exports = {
    create,
    destroy,
    update,
}

