
var router = new VueRouter({
  routes:[
      {
          path:"/",
          component:{template:'#one'},
      },
      {
          path:"/one1",
          component:{template:'#one1'},
          children:[{
            path:"/",
            component:{template:'#s1'}
          },{
            path:"s2",
            component:{template:'#s2'}
          }]
      },
      {
          path:"/one2",
          component:{template:'#one2'},
          children:[{
            path:"/",
            component:{template:'#c1'}
          },{
            path:"c2",
            component:{template:'#c2'}
          },,{
            path:"c3",
            component:{template:'#c3'}
          }]
      },
      {
          path:"/one3",
          component:{template:'#one3'},
          children:[{
            path:"/",
            component:{template:'#d1'}
          },{
            path:"d2",
            component:{template:'#d2'}
          }]
      },
      {
          path:"/one4",
          component:{template:'#one4'},
          children:[{
            path:"/",
            component:{template:'#a1'}
          },{
            path:"a2",
            component:{template:'#a2'}
          }]
      }
  ]
})
new Vue({
  el:"#box",
  router,
})

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});