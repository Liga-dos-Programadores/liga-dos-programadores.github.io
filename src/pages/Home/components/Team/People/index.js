import React from "react";

import * as S from "./styled"

export default function People() {
  const people = [
    {
      name: "Álvaro Filho",
      role: "Back-End",
      social: {
        github: "alvarofilho",
        twitter: "alvarofilh0"
      }
    },

    {
      name: "Everthon",
      role: "Front-end",
      social: {
          github: "Everthon-Silva",
          //twitter: ,
          // linkedin: "",
          // instagram: ""
      }
    },

    {
      name: "Gabe",
      role: "Back-end",
      social: {
          github: "ImGabe",
          twitter: "ImGabeDev",
          // linkedin: "",
          // instagram: ""
      }
    },

    {
      name: "Mari",
      role: "Front-end",
      social: {
          github: "marianamorais",
          twitter: "marimorais0",
          instagram: "marimorais.exe"
          // linkedin: "",
          // instagram: ""
      }
    },

    {
      name: "Cap",
      role: "Back-end",
      social: {
          github: "ratsclub"
      }
    },

    {
      name: "Bee",
      role: "Back-end",
      social: {
          github: "beescuit",
          twitter: "beescoitu",         
      }
    },
  ]
  
  const links = {
    github: (user) => `https://github.com/${user}`,
    linkedin: (user) => `https://linkedin.com/in/${user}`,
    twitter: (user) => `https://twitter.com/${user}`,
    instagram: (user) => `https://instagram.com/${user}`,
  };


  function createCard(people) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = createCardImage(people);
    const cardContent = createCardContent(people);

    card.append(cardImage, cardContent);
    return card;
  }

function createCardImage({social}) {
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");

    const image = document.createElement("img");
    image.src = `${links["github"](social.github)}.png`
    
    cardImage.append(image);

    return cardImage;
}

function createCardContent({name, role, social}) {
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("title-card");
    cardTitle.innerHTML = name;

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const roleText = document.createElement("p");
    roleText.classList.add("text--medium");
    roleText.innerHTML = role;

    const cardSocial = createCardSocial(social);

    cardInfo.append(roleText, cardSocial);
    cardContent.append(cardTitle, cardInfo);
    
    return cardContent;
}

function createCardSocial(social) {
    const cardSocial = document.createElement("div");
    cardSocial.classList.add("card-social");

    Object.keys(social).forEach((key) => {
        const anchor = document.createElement("a");
        anchor.href = links[key](social[key]);

        const icon = document.createElement("i");
        icon.classList.add("fab", `fa-${key}`);

        anchor.append(icon);
        cardSocial.append(anchor);
    });

    return cardSocial;
}

people.forEach((people) => {
    const card = createCard(people);
    cardsElement.append(card);
})

  return (
    <>
    </>
  );
}