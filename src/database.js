import Dexie from "dexie";

/**
 * IndexedDB への CRUD 処理を提供するクラスです。
 */
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

  /**
   * IndexedDB に保存されたリクエストデータ一覧を取得します。
   *
   * @returns
   */
  async getRequests() {
    let requests = [];
    requests = await this.requests.orderBy("id").toArray();
    return requests;
  }

  /**
   * IndexedDB にリクエスト内容を保存します。
   *
   * @param {*} url
   * @param {*} data
   * @returns
   */
  addRequest(url, data) {
    let now = new Date();
    let timestamp = now.getTime();
    return this.requests.add({
      url: url,
      data: data,
      timestamp: timestamp,
    });
  }

  /**
   * IndexedDB に保存されているリクエストデータを削除します。
   *
   * @param {*} requestId
   * @returns
   */
  deleteRequest(requestId) {
    return this.requests.delete(requestId);
  }
}
