const urban = require("urban");

exports.define = word => {
  return new Promise((resolve, reject) => {
    const result = urban(word);

    result.first(json => {
      try {
        // To make it look beautiful in discord
        const definition = `\`\`\`${json.word}\n\n${
          json.definition
        }\n\nExample: ${json.example}\`\`\``;

        resolve(definition);
      } catch (e) {
        reject("Word not found");
      }
    });
  });
};
