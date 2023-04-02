//open m.facebook.com to run this code
//written by ChatGPT

// OPTIONS
// scrolling time
var scrollTime = 120000;
// like delay for avoiding banned
var likeDelay = 2000;

// Define a variable to keep track of the total scrolling time
let totalScrollingTime = 0;

// Define a function to scroll the page down by 800px
function scrollDown() {
  window.scrollBy(0, 800);
}

// Call the scrollDown function every 500ms using setInterval
const scrollingIntervalId = setInterval(() => {
  scrollDown();
  
  // Update the total scrolling time
  totalScrollingTime += 500;
  
  // Check if 2 minutes have passed, and stop scrolling if so
  if (totalScrollingTime >= scrollTime) {
    clearInterval(scrollingIntervalId);
    
    // Like every post and add a 3 second delay after every post is liked
    const divs = document.querySelectorAll('._15ko[aria-pressed="false"]');
    let index = 0;
    const likeIntervalId = setInterval(() => {
      if (index >= divs.length) {
        clearInterval(likeIntervalId);
      } else {
        divs[index].click();
        console.count("liked");
        index++;
      }
    }, likeDelay);
  }
}, 500);

