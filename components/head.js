import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = (props) => (
  <NextHead>
    <meta charset='UTF-8' />
    <title>{props.title}</title>
    <meta name='description' content={props.description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' sizes='192x192' href='/static/img/192x192.png' />
    <link rel='apple-touch-icon' href='/static/touch-icon.png' />
    <link rel='mask-icon' href='/static/favicon-mask.svg' color='#49B882' />
    <link rel='icon' href='/static/favicon.ico' />
    <meta property='og:url' content={props.url} />
    <meta property='og:title' content={props.title} />
    <meta property='og:description' content={props.description} />
    <meta name='twitter:site' content={props.url} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={props.ogImage} />
    <meta property='og:image' content={props.ogImage} />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />
    <link rel='manifest' href='/static/manifest.json' />
    <meta name='theme-color' content='#ABB7B7' />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

Head.defaultProps = {
  description: '',
  url: '',
  ogImage: '',
  title: ''
}

export default Head
