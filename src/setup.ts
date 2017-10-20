/**
 * setup.ts
 *
 * In this file we initialize everything we need when the page is ready. This
 * file is really important because it initializes every module and other useful
 * stuff that you may need to use.
 */

const MODULE_NAME_ATTR = 'data-module';
const MODULE_SELECTOR = `[${MODULE_NAME_ATTR}]`;

interface Modules {
   [key: string]: {
     default: (elem: HTMLElement) => void,
   };
 }

/**
 * Returns the name of the module
 */
function getModuleNameFromPath(path: string): string {
  return path.split('/')[1];
}

/**
 * Requires all the modules dynamically and returns an object mapping them.
 */
function getModulesObject(): Modules {
  // WARNING: Don't use variables here!!! require.context works in a very special way so
  // every param MUST BE a literal. See https://webpack.js.org/guides/dependency-management/#require-context
  // for more information.

  const requireContext = (require as any).context('./modules', true, /\.ts$/);

  return requireContext.keys().reduce((acc: any, key: string) => {
    return {
      ...acc,
      [getModuleNameFromPath(key)]: requireContext(key),
    };
  }, {});
}

/**
 * Initializes all the modules.
 */
function initializeModules() {
  const modules = getModulesObject();
  const domModules = Array.from(document.querySelectorAll(MODULE_SELECTOR)) as HTMLElement[];

  domModules.forEach(domElement => {
    const moduleName = domElement.getAttribute(MODULE_NAME_ATTR) || '';

    if (modules.hasOwnProperty(moduleName)) {
      modules[moduleName].default(domElement);
    } else {
      // tslint:disable-next-line
      console.warn(`Module with name ${moduleName} doesn't exist. Check the data-module property of the element: `, domElement);
    }
  });
}

(function runSetup() {
  initializeModules();
})();
