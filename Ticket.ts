type StatusType = 'OPEN' | 'CLOSED' | 'UNASSIGNED';

export class Ticket {
  #status: StatusType;
  #description: string;
  #createdAt: Date;
  #updatedAt: Date;

  constructor({ description }: { description: string }) {
    this.#status = 'UNASSIGNED';
    this.#description = description;
    this.#createdAt = new Date();
    this.#updatedAt = new Date();
  }

  get status() {
    return this.#status;
  }

  set status(status: StatusType) {
    this.#status = status;
    this.#updatedAt = new Date();
  }

  get description() {
    return this.#description;
  }

  set description(description: string) {
    this.#description = description;
    this.#updatedAt = new Date();
  }

  get createdAt() {
    return this.#createdAt;
  }

  get updatedAt() {
    return this.#updatedAt;
  }

  toString() {
    return `Ticket: ${this.#description} - ${this.#status} - ${
      this.#createdAt
    } - ${this.#updatedAt}`;
  }
}
