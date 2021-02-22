const main$$ = document.querySelector("main");

let news = [];

const loadInfo = async () => {
  const res = await fetch("http://localhost:3000/news");
  news = await res.json();
};

const createLayout = () => {
  createMainPiece();
  createSubPieces();
  createAdditionalPieces();
};

const createMainPiece = () => {
  const currentNews = news[news.length - 1];
  const cardImage$$ = document.createElement("div");
  cardImage$$.classList.add("news", "mainPiece");
  cardImage$$.innerHTML = `<img src="${currentNews.thumbnail}" alt="${currentNews.headline}"><h1>${currentNews.headline}</h1>`;
  cardImage$$.addEventListener("click", () => {
    showNewsPiece(currentNews);
  });
  main$$.appendChild(cardImage$$);
};

const createSubPieces = () => {
  const subPieces$$ = document.createElement("div");
  subPieces$$.classList.add("subPieces");
  for (let i = 0; i < 2; i++) {
    const element = news[news.length - 2 - i];
    const subPiece$$ = document.createElement("div");
    subPiece$$.classList.add("news", "subPiece");
    subPiece$$.innerHTML = `<img src="${element.thumbnail}" alt="${element.headline}"><h2>${element.headline}</h2>`;
    subPiece$$.addEventListener("click", () => {
      showNewsPiece(element);
    });
    subPieces$$.appendChild(subPiece$$);
  }
  main$$.appendChild(subPieces$$);
};

const createAdditionalPieces = () => {
  const additionalPieces$$ = document.createElement("div");
  additionalPieces$$.classList.add("additionalPieces");
  for (let i = news.length - 4; i >= 0; i--) {
    const element = news[i];
    const additionalPiece$$ = document.createElement("div");
    additionalPiece$$.classList.add("news", "additionalPiece");
    additionalPiece$$.innerHTML = `<img src="${element.thumbnail}" alt="${element.headline}"><h2>${element.headline}</h2>`;
    additionalPiece$$.addEventListener("click", () => {
      showNewsPiece(element);
    });
    additionalPieces$$.appendChild(additionalPiece$$);
  }
  main$$.appendChild(additionalPieces$$);
};

const showNewsPiece = (newsPiece) => {
  const index = news.indexOf(newsPiece);
  const newsPiece$$ = document.createElement("div");
  newsPiece$$.classList.add("newsPiece");

  const closePiece$$ = document.createElement("h1");
  closePiece$$.textContent = "X";
  closePiece$$.classList.add("closePiece");
  closePiece$$.addEventListener("click", () => {
    newsPiece$$.remove();
  });
  newsPiece$$.appendChild(closePiece$$);

  const headline$$ = document.createElement("h1");
  headline$$.textContent = newsPiece.headline;
  newsPiece$$.appendChild(headline$$);

  const subtitle$$ = document.createElement("h5");
  subtitle$$.textContent = newsPiece.subtitle;
  newsPiece$$.appendChild(subtitle$$);

  if (!newsPiece.content.includes("iframe")) {
    const thumbnail$$ = document.createElement("img");
    thumbnail$$.src = newsPiece.thumbnail;
    newsPiece$$.appendChild(thumbnail$$);

    const author$$ = document.createElement("h6");
    author$$.textContent = `Por ${newsPiece.author}`;
    newsPiece$$.appendChild(author$$);
  }

  const content$$ = document.createElement("p");
  content$$.innerHTML = newsPiece.content;
  newsPiece$$.appendChild(content$$);

  const tags$$ = document.createElement("h6");
  tags$$.textContent = `Etiquetas: ${[...newsPiece.tags]}`;
  newsPiece$$.appendChild(tags$$);

  const commentsText$$ = document.createElement("h2");
  commentsText$$.textContent = "Comentarios";
  newsPiece$$.appendChild(commentsText$$);

  const commentSection$$ = document.createElement("div");
  newsPiece$$.appendChild(commentSection$$);

  displayComments(index, commentSection$$);

  document.body.appendChild(newsPiece$$);
};

const displayComments = async (index, commentSection$$) => {
  const res = await fetch("http://localhost:3000/comments");
  const comments = await res.json();
  const currentComments = await comments[index];

  const userInput$$ = document.createElement("input");
  userInput$$.setAttribute("placeholder", "Nombre");
  commentSection$$.appendChild(userInput$$);

  commentSection$$.innerHTML += "<br>";

  const commentInput$$ = document.createElement("input");
  commentInput$$.setAttribute("placeholder", "Comentario");
  commentSection$$.appendChild(commentInput$$);

  const commentButton$$ = document.createElement("button");
  commentButton$$.textContent = "Enviar comentario";
  commentButton$$.addEventListener("click", () => {
    sendComment(
      userInput$$.value,
      commentInput$$.value,
      currentComments,
      index
    );
  });
  commentSection$$.appendChild(commentButton$$);

  for (let i = currentComments.length - 1; i >= 0; i--) {
    const comment$$ = document.createElement("p");
    comment$$.innerHTML = `<em>Por ${currentComments[i].user}, ${currentComments[i].date}</em><br>${currentComments[i].comment}<hr>`;
    commentSection$$.appendChild(comment$$);
  }
};

const sendComment = (user, comment, index) => {
  if (user == "") user = "Anónimo";
  if (comment != "") {
    const json = JSON.parse(
      `{user: ${user}, comment: ${comment}, date: ${new Date()}, rating: 0}`
    );
    console.log(json);
  }
};

window.onload = async () => {
  await loadInfo();
  createLayout();
};
