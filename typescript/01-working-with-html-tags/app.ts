let safari: boolean = true;

// const myMessage: string = "Hello World";
let container = document.getElementById('container')
container.innerHTML = `
<div class=${safari ? "safari-style" : "uni-browser"}>
    <i>fe</i>
    <div>
      <p>${myMessage}</p>
    </div>
</div>
`