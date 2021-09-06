<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <h3>データの取得日：{{ getDate }}</h3>
    </div>
    <div>
      <input type="button" value="データ更新" />
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
      apiBaseUrl: "https://8045-2400-2412-2e3-8300-88c5-e1ff-772f-2e6f.ngrok.io",
      //apiBaseUrl: "http://localhost:3000",
    };
  },
  mounted() {
    this.getArticles();
    this.getUsers();
  },
  methods: {
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
      await axios
        .post(this.apiBaseUrl + "/api/v1/article", {
          title: this.title,
          text: this.text,
        })
        .then((response) => {
          this.message = response.data.message;
        });
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
