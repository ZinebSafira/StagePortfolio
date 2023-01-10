var liElements = document.querySelectorAll('li.post');
const animationDelayIncrement = 0.2;
let currentAnimationDelay = 0;

liElements.forEach((li) => {
  li.style.animationDelay = `${currentAnimationDelay}s`;
  currentAnimationDelay += animationDelayIncrement;
});

function applyAnimation() {
    var posts = document.querySelectorAll('li.post');
  
    posts.forEach(function(post) {
      if (isElementInViewport(post)) {
        post.classList.add('fade-in');
      } else {
        post.classList.remove('fade-in');
      }
    });
  }
  

liElements.forEach(function(post) {
    if (isElementInViewport(post)) {
      liElements.classList.add('fade-in');
    } else {
      liElements.classList.remove('fade-in');
    }
  }
);
