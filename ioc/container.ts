import { Container } from 'inversify';

export class IoC {
  container: Container;

  constructor() {
    this.container = new Container();
    this.addRepositories();
    this.addDomainServices();
    this.addUseCases();
    this.addControllers();
    this.addClients();
  }

  addClients() {
  }

  addControllers() {
  }

  addDomainServices() {
  }

  addRepositories() {
  }

  addUseCases() {
  }
}

const container = new IoC().container;

export default container;
