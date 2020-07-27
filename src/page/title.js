import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1>
          Rémi <span class="highlight">Delfosse</span>
        </h1>
        <ul class="tlt">
          <li>Développeur Web Full Stack</li>
          <li>PHP / Symfony</li>
          <li>Javascript / Jquery</li>
          <li>Html / css</li>
          <li>React / Angular</li>
        </ul>
        <p>
          Développeur web sur bordeaux spécialisé sur le framework "Symfony", je
          suis disponible pour un CDD / CDI sur Bordeaux.
          <br />
          Formation en développement web et mobile effectué à la{" "}
          <a href="https://www.lapiscine.pro/formations/developpeur/">
            piscine de Mérignac
          </a>
        </p>
      </div>
    );
  }
}

export default Title;
