import React, { Children, useMemo } from "react";
import './featuredPosts.scss'

const FeaturedPosts = () => {
  return (
    <div className="featuredPosts" id="articles">
      <section>
        <h2>Featured Articles</h2>
        <div className="about-article">
          <div className="img-holder"> 
             <img width={400} src="https://mlqu8p9ym7uk.i.optimole.com/w:1280/h:720/q:mauto/ig:avif/https://devtable.co/wp-content/uploads/2024/05/top-wordpress-plugins-for-your-website.png"/>
          </div>
         
          <div>
            <h2><a href="https://devtable.co/top-31-wordpress-plugins/">Top 31 WordPress Plugins for your website</a></h2>
            <p>Plugins play a crucial role in extending the capabilities of WordPress websites beyond their core functionality.</p>
            <a href="https://devtable.co/top-31-wordpress-plugins/">Read more → </a>
          </div>
        </div>
        <div className="about-article">
          <img width={400} src="https://mlqu8p9ym7uk.i.optimole.com/w:1400/h:840/q:mauto/ig:avif/https://devtable.co/wp-content/uploads/2024/02/lp-examples.jpg"/>
          <div>
            <h2><a href="https://devtable.co/best-landing-pages-funnels/">15 Tips to High Converting Landing Pages for your Campaigns</a></h2>
            <p>Where first impressions matter the most, the design and functionality of landing pages play a pivotal role in converting visitors into customers and leads!</p>
            <a href="https://devtable.co/best-landing-pages-funnels/">Read more → </a>
          </div>
        </div>
        <div className="about-article">
          <img width={400} src="https://mlqu8p9ym7uk.i.optimole.com/w:1536/h:1024/q:mauto/ig:avif/https://devtable.co/wp-content/uploads/2023/12/ai-seo.jpg"/>
          <div>
            <h2><a href="https://devtable.co/ai-powered-seo/">AI-Powered SEO in 2024: Strategies for Success</a></h2>
            <p>AI's role in SEO extends beyond mere automation; it offers actionable insights and predictive analytics that traditional methods struggle to provide. As we navigate 2024, integrating AI into your SEO strategy is not just an option; it's a strategic imperative.</p>
            <a href="https://devtable.co/ai-powered-seo/">Read more → </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FeaturedPosts;
