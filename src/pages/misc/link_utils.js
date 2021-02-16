import React from "react"
import Layout from "../../components/layout"
// add this external link in the future

function ExLink(props) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={props.href}>
        {props.title}
      </a>
      <br />
    </>
  )
}

function SectionCode() {
  return (
    <div>
      <h3>About code</h3>
      <ExLink
        href="https://thecodingtrain.com/"
        title="Tchoutchou avec le chef de train Danial Shiffmann"
      />
      <ExLink
        href="https://overreacted.io/"
        title="Dan Abramov un blog de codeur sérieux, oui sérieux"
      />
      <ExLink
        href="https://unsplash.com/developers"
        title="Api pour d'images libres de droit"
      />
      <ExLink
        href="https://www.cssfontstack.com/"
        title="font stack need to good use of font in the internet world"
      />
      <ExLink
        href="https://remixicon.com/"
        title="free icon to design your web site or anything what you want"
      />
      <ExLink
        href="https://lodev.org/cgtutor/"
        title="very cool code to computer Graphics by Lode Vandevenne"
      />
      <ExLink
        href="https://stanflix.netlify.app/"
        title="the Meilleur Netflix of the Monde... HAHAHAHA"
      />
    </div>
  )
}

function SectionFun() {
  return (
    <div>
      <h3>About fun</h3>
      <ExLink href="https://archive.org/" title="Internet archive" />
      <ExLink
        href="https://www.archive-arn.fr/"
        title="Architecture vernaculaire"
      />
      <ExLink href="https://atlasrn.fr/" title="Atlas vernaculaire" />
      <ExLink href="http://getemoji.com/" title="dictionnaire d'emoji" />
      <ExLink
        href="http://designexplainsscience.com/"
        title="Science et design"
      />
    </div>
  )
}

export default function () {
  return (
    <div>
      <Layout title="EXTERNAL UTILS LINK"></Layout>
      <SectionCode />
      <br />
      <SectionFun />
    </div>
  )
}
