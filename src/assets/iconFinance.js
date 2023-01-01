const rootFinance = document.documentElement;
const dropdownListFinance = document.getElementById('dropdown-list-finance');
const floatingIconFinance = document.getElementById('floating-icon-finance');

const iconsFinance = {
  paypal:
        "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z",
  credit:
        "M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z"
  };

const iconTemplateFinance = (path) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 520">
      <path d="${path}" />
    </svg>
  `;
};

dropdownListFinance.addEventListener("mouseover", (e) => {
  const translateValue = e.target.dataset.translateValue;
  rootFinance.style.setProperty("--translate-value-finance", translateValue);
});

dropdownListFinance.addEventListener("mousemove", (e) => {
  const iconSize = rootFinance.style.getPropertyValue("--floating-icon-size-finance") || 0;
  const x = e.clientX - dropdownListFinance.getBoundingClientRect().x;
  const y = e.clientY - dropdownListFinance.getBoundingClientRect().y;
  const targetText = e.target.innerText.toLowerCase().trim();
  const hoverItemText = iconsFinance[targetText];

  floatingIconFinance.innerHTML = iconTemplateFinance(hoverItemText);
  rootFinance.style.setProperty("--floating-icon-left-finance", x - iconSize / 2 + "px");
  rootFinance.style.setProperty("--floating-icon-top-finance", y - iconSize / 2 + "px");
});