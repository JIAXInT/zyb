var posts=["2024/10/25/测试/","2024/10/25/hello-world/","2024/10/25/第二测试/","2024/10/25/第四测试/","2024/10/25/第五测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };