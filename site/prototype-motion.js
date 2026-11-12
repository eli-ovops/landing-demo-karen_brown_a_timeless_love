(() => {
  const keys = ["a", "b", "c"];
  const labels = { a: "A - Invitation", b: "B - The Vow Room", c: "C - Place, Then Promise" };
  const directions = [...document.querySelectorAll("[data-direction]")];
  const label = document.querySelector("[data-direction-label]");
  const getKey = () => new URLSearchParams(window.location.search).get("variant") || "a";
  let active = keys.includes(getKey()) ? getKey() : "a";

  const render = (key, writeUrl = true) => {
    active = key;
    directions.forEach((section) => {
      const selected = section.dataset.direction === key;
      section.hidden = !selected;
      section.setAttribute("aria-hidden", String(!selected));
      if (selected) {
        section.classList.remove("is-active");
        requestAnimationFrame(() => section.classList.add("is-active"));
      }
    });
    label.textContent = labels[key];
    if (writeUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("variant", key);
      window.history.replaceState({}, "", url);
    }
  };

  const cycle = (offset) => render(keys[(keys.indexOf(active) + offset + keys.length) % keys.length]);
  document.querySelector("[data-action=previous]").addEventListener("click", () => cycle(-1));
  document.querySelector("[data-action=next]").addEventListener("click", () => cycle(1));
  window.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(tag) || document.activeElement?.isContentEditable) return;
    if (event.key === "ArrowLeft") cycle(-1);
    if (event.key === "ArrowRight") cycle(1);
  });
  render(active, false);
})();
