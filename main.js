const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
  /* If the page is scrolled to the containers element and the counters are not activated */
  if (
    isElementInViewport(container) &&
    activated === false
  ) {
    activated = true;

    counters.forEach((counter) => {
      // Set counter values to zero
      counter.innerText = 0;
      // Set count variable to track count
      let count = 0;

      // Get counter target number to count to
      const target = parseInt(counter.dataset.count);

      // Calculate the increment value based on the target and animation duration
      const increment = Math.ceil(target / 100);

      // Update count function
      function updateCount() {
        if (count < target) {
          count += increment;
          counter.innerText = Math.min(count, target);
          requestAnimationFrame(updateCount);
        }
      }

      // Run the function
      updateCount();
    });
  }
});

// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
