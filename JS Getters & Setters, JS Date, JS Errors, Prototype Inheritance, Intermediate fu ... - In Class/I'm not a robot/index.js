let image = [];

for (let i = 0; i < 5; i++) {

  let t = document.createElement("IMG");

  t.setAttribute("data-ns-test", `img${i + 1}`);

  t.width = 100;

  t.height = 100;

  t.onclick = (e) => captchaClick(e);

  t.src = `images/${i + 1}.jpg`;

  image.push(t);

}

let temp = Math.floor(Math.random() * 5);

let t = document.createElement("IMG");

t.setAttribute("data-ns-test", `img${temp + 1}`);

t.width = 100;

t.height = 100;

t.onclick = (e) => captchaClick(e);

t.src = `images/${temp + 1}.jpg`;

image.push(t);

image.sort(() => Math.random() - 0.5);

for (let i = 0; i < 6; i++) {

  document.getElementById("main").appendChild(image[i]);

}

let captcha = [];

function clearCaptcha() {

  // console.log("Clearing captcha");

  for (let i = 0; i < 6; i++) {

    image[i].onclick = (e) => captchaClick(e);

  }

  captcha = [];

  try {

    document.getElementById("para").remove();

  }

  catch (e) {

  }

  try {

    document.getElementById("btn").remove();

  }

  catch (e) {

  }

  try {

    document.getElementById("reset").remove();

  }

  catch (e) {

  }

}

function captchaClick(e) {

  console.log(e.target.attributes["data-ns-test"].nodeValue)

  captcha.push(e.target.attributes["data-ns-test"].nodeValue);

  e.target.onclick = () => { };

  // console.log(captcha);

  if (captcha.length === 1) {

    let p = document.createElement("button");

    p.id = "reset";

    p.innerHTML = "Reset";

    p.onclick = () => {

      clearCaptcha();

    }

    document.getElementById("main").appendChild(p);

  }

  if (captcha.length === 2) {

    let t = document.createElement("button");

    t.id = "btn";

    t.innerHTML = "Verify";

    t.onclick = () => {

      captchaVerify();

    }

    document.getElementById("main").appendChild(t);

  }

  else if (captcha.length > 2) {

    try {

      document.getElementById("btn").remove();

    }

    catch (e) {

    }

  }

  try {

    document.getElementById("para").remove();

  }

  catch (e) {

  }

}

function captchaVerify() {

  if (captcha.length === 2 && captcha[0] === captcha[1]) {

    let t = document.createElement("P");

    t.innerHTML = "You are a human. Congratulations!";

    t.id = "para";

    document.getElementById("main").appendChild(t);

  }

  else {

    let t = document.createElement("P");

    t.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";

    t.id = "para";

    document.getElementById("main").appendChild(t);

  }

  document.getElementById("btn").remove();

}
