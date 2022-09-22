"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(
    //     `Welcome to the kickass ${chalk.red('generator-do-why')} generator!`
    //   )
    // );

    const prompts = [
      {
        type: "confirm",
        name: "assumption1",
        message: yosay(
          `Does your experiment uphold the SUTVA assumption? (it requires that "the [potential outcome] observation on one unit should be unaffected by the particular assignment of treatments to the other units" (Cox 1958))?`
        ),
        default: true
      },
      {
        type: "confirm",
        name: "assumption2",
        message: yosay("Does your experiment have any unmeasured confounders?"),
        default: true
      },
      {
        type: "confirm",
        name: "assumption3",
        message: yosay(
          `Is there common support i.e some stocasticity where all "members" can reach both outcome and counterfactual outcome?`
        ),
        default: true
      },
      {
        type: "input",
        name: "p_name",
        message: yosay(`What is the project name?`),
        default: true
      },
      {
        type: "input",
        name: "p_author",
        message: yosay(`Who are the authors?`),
        default: true
      },
      {
        type: "input",
        name: "p_email",
        message: yosay(`What is the authors email?`),
        default: true
      },
      {
        type: "input",
        name: "p_repo",
        message: yosay(`Where is the repository?`),
        default: true
      },
      {
        type: "input",
        name: "p_lis",
        message: yosay(`What license should this use?`),
        default: true
      },
      {
        type: "input",
        name: "p_des",
        message: yosay(`What is the project description?`),
        default: true
      },
      {
        type: "input",
        name: "p_url",
        message: yosay(`What is the project url?`),
        default: true
      },
      {
        type: "input",
        name: "p_cause",
        message: yosay(`What causes are there? `),
        default: true
      },
      {
        type: "input",
        name: "p_covariates",
        message: yosay(`What covariates are there? `),
        default: true
      },
      {
        type: "input",
        name: "p_confounders",
        message: yosay(`What confounders are there? `),
        default: true
      },
      {
        type: "input",
        name: "p_outcomes",
        message: yosay(`What outcomes are there? `),
        default: true
      },
      {
        type: "input",
        name: "p_treatment",
        message: yosay(`What treatment are you measuring? `),
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    this.installDependencies();
  }
};
