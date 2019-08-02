function scrollDown(){
    // let main = document.getElementById("main1");
    let smallMain = document.getElementById("main");
    // main.scrollTop = main.scrollHeight;
    // console.log(main.scrollHeight)
    window.scroll({
        top: smallMain.scrollHeight+230, 
        left: 0, 
        behavior: 'smooth'
      });
}