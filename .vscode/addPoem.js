exports.execute = async (args) => {
  const vscode = args.require('vscode');

  vscode.window.showInformationMessage(
    args.replaceValues('Last recueil is ${currentRecueil} and current time is ${currentTime}')
  );
};
