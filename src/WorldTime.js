export class WorldTime {
  constructor($hours, $minutes, $seconds, $loading) {
    this.$hours = document.querySelector($hours);
    this.$minutes = document.querySelector($minutes);
    this.$seconds = document.querySelector($seconds);
    this.$loading = document.querySelector($loading);

    this.region = "ru-RU";
    this.city = "Europe/Moscow";

    this.update();
  }

  getTimezone(region, city) {
    this.region = region;
    this.city = city;

    let date = new Date();
    let time = date
      .toLocaleTimeString(region, {
        timeZone: city,
        hour12: false,
      })
      .split(":");

    return time;
  }

  changeTimezone = (region, city, classOptions) => {
    this.clear();
    this.getTimezone(region, city);
    this.#addActiveClass(classOptions);
    this.update();
  };

  #addActiveClass = ({ zones, target }) => {
    zones.forEach((element) => {
      element.classList.remove("active");
    });

    target.classList.add("active");
  };

  update() {
    this.interval = setInterval(() => {
      this.render();
    }, 1000);
  }

  clear() {
    clearInterval(this.interval);

    this.$loading.style.display = "block";
    this.$hours.style.display = "none";
    this.$minutes.style.display = "none";
    this.$seconds.style.display = "none";
  }

  render() {
    const [h, m, s] = this.getTimezone(this.region, this.city);

    this.$hours.textContent = h;
    this.$minutes.textContent = m;
    this.$seconds.textContent = s;

    this.$loading.style.display = "none";
    this.$hours.style.display = "block";
    this.$minutes.style.display = "block";
    this.$seconds.style.display = "block";
  }
}
