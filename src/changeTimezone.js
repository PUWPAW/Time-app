import { WorldTime } from "./WorldTime";

export function changeTimezone() {
  const London = document.querySelector(".cities__btn_london");
  const NewYork = document.querySelector(".cities__btn_ny");
  const Moscow = document.querySelector(".cities__btn_moscow");
  const Tokyo = document.querySelector(".cities__btn_tokyo");
  const zones = document.querySelectorAll(".cities__btn");

  const time = new WorldTime(
    ".clock__hours",
    ".clock__minutes",
    ".clock__seconds",
    ".loading"
  );

  NewYork.addEventListener("click", ({ target }) => {
    time.changeTimezone("en-US", "America/New_York", { zones, target });
  });

  Moscow.addEventListener("click", ({ target }) => {
    time.changeTimezone("ru-RU", "Europe/Moscow", { zones, target });
  });

  Tokyo.addEventListener("click", ({ target }) => {
    time.changeTimezone("jp-JP", "Asia/Tokyo", { zones, target });
  });

  London.addEventListener("click", ({ target }) => {
    time.changeTimezone("en-GB", "Europe/London", { zones, target });
  });

  time.render();
}
