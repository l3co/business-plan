export abstract class BaseDialog {
  action(action: string) {
    if (action === 'close') {
      this.close();
    }
    if (action === 'save') {
      this.save();
    }
  }

  abstract save(): void;

  abstract close(): void;
}
