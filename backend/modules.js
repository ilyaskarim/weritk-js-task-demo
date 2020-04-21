module.exports = {
  Task: {
    name: "Task",
    graphql: {
      crud: {
        query: {
          generate: true,
          operations: "*",
        },
        mutation: {
          generate: true,
          operations: "*",
        },
      },
      schema: `
            type Task {
              id: Int
              title: String
              is_completed: Boolean
              created_at: String
              updated_at: String
            }
            input TaskInput {
              id: Int
              title: String
              is_completed: Boolean
            }
          `,
      mutation: {
        schema: ``,
        resolvers: {},
      },
      query: {
        schema: ``,
        resolvers: {},
      },
    },
    restApi: {
    },
    database: {
      sql: {
        tableName: "task",
        fields: {
          title: {
            type: "STRING",
          },
          is_completed: {
            type: "Number",
          },
        },
      },
    },
  },
};
