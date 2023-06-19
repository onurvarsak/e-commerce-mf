import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart </div>`;

  // document.querySelector("#dev-cart").innerHTML = cartText;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  // Assuming our container doesnt have an element with id "dev-cart"
  if (el) {
    // We are probably running in isolation.
    mount(el);
  }
}

export { mount };
