import ContextType from "../../../lib/ContextType";

export const CreateCourseMutation = async (_, {input}, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const createCourse = await knex.table("courses").insert({
    author: input.author,
    name: input.name,
    price: input.price,
    discount: input.discount,
    thumbnail: input.thumbnail
  })

  return createCourse[0]
}