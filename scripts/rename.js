/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const inquirer = require('inquirer');
// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');
// eslint-disable-next-line import/no-extraneous-dependencies
const replace = require('replace-in-file');

const BASE_DIRECTORY = './';
const DEFAULT_COMPANY_NAME = 'csfrequency';
const DEFAULT_PACKAGE_NAME = 'com.csfrequency.apptemplate';
const DEFAULT_PROJECT_NAME = 'AppTemplate';
const VALID_CHARACTERS = /^[a-zA-Z\s]+$/;

const replaceInFile = async (from, to) => {
  try {
    const options = {
      files: ['./android/**', './ios/**', './*'],
      from: new RegExp(from, 'g'),
      to,
    };
    const changedFiles = await replace(options);
    if (changedFiles) {
      console.log(
        '[replaceInFile] Modified files: \n',
        changedFiles.join('\n')
      );
    }
    return changedFiles;
  } catch (error) {
    console.error('[replaceInFile] Error occurred: ', error);
    throw error;
  }
};

const renameFiles = async (dir, from, to) => {
  const files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i += 1) {
    const filename = files[i];
    const path = `${dir}/${filename}`;
    const file = fs.statSync(path);
    let newPath;
    if (filename.indexOf(from) !== -1) {
      newPath = `${dir}/${filename.replace(from, to)}`;
      fs.renameSync(path, newPath);
      console.log(`[renameFiles] Renamed: ${path} to: ${newPath}`);
    }
    // Recursive
    if (file.isDirectory()) {
      renameFiles(newPath || path, from, to);
    }
  }
};

const updateProjectName = async name => {
  console.log('---------------------------------------');
  console.log(`Updating project name: ${name}`);
  console.log('---------------------------------------');
  await replaceInFile(DEFAULT_PROJECT_NAME, name);
  console.log('---------------------------------------');
  console.log('Finished updating project name');
  console.log('---------------------------------------');
  console.log();
};

const updatePackageName = async packageName => {
  console.log('---------------------------------------');
  console.log(`Updating package name: ${packageName}`);
  console.log('---------------------------------------');
  await replaceInFile(DEFAULT_PACKAGE_NAME, packageName);
  console.log('---------------------------------------');
  console.log('Finished updating package name');
  console.log('---------------------------------------');
  console.log();
};

const renameProjectFiles = async name => {
  console.log('---------------------------------------');
  console.log(`Rename project files`);
  console.log('---------------------------------------');
  await renameFiles(BASE_DIRECTORY, DEFAULT_PROJECT_NAME, name);
  await renameFiles(
    BASE_DIRECTORY,
    DEFAULT_PROJECT_NAME.toLowerCase(),
    name.toLowerCase()
  );
  console.log('---------------------------------------');
  console.log('Finished renaming project files');
  console.log('---------------------------------------');
  console.log();
};

const renameCompanyFiles = async name => {
  console.log('---------------------------------------');
  console.log(`Rename company files`);
  console.log('---------------------------------------');
  await renameFiles(BASE_DIRECTORY, DEFAULT_COMPANY_NAME, name);
  console.log('---------------------------------------');
  console.log('Finished renaming company files');
  console.log('---------------------------------------');
  console.log();
};

const validateInput = (value, name) => {
  if (!value || value === '' || value.trim() === '') {
    return `Please supply a ${name}`;
  }
  if (!value.match(VALID_CHARACTERS)) {
    return `The ${name} must only contain letters or spaces`;
  }
  return true;
};

const questions = [
  {
    message: "What's the name of your project?",
    name: 'projectName',
    type: 'input',
    validate: value => validateInput(value, 'project name'),
  },
  {
    message: "What's the name of your company or organisation?",
    name: 'companyName',
    type: 'input',
    validate: value => validateInput(value, 'company name'),
  },
];

const run = async () => {
  const { companyName, projectName } = await inquirer.prompt(questions);
  const formattedProjectName = projectName.replace(/ /g, '');
  const formattedCompanyName = companyName.replace(/ /g, '').toLowerCase();

  const packageName = `com.${formattedCompanyName}.${formattedProjectName.toLowerCase()}`;

  await updateProjectName(formattedProjectName);
  await updatePackageName(packageName);
  await renameProjectFiles(formattedProjectName);
  await renameCompanyFiles(formattedCompanyName);

  console.log();
  console.log('---------------------------------------------------------');
  console.log('Set project parameters to:');
  console.log('---------------------------------------------------------');
  console.log('Project name: ', projectName);
  console.log('Company name: ', companyName);
  console.log('Package name: ', packageName);
  console.log('---------------------------------------------------------');
  console.log();
};

run().catch(error => {
  console.error(error.message);
  console.log('---------------------------------------------------------');
  process.exit();
});
