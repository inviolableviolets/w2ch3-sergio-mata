const counter = document.querySelector(".counter");
const buttons = document.querySelectorAll(".button");

let count = 0;

let a;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;

    if (styles.contains("add") && count <= 100) {
      count++;
      const addFx = new Audio(
        "https://ia601606.us.archive.org/29/items/add_20230306/add.mp3"
      );
      addFx.play();
    }
    if (count === 101 && styles.contains("add")) {
      count = 100;
      counter.classList.add("bounce");
      setTimeout(() => {
        counter.classList.remove("bounce");
      }, 200);
      const addFx = new Audio(
        "https://ia904702.us.archive.org/13/items/windows_xp_error/windows_xp_error.mp3"
      );
      addFx.play();
    }
    if (styles.contains("remove") && count >= 0) {
      count--;
      const removeFx = new Audio(
        "https://ia804704.us.archive.org/23/items/sub_20230306/sub.mp3"
      );
      removeFx.play();
    }
    if (count === -1 && styles.contains("remove")) {
      count = 0;
      counter.classList.add("bounce");
      setTimeout(() => {
        counter.classList.remove("bounce");
      }, 200);
      const addFx = new Audio(
        "https://ia904702.us.archive.org/13/items/windows_xp_error/windows_xp_error.mp3"
      );
      addFx.play();
    }
    if (styles.contains("reset")) {
      count = 0;
      const resetFx = new Audio(
        "https://ia904709.us.archive.org/7/items/reset_202303/reset.mp3"
      );
      resetFx.play();
    }
    if (count === 69) {
      counter.style.color = "hotpink";
      const sixtyNineFx = new Audio(
        "https://ia904706.us.archive.org/3/items/69_20230306/69.mp3"
      );
      sixtyNineFx.play();
    } else {
      counter.style.color = "#85f374";
    }

    counter.textContent = count;
  });
});
