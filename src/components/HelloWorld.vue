<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>hoge6</div>
    <div>
      <h3>データの取得日：{{ getDate }}</h3>
    </div>
    <div>
      <input type="button" value="データ更新" v-on:click="reflush" />
      <input type="button" value="オンラインか？" v-on:click="isOnline" />
      <input type="button" value="同期" v-on:click="onLineOnSave" />
    </div>

    <div>
      <h3>記事一覧</h3>
      <hr />
      <ul>
        <li v-for="article in articles" :key="article.id">
          <h3>{{ article.title }}</h3>
          <div>{{ article.text }}</div>
          <hr />
        </li>
      </ul>
    </div>

    <div>
      <h3>Users</h3>
      <ul>
        <li v-for="user in users" :key="user.id">
          <div>
            {{ user.name }}
          </div>
          <div>
            {{ user.bio }}
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h3>記事追加</h3>
      <div>タイトル</div>
      <input type="text" v-model="title" />
      <div>本文</div>
      <textarea rows="10" v-model="text" />
      <div>
        <input type="button" value="保存" v-on:click="saveArticle" />
      </div>
      <div>{{ message }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Database } from "../database.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      getDate: "2021/09/02 12:56",
      articles: [],
      users: [],
      title: "記事のタイトル",
      text: "記事の本文",
      message: "保存時の結果などを表示",
      apiBaseUrl:
        "https://f163-2400-2412-2e3-8300-6087-d43e-10a6-b352.ngrok.io",
      //apiBaseUrl: "http://localhost:3000",
    };
  },
  created() {
    console.log("created");
    this.db = new Database();
  },
  mounted() {
    this.getArticles();
    this.getUsers();
  },
  methods: {
    isOnline() {
      if (navigator.onLine) {
        alert("オンライン");
      } else {
        alert("オフライン");
      }
    },
    async onLineOnSave() {
      if (navigator.onLine) {
        alert("オンラインなのでサーバに保存します。");

        // indexedDB に保存しているリクエストを再生してサーバに保存していく
        let requests = await this.db.getRequests("");

        for (let i = 0; i < requests.length; i++) {
          let id = requests[i].id;
          let url = requests[i].url;
          let data = requests[i].data;
          await axios.post(url, data).then((response) => {
            if (response.status == 200) {
              console.log("保存しました。");
              this.db.deleteRequest(id);
            }
          });
        }

        // let idToIndex = {};
        // for (let i = 0; i < this.todos.length; i++) {
        //   idToIndex[this.todos[i].id] = i;
        // }
        // this.todos = todos.sort((a, b) => {
        //   // handle new items
        //   if (idToIndex[a.id] == undefined) {
        //     return 1;
        //   } else if (idToIndex[b.id] == undefined) {
        //     return -1;
        //   }

        //   return idToIndex[a.id] < idToIndex[b.id] ? -1 : 1;
        // });

        // window.navigator.serviceWorker
        //   .getRegistrations()
        //   .then((registrations) => {
        //     for (let registration of registrations) {
        //       //registration.update();
        //       //registration.sync();
        //       registration.unregister();
        //     }
        //   });
        // //window.location.reload(true);
      } else {
        alert("オフラインのため同期できません。");
      }
    },
    reflush() {
      console.log("reload");
      window.navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (let registration of registrations) {
            console.log("unregister");
            registration.unregister();
          }
        });
      window.location.reload(true);
    },
    async getArticles() {
      await axios.get(this.apiBaseUrl + "/api/v1/article").then((response) => {
        this.articles = response.data;
      });
    },
    async getUsers() {
      await axios.get(this.apiBaseUrl + "/api/v1/user").then((response) => {
        this.users = response.data;
      });
    },
    async saveArticle() {
      if (navigator.onLine) {
        // オンラインならそのまま保存
        await axios
          .post(this.apiBaseUrl + "/api/v1/article", {
            title: this.title,
            text: this.text,
          })
          .then((response) => {
            this.message = response.data.message;
          });
      } else {
        // オフラインの場合は、IndexedDB にリクエストの内容を保存しておく
        // オンラインになったタイミングで手動で保存されているリクエストを実行することで同期する
        let url = this.apiBaseUrl + "/api/v1/article";
        let data = {
          title: this.title,
          text: this.text,
        };

        console.log(url);
        console.log(data);
        await this.db.addRequest(url, data);

        this.message =
          "オフラインのため一時的に保存しました。オンラインになったら同期ボタンをクリックしてサーバに保存してください。";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
a {
  color: #42b983;
}
</style>
