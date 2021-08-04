import { ITransitionHandler } from "@ot/state-machine";
import { IOperation } from "@ot/types";
import { StateMachine } from "../src/state-machine.impl";

describe("Test State Machine", () => {
  let client: StateMachine, handler: ITransitionHandler;

  beforeAll(() => {
    handler = {
      applyOperation: jest.fn(),
      sendOperation: jest.fn(),
    };
  });

  beforeEach(() => {
    client = new StateMachine(handler);
  });

  afterEach(() => {
    client.dispose();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("#isSynchronized", () => {
    it("should return true as it starts in Synchronized state", () => {
      expect(client.isSynchronized()).toBe(true);
    });
  });

  describe("#isAwaitingConfirm", () => {
    it("should return true when the first operation is recieved", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      expect(client.isAwaitingConfirm()).toBe(true);
    });
  });

  describe("#isAwaitingWithBuffer", () => {
    it("should return true when operation is recieved and previous ones pending acknowledgement", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      client.applyClient(operation);
      expect(client.isAwaitingWithBuffer()).toBe(true);
    });
  });

  describe("#applyClient", () => {
    it("should send operation to remote users", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      expect(handler.sendOperation).toHaveBeenCalledWith(operation);
    });
  });

  describe("#applyServer", () => {
    it("should recieve operation from remote users", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyServer(operation);
      expect(handler.applyOperation).toHaveBeenCalledWith(operation);
    });
  });

  describe("#serverAck", () => {
    it("should throw error if state is Synchronized", () => {
      expect(() => client.serverAck()).toThrowError();
    });

    it("should transition to Synchronized state if state is Awaiting for Confirm", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      client.serverAck();
      expect(client.isSynchronized()).toBe(true);
    });

    it("should transition to Awaiting for Confirm state if state is Awaiting for Buffer", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      client.applyClient(operation);
      client.serverAck();
      expect(client.isAwaitingConfirm()).toBe(true);
    });
  });

  describe("#serverRetry", () => {
    it("should throw error if state is Synchronized", () => {
      expect(() => client.serverRetry()).toThrowError();
    });

    it("should retain state if state is Awaiting for Confirm", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      client.serverRetry();
      expect(client.isAwaitingConfirm()).toBe(true);
    });

    it("should transition to Awaiting for Confirm state if state is Awaiting for Buffer", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyClient(operation);
      client.applyClient(operation);
      client.serverRetry();
      expect(client.isAwaitingConfirm()).toBe(true);
    });
  });

  describe("#sendOperation", () => {
    it("should send operation to remote users", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.sendOperation(operation);
      expect(handler.sendOperation).toHaveBeenCalledWith(operation);
    });

    it("should throw error if already disposed", () => {
      client.dispose();

      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      expect(() => client.sendOperation(operation)).toThrowError();
    });
  });

  describe("#applyOperation", () => {
    it("should recieve operation from remote users", () => {
      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      client.applyOperation(operation);
      expect(handler.applyOperation).toHaveBeenCalledWith(operation);
    });

    it("should throw error if already disposed", () => {
      client.dispose();

      const operation: IOperation = {
        compose: (op: IOperation) => op,
        transform: (op: IOperation) => [op, op],
      };
      expect(() => client.applyOperation(operation)).toThrowError();
    });
  });
});
