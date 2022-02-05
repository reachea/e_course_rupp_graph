import ContextType from "../../../lib/ContextType"

export const CourseListQuery = async (_, {}, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const courseList = await knex.table("courses");

  return courseList
}