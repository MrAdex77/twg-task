import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/types/generated/": {
      schema: [
        {
          "https://chat.thewidlarzgroup.com/api/graphiql": {
            headers: {
              Authorization: `Bearer ${process.env.EXPO_PUBLIC_GRAPHQL_API_TOKEN}`,
            },
          },
        },
      ],
      plugins: ["typescript"],
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      documents: ["./src/**/*.ts"],
    },
  },
};

export default config;
