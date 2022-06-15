const defaultColor = {
  colorBlack: "#282727",
  colorWhite: "#f2f2f2",
};

const font = "Signika";

const dark = {
  body: "#000000",
  text: "#ffffff",
  button: { body: "#effeee", text: "#000" },
  link: { text: "#eee" },
  overlay: "#26000076",
  defaultColor,
  font,
};

const light = {
  body: "#ffffff",
  overlay: "#595959c5",
  text: "#000000",
  button: { body: "#000000", text: "#ffffff" },
  link: { text: "#aaa" },
  defaultColor,
  font,
};

const colors = { dark, light };

const themes = { colors };
export default themes;
