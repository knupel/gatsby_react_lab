import React from "react";
import Layout from "./../../components/struct/layout";
import NewTabLink from "./../../components/new_tab_link";
// add this external link in the future

function SectionCode() {
  return (
    <div>
      <h3>About code</h3>
      <NewTabLink
        href="https://thecodingtrain.com/"
        title="Tchoutchou avec le chef de train Danial Shiffmann"
      />
      <NewTabLink
        href="https://overreacted.io/"
        title="Dan Abramov un blog de codeur sérieux, oui sérieux"
      />
      <NewTabLink
        href="https://unsplash.com/developers"
        title="Api pour d'images libres de droit"
      />
      <NewTabLink
        href="https://www.cssfontstack.com/"
        title="font stack need to good use of font in the internet world"
      />
      <NewTabLink
        href="https://remixicon.com/"
        title="free icon to design your web site or anything what you want"
      />
      <NewTabLink
        href="https://lodev.org/cgtutor/"
        title="very cool code to computer Graphics by Lode Vandevenne"
      />
      <NewTabLink
        href="https://www.werockyourweb.com/html-escape-characters/"
        title="escape char in html"
      />
      <NewTabLink
        href="http://keycode.info/"
        title="find the id of each key on your keybord: keycode.info"
      />
      <NewTabLink href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#D%C3%A9composition_d'un_tableau"
      title="french text about destruring array in javascript"
      />
      <NewTabLink href="https://putaindecode.io/" title="Blog de code, sur le putain de code"/>
      <NewTabLink href="https://www.i18next.com/" title="Module et plugin pour traduire des sites... à explorer ou pas"/>
      <NewTabLink href="https://github.com/Kristories/awesome-guidelines"
                  title="coding guide by language and companies"
      />
      <NewTabLink href="https://lincnil.github.io/Guide-RGPD-du-developpeur/"
                  title="RGPD, guide pour les développeurs"
      />
      <NewTabLink href="https://www.cnil.fr/fr/outil-pia-telechargez-et-installez-le-logiciel-de-la-cnil"
                  title="AIPD, PIA logiciel développé par la CNIL pour tester le RGPD / AIPD"
      />
      <NewTabLink href="https://github.com/markdown-templates/markdown-emojis"
                  title="Emoji to add in your github markdown"
      />
      
    </div>
  );
}

function SectionExercise() {
  return (
    <div>
      <h3>Exercise web project</h3>
      <NewTabLink
        href="https://stanflix.netlify.app/"
        title="the Meilleur Netflix of the Monde... HAHAHAHA"
      />
    </div>
  );
}

function SectionFun() {
  return (
    <div>
      <h3>About fun</h3>
      <NewTabLink href="https://archive.org/" title="Internet archive" />
      <NewTabLink
        href="https://www.archive-arn.fr/"
        title="Architecture vernaculaire"
      />
      <NewTabLink href="https://atlasrn.fr/" title="Atlas vernaculaire" />
      <NewTabLink href="http://getemoji.com/" title="dictionnaire d'emoji" />
      <NewTabLink
        href="http://designexplainsscience.com/"
        title="Science et design"
      />
      <NewTabLink
        href="https://cryptoart.io/artists"
        title="List of Crypto artists"
      />
      <NewTabLink
        href="https://www.universaleverything.com/"
        title="Walking artist and more"
      />
    </div>
  );
}

export default function LinkUtils() {
  return (
    <div>
      <Layout title="EXTERNAL UTILS LINK"></Layout>

      <SectionExercise />
      <br />
      <SectionCode />
      <br />
      <SectionFun />
    </div>
  );
}

