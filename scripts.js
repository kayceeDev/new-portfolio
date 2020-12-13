document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#theme-options-wrapper");
  let root = document.documentElement;
  let themeColor= window.localStorage.getItem("themeColor")
  const lightMode="light-mode";
  const darkMode="blue-mode";
  if(!themeColor){ 
    setWhiteMode()
    console.log("hjfkhjlhjlk")
  }
  else{
    themeColor=== lightMode ? setWhiteMode(): setDarkMode();
  };

  function setWhiteMode(){
      root.style.setProperty("--mainColor", "#eaeaea");
      root.style.setProperty("--secondaryColor", "#fff");
      root.style.setProperty("--secondaryText", "#4b5156");
      root.style.setProperty("--borderColor", "#c1c1c1");
      root.style.setProperty("--mainText", "#000");
      root.style.setProperty("--themeDotBorder", "#24292e");
      root.style.setProperty("--previewBg", "rgb(251, 249, 243, 0.8)");
      root.style.setProperty("--previewShadow", "#f0ead6");
      root.style.setProperty("--buttonColor", "#000");
  }

  function setDarkMode(){
    root.style.setProperty("--mainColor", "#15202b");
      root.style.setProperty("--secondaryColor", "#192734");
      root.style.setProperty("--secondaryText", "#eeeeee");
      root.style.setProperty("--borderColor", "#164d56");
      root.style.setProperty("--mainText", "#fff");
      root.style.setProperty("--themeDotBorder", "#fff");
      root.style.setProperty("--previewBg", "rgb(25, 39, 52, 0.8)");
      root.style.setProperty("--previewShadow", "#111921");
      root.style.setProperty("--buttonColor", "#17a2b8");
      return;
  }
  button.addEventListener("click", function (e) {
    if (e.target.id === darkMode) {
      setDarkMode()
      window.localStorage.setItem("themeColor",darkMode)
    }
    if (e.target.id == "light-mode") {
       setWhiteMode()
      window.localStorage.setItem("themeColor",lightMode)
    }
  });

  let leftCol = document.querySelector(".left-column");
  let rightCol = document.querySelector(".right-column");
  let tab = document.querySelector(".intro-wrapper");
  const minimize = document.querySelector(".dots-wrapper");

  minimize.addEventListener("click", function (e) {
    if (e.target.id === "dot-2") {
      leftCol.classList.toggle("hide-display");
      rightCol.classList.toggle("hide-display");
    }
    if (e.target.id === "dot-1") {
      // tab.classList.toggle("hide-display");
    window.close()
    }
  });
});
