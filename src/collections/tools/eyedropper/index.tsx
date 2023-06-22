const Eyedropper = () => {
  const handleClick = () => {
    // document.write("hello")
    // console.log("hello")

    const c = new (window as any).EyeDropper();
    let a = "red";
    c.open()
      .then((e: any) => {
        console.log(e.sRGBHex);
        a = e.sRGBHex;
      })
      .then(() => {
        document.body.style.backgroundColor = a;
        const div: any = document.createElement("div");
        const colorBox: any = document.createElement("p");
        colorBox.classList.append = "color-box";
        colorBox.backgroundColor = a;
        const colorName = document.createElement("p");
        colorName.innerText = a;
        div.append(colorName);
        div.append(colorName);
        document.querySelector("h1")?.append(div);
      });
    console.log(a);
    //   body.style.backgroundColor(a)
  };

  return (
    <div>
      <button onClick={handleClick}>Eyedropper</button>
    </div>
  );
};

export default Eyedropper;
