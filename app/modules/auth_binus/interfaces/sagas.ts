export interface IWorkerSagaLogin {
  type: string;
  send?: any;
  callback? :Function;
}