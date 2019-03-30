export abstract class CreateDialog {
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
