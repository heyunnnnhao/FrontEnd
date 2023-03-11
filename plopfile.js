module.exports = function (plop) {
  plop.setGenerator("new", {
    description: "创建新的插件",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name for the package:",
      },
    ],
    actions: (data) => [
      {
        type: "addMany",
        destination: "packages/{{ name }}",
        base: "plop-templates/new-package",
        skipIfExists: true,
        templateFiles: "plop-templates/new-package/**/*",
        abortOnFail: true,
      },
    ],
  });
};
