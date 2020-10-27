exports.execute = async (args) => {
  const vscode  = args.require('vscode')
  const slugify = require('slugify')

  vscode.window
    .showInputBox({placeHolder: 'Title'})
    .then(poemTitle => {
      if (poemTitle) {
        const edit = new vscode.WorkspaceEdit()
        const poemURI = vscode.Uri.file(
          vscode.workspace.workspaceFolders[0].uri.fsPath
          + '/'
          + args.replaceValues('${addPoemRecueilsDir}')
          + args.replaceValues('${addPoemRecueil}')
          + '/'
          + slugify(poemTitle, {lower: true})
          + '.md'
        )

        edit.createFile(poemURI, {ignoreIfExists: true})
        vscode.workspace.applyEdit(edit)

        vscode.window.showInformationMessage('' + poemURI)

        // boucle notif si fichier existe déjà > input slug (suggère "...-2/3/... .md")
        // prefill file > workspace.fs.writeFile
        // event listener onDidCreateFiles > open file > https://stackoverflow.com/a/39183552/6430293 > showInformationMessage
        // vscode.window.showInformationMessage(vscode.window.activeTextEditor.document.uri + ' created')
        // > but uri from workspace root
        // gestion des erreurs
      }
  })
}
