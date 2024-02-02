let bar = document.querySelector(".bar");
bar.addEventListener("click",()=>{
    const hamberBar = document.querySelector(".hamberBar");
    // const mainCnt = querySelector(".mainCnt");

    // mainCnt.style.width="100vw";
    // console.log(hamberBar);
    // // hamberBar.style.backgroundColor = "green";
    // bar.style.display = "none";
    // bar.innerHTML = hamberBar.innerHTML;
    hamberBar.style.width = "50vw";
    // hamberBar.style.border = "none";
    if (hamberBar.style.display === "block") {
        hamberBar.style.display = "none";
      } else {
        hamberBar.style.display = "block";
      }
})