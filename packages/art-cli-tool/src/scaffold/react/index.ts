import ArtScaffold from '../ArtScaffold';
import { ProjectScaffold, ModuleScaffold } from '../index';

class ReactScaffold extends ArtScaffold {
  constructor(scaffoldData: ProjectScaffold | ModuleScaffold, scaffoldType: string) {
    super((scaffoldData as ProjectScaffold).projectName || '', scaffoldType);

    // override
    this.scaffoldsAvailable = ['react/h5'];
    this.scaffoldChoosen = 'react/h5';

    this.setProjectName((scaffoldData as ProjectScaffold).projectName || '');
    this.setProjectDescription((scaffoldData as ProjectScaffold).projectDescription || '');
    this.setProjectVirtualPath((scaffoldData as ProjectScaffold).projectVirtualPath);
    this.setModuleName(scaffoldData.moduleName);
  }
}

module.exports = ReactScaffold;