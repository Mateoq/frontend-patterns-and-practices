import Component from '../Component';

const css = {

};

const selectors = {

};

interface TabsDOM {

}

interface TabsState {

}

interface TabsOptions {

}

export default class Tabs extends Component {
  private dom: TabsDOM;
  private state: TabsState;
  private options: TabsOptions;

  constructor(domElement: HTMLElement) {
    super();

    this.dom = {

    };

    this.state = {
      currentIndex: 0,
    };

    this.options = Component.parseOptions(domElement);
  }
}
