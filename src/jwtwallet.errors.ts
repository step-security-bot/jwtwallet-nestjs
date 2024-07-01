export class BaseJwtWalletError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class PrivateKeyMissingError extends BaseJwtWalletError {
  constructor() {
    super("Private key is missing");
  }
}

export class KeyMissingError extends BaseJwtWalletError {
  constructor() {
    super("Key is missing");
  }
}

export class SaveTokenExitError extends BaseJwtWalletError {
  constructor() {
    super("Exiting due to missing keys");
  }
}

export class KeyIdDidNotMatchError extends BaseJwtWalletError {
  constructor() {
    super("Key ID did not match");
  }
}

export class UndefinedAlgoritmError extends BaseJwtWalletError {
  constructor() {
    super("Key ID did not match");
  }
}
