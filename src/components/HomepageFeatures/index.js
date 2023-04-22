import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Powered by Next.js</Translate>,
    Svg: require('@site/static/img/nextjs.svg').default,
    description: <Translate>Built with Next.js, leveraging the power of both SSG and SSR to deliver a fast and dynamic personal blogging experience.</Translate>,
    isSmall: false,
  },  
  {
    title: <Translate>Integrate with GPT-3.5</Translate>,
    Svg: require('@site/static/img/chatgpt.svg').default,
    description: <Translate>Integrate GPT-3.5 Turbo API to summarize your articles. Elevate your blog to a new level of modernity and sophistication.</Translate>,
    isSmall: true,
  },  
  {
    title: <Translate>Comment Security with Cloudflare Turnstile</Translate>,
    Svg: require('@site/static/img/cloudflare.svg').default,
    description: <Translate>Enhance your blog's comment section with Cloudflare Turnstile integration. Protect your site from spam and abuse.</Translate>,
    isSmall: false,
  }  
];

function Feature({Svg, title, description,isSmall}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={isSmall ? styles.featureSvgSmall : styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
