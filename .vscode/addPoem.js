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

        // boucle notif si fichier existe déjà > input slug (suggère "...-2/3/... .md")
        // prefill file > workspace.fs.writeFile
        // event listener onDidCreateFiles > notif + open file > https://stackoverflow.com/a/39183552/6430293
        vscode.window.showInformationMessage((vscode.window.activeTextEditor.document.uri).toString().substring((vscode.workspace.workspaceFolders[0].uri).toString().length).substring(1) + ' created')
        // mais notif basé sur le fichier créé dans edit, pas sur fichier actif
        // gestion des erreurs
      }
  })
}
