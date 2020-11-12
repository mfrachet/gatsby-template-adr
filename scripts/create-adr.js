/* eslint-disable @typescript-eslint/no-var-requires */
const { prompt } = require("enquirer");
const path = require("path");
const slugify = require("slugify");
const fs = require("fs");
const adrTemplate = require("../adr-template");
const { getNextId, formatDateOfToday } = require("./helpers");

const createAdr = async () => {
  const { title } = await prompt({
    type: "input",
    name: "title",
    message: "What is the title of the new ADR?",
  });

  const { author } = await prompt({
    type: "input",
    name: "author",
    message: "What is your name?",
  });

  const adrsPath = path.join(process.cwd(), "src", "adrs");
  const adrFileNames = await fs.promises.readdir(adrsPath);

  let amend;

  if (adrFileNames && adrFileNames.length > 0) {
    const { isAmending } = await prompt({
      type: "confirm",
      name: "isAmending",
      message: "Does this ADR amends a previously created one?",
    });

    if (isAmending) {
      const response = await prompt({
        type: "select",
        name: "amend",
        choices: [...adrFileNames],
        message: "Please, select the ADR to amend:",
      });

      amend = response.amend;
    }
  }

  const nextId = getNextId(adrFileNames);

  const slug = slugify(title);

  const fileName = `${nextId}-${slug}.md`;
  const formattedToday = formatDateOfToday();

  const fileContent = adrTemplate({ title, slug, date: formattedToday, author, amend: amend || "" });

  await fs.promises.writeFile(path.join(adrsPath, fileName), fileContent);

  console.log(`\n`);
  console.log("The ADR has been created!");
};

createAdr();
