class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts({});
    this.elements = {
      listElem: document.querySelector(listElem),
    }
  }
  renderPosts() {

  }
  showUserPost() {

  }

  showLikesPost() {

  }
  showAlPost() {

  }
  showOpenModal() {

  }
}


class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts;
  }
  addPost(tweet) {
      this.posts.push(new Post(tweet));
  }
  deletePost(id) {

  }
  likePost(id) {

  }
}
class Post {
  constructor(param) {
    this.id = param.id;
    this.userName = param.userName;
    this.nickName = param.nickName;
    this.postDate = param.post.Date;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }
  changeLike() {
    this.like = !this.like;
    if(this.like) {
      this.likes++;
    } else {
      this.likes--;
    }
  } 
}
const twitter = new Twitter({
  listElem: '.tweet-list'
})
 console.log('twitter: ', twitter);