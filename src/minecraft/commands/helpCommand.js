const minecraftCommand = require("../../contracts/minecraftCommand.js");

class HelpCommand extends minecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = "help";
    this.aliases = ["info"];
    this.description = "Shows help menu";
    this.options = [];
    this.optionsDescription = [];
  }

  onCommand(username, message) {
    try {
      this.send(`/gc https://i.imgur.com/3Nx9qC8.png`);
    } catch (error) {
      this.send("/gc Something went wrong..");
    }
  }
}

module.exports = HelpCommand;
