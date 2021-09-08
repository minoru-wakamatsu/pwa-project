import Dexie from "dexie";
export class Database extends Dexie {
  /**
   * コンストラクタ
   */
  constructor() {
    super("database");

    this.version(1).stores({
      requests: "++id,timestamp",
    });

    this.requests = this.table("requests");
  }

  async getRequests(order) {
    let requests = [];
    switch (order) {
      case forwardOrder:
        requests = await this.requests.orderBy("id").toArray();
        break;
      case reverseOrder:
        requests = await this.requests
          .orderBy("id")
          .reverse()
          .toArray();
        break;
      case unfinishedFirstOrder:
        requests = await this.requests.orderBy("done").toArray();
        break;
      default:
        requests = await this.requests.orderBy("id").toArray();
    }

    return requests.map((t) => {
      t.done = !!t.done;
      return t;
    });
  }

  // setRequestDone(id, done) {
  //   return this.requests.update(id, { done: done ? 1 : 0 });
  // }

  addRequest(request) {
    let now = new Date();
    let timestamp = now.getTime();
    return this.requests.add({ request: request, timestamp: timestamp });
  }

  deleteRequest(requestId) {
    return this.requests.delete(requestId);
  }
}

// forwardOrder is passed into getTodos to retrieve todos in chronological
// order.
export const forwardOrder = "forward";

// reverseOrder is passed into getTodos to retrieve todos in reverse
// chronological order.
export const reverseOrder = "reverse";

// unfinishedFirstOrder is passed into getTodos to retrieve todos such that
// unfinished todos come before finished todos in the returned array.
export const unfinishedFirstOrder = "unfinished-first";
