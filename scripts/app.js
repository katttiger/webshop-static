/* Button toggles menu*/
const toggleMenuButtonOnTabletDevices = () => {
  let x = document.getElementById("links-tablet");

  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const toggleMenuButtonOnMobileDevices = () => {
  let x = document.getElementById("links-mobile");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
