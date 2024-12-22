import Image from "next/image";

export default function Home() {
  return (
<>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJGBRB"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager (noscript) */}
  <div className="t3-wrapper">
    {" "}
    {/* Need this wrapper for off-canvas menu. Remove if you don't use of-canvas */}
    {/* HEADER */}
    <header id="t3-header" className="t3-header">
      <div className="container">
        <div className="row">
          {/* LOGO */}
          <div className="col-xs-12 col-sm-8 logo">
            <div className="logo-image">
              <a href="en/index.html" title="Brahma Kumaris">
                <img
                  className="logo-img"
                  src="pics/logo.webp"
                  alt="Brahma Kumaris"
                />
                <span>Brahma Kumaris</span>
              </a>
              <small className="site-slogan" />
            </div>
          </div>
          {/* //LOGO */}
          <div className="col-xs-12 col-sm-4">
            {/* HEAD SEARCH */}
 
            {/* //HEAD SEARCH */}
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".t3-navbar-collapse"
            >
              <i className="fa fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </header>
    {/* //HEADER */}
    {/* MAIN NAVIGATION */}
    <nav id="t3-mainnav" className="wrap navbar navbar-default t3-mainnav">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".t3-navbar-collapse"
          >
            <i className="fa fa-bars" />
          </button>
        </div>
        <div className="t3-navbar-collapse navbar-collapse collapse" />
        <div className="t3-navbar navbar-collapse collapse">
          {/*jdoc:include type="t3bootstrap" name="en-menu" /*/}
          {/*jdoc:include type="t3bootstrap" name="home-0" menutype="mainmenu" /*/}
          <div className="subnav">
            <ul className="nav nav-pills menu navbar-nav">
              <li className="item-101 deeper dropdown parent">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  href="en/index.html#"
                >
                  Meditation <b className="caret" />
                </a>
                <ul
                  className="dropdown-menu"
                  data-dropdown-in="bounceIn"
                  data-dropdown-out="bounceOut"
                >
                  <li className="item-105">
                    <a href="en/meditation/raja-yoga-meditation.html">
                      What is Raja Yoga Meditation?
                    </a>
                  </li>
                  <li className="item-109">
                    <a href="en/meditation/how-to-meditate.html">
                      How to Meditate
                    </a>
                  </li>
                  <li className="item-110">
                    <a href="en/meditation/where-to-meditate.html">
                      Where to Meditate
                    </a>
                  </li>
                  <li className="item-111">
                    <a href="en/meditation/time-for-meditation.html">
                      Time for Meditation
                    </a>
                  </li>
                  <li className="item-112">
                    <a href="en/meditation/who-uses-ry-meditation.html">
                      Who uses Raja Yoga Meditation
                    </a>
                  </li>
                  <li className="item-113">
                    <a href="en/meditation/retreat-centres.html">
                      Retreat Centres
                    </a>
                  </li>
                  <li className="item-149">
                    <a href="en/meditation/experience-meditation.html">
                      Experience Meditation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="item-102 deeper dropdown parent">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  href="en/index.html#"
                >
                  Wisdom <b className="caret" />
                </a>
                <ul
                  className="dropdown-menu"
                  data-dropdown-in="bounceIn"
                  data-dropdown-out="bounceOut"
                >
                  <li className="item-106">
                    <a href="wisdom/raja-yoga.html">Experience Raja Yoga</a>
                  </li>
                  <li className="item-114">
                    <a href="wisdom/soul.html">Soul</a>
                  </li>
                  <li className="item-115 parent">
                    <a href="wisdom/god-knows.html">God Knows</a>
                  </li>
                  <li className="item-116 parent">
                    <a href="wisdom/tree-in-time.html">Tree in Time</a>
                  </li>
                  <li className="item-117">
                    <a href="en/wisdom/wheel-of-life.html">Wheel of Life</a>
                  </li>
                  <li className="item-118">
                    <a href="en/wisdom/karma.html">Karma</a>
                  </li>
                  <li className="item-1335">
                    <a href="en/wisdom/a-narrative-of-love.html">
                      A narrative of love
                    </a>
                  </li>
                  <li className="item-1286 parent">
                    <a href="wisdom/essential-spirituality/a-spiritual-perspective.html">
                      Essential Spirituality
                    </a>
                  </li>
                  <li className="item-119 parent">
                    <a href="en/wisdom/healthy-living.1.html">Healthy Living</a>
                  </li>
                  <li className="item-120 parent">
                    <a href="wisdom/spiritual-tools.html">Spiritual Tools</a>
                  </li>
                  <li className="item-440">
                    <a href="en/wisdom/courses-we-offer.html">
                      Courses We Offer
                    </a>
                  </li>
                  <li className="item-164">
                    <a href="wisdom/online-talks.html">Online Talks</a>
                  </li>
                </ul>
              </li>
              <li className="item-103 deeper dropdown parent">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  href="en/index.html#"
                >
                  Hope <b className="caret" />
                </a>
                <ul
                  className="dropdown-menu"
                  data-dropdown-in="bounceIn"
                  data-dropdown-out="bounceOut"
                >
                  <li className="item-107 parent">
                    <a href="en/hope/environment/a-different-consciousness.html">
                      Environment
                    </a>
                  </li>
                  <li className="item-1165 parent">
                    <a href="hope/renewable-energy/from-a-spiritual-vision-to-local-action.html">
                      Renewable Energy
                    </a>
                  </li>
                  <li className="item-121 parent">
                    <a href="en/hope/leadership/call-of-the-time.html">
                      Leadership
                    </a>
                  </li>
                  <li className="item-122 parent">
                    <a href="en/hope/women-men/empowering-women.html">
                      Women and Men
                    </a>
                  </li>
                  <li className="item-123 parent">
                    <a href="hope/youth/young-leaders.html">Youth</a>
                  </li>
                  <li className="item-179">
                    <a href="hope/glimpses-of-hope.html">Glimpses of Hope</a>
                  </li>
                </ul>
              </li>
              <li className="item-104 deeper dropdown parent">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  href="en/index.html#"
                >
                  Discovery <b className="caret" />
                </a>
                <ul
                  className="dropdown-menu"
                  data-dropdown-in="bounceIn"
                  data-dropdown-out="bounceOut"
                >
                  <li className="item-108 parent">
                    <a href="discovery/inspirations-dadi-janki.html">
                      Inspirations from Dadi Janki
                    </a>
                  </li>
                  <li className="item-124 parent">
                    <a href="en/discovery/the-mindful-kitchen.html">
                      The Mindful Kitchen
                    </a>
                  </li>
                  <li className="item-509 parent">
                    <a href="discovery/articles-blog/articles.html">Articles</a>
                  </li>
                  <li className="item-127">
                    <a href="en/discovery/virtuescope.html">Virtuescope</a>
                  </li>
                  <li className="item-129">
                    <a href="discovery/events-near-you.html">Events Near You</a>
                  </li>
                  <li className="item-130">
                    <a href="en/discovery/ebooks.html">Ebooks</a>
                  </li>
                  <li className="item-131">
                    <a href="discovery/bookshop.html">Bookshop</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="subnav navbar-right">
            <ul className="nav nav-pills menu navbar-nav">
              <li className="item-140 current active">
                <a href="en/index.html">Home</a>
              </li>
              <li className="item-141 deeper dropdown parent">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  href="en/index.html#"
                >
                  About us <b className="caret" />
                </a>
                <ul
                  className="dropdown-menu"
                  data-dropdown-in="bounceIn"
                  data-dropdown-out="bounceOut"
                >
                  <li className="item-144">
                    <a href="en/about-us/introduction.html">Introduction</a>
                  </li>
                  <li className="item-145">
                    <a href="en/about-us/the-students.html">The Students</a>
                  </li>
                  <li className="item-146">
                    <a href="en/about-us/experiences-we-offer.html">
                      Experiences We Offer
                    </a>
                  </li>
                  <li className="item-147 parent">
                    <a href="en/about-us/the-brahma-kumaris-story/brahma-kumaris-world-spiritual-university.html">
                      The Brahma Kumaris Story
                    </a>
                  </li>
                  <li className="item-148 parent">
                    <a href="en/about-us/united-nations.html">BKs at the UN</a>
                  </li>
                  <li className="item-185">
                    <a href="en/about-us/faqs.html">FAQs</a>
                  </li>
                  <li className="item-777">
                    <a href="about-us/feedback-form.html">
                      Give Us Your Feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li className="item-142">
                <a href="en/centre-locator.html">Centre locator</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    {/* //MAIN NAVIGATION */}
    {/* TOP SPOTLIGHT */}
    <div className="top-spotlight top-spotlight-image">
      <div className="container" id="hero-video-wrapper">
        <div className="row">
          <div className="col-sm-offset-1 col-md-10">
            <div id="hero-video-container"> </div>
          </div>
        </div>
      </div>
      <div
        id="sp-smart-slider"
        className="sp-smart-slider sp-organic-life-layout loading  "
      >
        <div className="organic-life-slider">
          <div className="sp-slider-items">
            <div
              className="sp-slider-item odd animate-in"
              style={{
                background:
                  "url(images/carousel/final-home-carousel-meditation.jpg) no-repeat center",
                backgroundSize: "cover"
              }}
            >
              <div className="container">
                <div className="sp-slider-content clearfix">
                  <div className="sp-vertical-middle">
                    <h1 className="sp-title animated fadeInUp sp-animation-1">
                      Meditation{" "}
                    </h1>
                    <div className="sp-introtext animated-three fadeInUp sp-animation-2">
                      <p>
                        Making my thoughts peaceful and stable with meditation
                      </p>{" "}
                    </div>
                    <div className="read-more-wrapper animated-four fadeInUp">
                      <a
                        href="en/meditation/raja-yoga-meditation.html"
                        className="btn btn-primary sp-animation-3"
                      >
                        Learn more{" "}
                      </a>
                    </div>
                  </div>
                  {/*.sp-vertical-middle*/}
                </div>
                {/*/.sp-slider-content*/}
              </div>
              {/*/.slider-item*/}
            </div>{" "}
            {/* /.container */}
            <div
              className="sp-slider-item even "
              style={{
                background:
                  "url(images/carousel/final-home-carousel-wisdom.jpg) no-repeat center",
                backgroundSize: "cover"
              }}
            >
              <div className="container">
                <div className="sp-slider-content clearfix">
                  <div className="sp-vertical-middle">
                    <h1 className="sp-title animated fadeInUp sp-animation-1">
                      Wisdom{" "}
                    </h1>
                    <div className="sp-introtext animated-three fadeInUp sp-animation-2">
                      <p>Knowing more about ourselves and our world</p>{" "}
                    </div>
                    <div className="read-more-wrapper animated-four fadeInUp">
                      <a
                        href="wisdom/raja-yoga.html"
                        className="btn btn-primary sp-animation-3"
                      >
                        Learn more{" "}
                      </a>
                    </div>
                  </div>
                  {/*.sp-vertical-middle*/}
                </div>
                {/*/.sp-slider-content*/}
              </div>
              {/*/.slider-item*/}
            </div>{" "}
            {/* /.container */}
            <div
              className="sp-slider-item odd "
              style={{
                background: "url(images/carousel/Head6.jpg) no-repeat center",
                backgroundSize: "cover"
              }}
            >
              <div className="container">
                <div className="sp-slider-content clearfix">
                  <div className="sp-vertical-middle">
                    <h1 className="sp-title animated fadeInUp sp-animation-1">
                      Hope{" "}
                    </h1>
                    <div className="sp-introtext animated-three fadeInUp sp-animation-2">
                      <p>Encouraging people to re-energise their values</p>{" "}
                    </div>
                    <div className="read-more-wrapper animated-four fadeInUp">
                      <a
                        href="en/hope/environment/a-different-consciousness.html"
                        className="btn btn-primary sp-animation-3"
                      >
                        Learn more{" "}
                      </a>
                    </div>
                  </div>
                  {/*.sp-vertical-middle*/}
                </div>
                {/*/.sp-slider-content*/}
              </div>
              {/*/.slider-item*/}
            </div>{" "}
            {/* /.container */}
            <div
              className="sp-slider-item even "
              style={{
                background:
                  "url(images/carousel/final-home-carousel-discovery.jpg) no-repeat center",
                backgroundSize: "cover"
              }}
            >
              <div className="container">
                <div className="sp-slider-content clearfix">
                  <div className="sp-vertical-middle">
                    <h1 className="sp-title animated fadeInUp sp-animation-1">
                      Discovery{" "}
                    </h1>
                    <div className="sp-introtext animated-three fadeInUp sp-animation-2">
                      <p>Getting inspired and creative with spiritual ideas</p>{" "}
                    </div>
                    <div className="read-more-wrapper animated-four fadeInUp">
                      <a
                        href="discovery/inspirations-dadi-janki.html"
                        className="btn btn-primary sp-animation-3"
                      >
                        Learn more{" "}
                      </a>
                    </div>
                  </div>
                  {/*.sp-vertical-middle*/}
                </div>
                {/*/.sp-slider-content*/}
              </div>
              {/*/.slider-item*/}
            </div>{" "}
            {/* /.container */}
          </div>
          {/*/.slider-items*/}
        </div>{" "}
        {/* /.organic-life-slider */}
        {/* Slider navigation */}
        <div className="slider-arrow-nav">
          <a className="controller-prev" href="javascript:;">
            <span>
              <i className="glyphicon glyphicon-chevron-left icon-angle-left" />
            </span>
          </a>
          <a className="controller-next" href="javascript:;">
            <span>
              <i className="glyphicon glyphicon-chevron-right icon-angle-right" />
            </span>
          </a>
        </div>
        {/* Carousel Indicator */}
        <div className="row slide-indicators">
          <ol className="carousel-indicators">
            <li
              data-target="#sp-smart-slider93"
              data-slide-to={0}
              onclick="slideTo(jQuery(this))"
              className="active"
            />
            <li
              data-target="#sp-smart-slider93"
              data-slide-to={1}
              onclick="slideTo(jQuery(this))"
              className=""
            />
            <li
              data-target="#sp-smart-slider93"
              data-slide-to={2}
              onclick="slideTo(jQuery(this))"
              className=""
            />
            <li
              data-target="#sp-smart-slider93"
              data-slide-to={3}
              onclick="slideTo(jQuery(this))"
              className=""
            />
          </ol>
        </div>
      </div>
    </div>
    {/* //TOP SPOTLIGHT */}
    <div id="t3-mainbody" className="container t3-mainbody">
      <div className="row">
        {/* MAIN CONTENT */}
        <div id="t3-content" className="t3-content col-xs-12">
          <div
            className="blog-featured home-page"
            itemScope=""
            itemType="https://schema.org/Blog"
          >
            <div className="row row-flex">
              <div
                className="item col-12 column-1  col-sm-6 col-md-4"
                itemProp="blogPost"
                itemScope=""
                itemType="https://schema.org/BlogPosting"
              >
                {/* Article */}
                <article>
                  {/* Aside */}
                  {/* //Aside */}
                  <section className="article-intro clearfix">
                    <div className="home-icon-box animated fadeInc">
                      <a href="en/meditation/how-to-meditate.html">
                        <div className="home-icons">
                          <div className="icon-img img animated">
                            <img
                              src="images/icons/icon-yogi.png"
                              alt="u95"
                              width={60}
                              height={60}
                            />
                            {/*span class="glyphicon glyphicon-user" aria-hidden="true"></span*/}
                          </div>
                        </div>
                        <h3>Meditate Now</h3>
                      </a>
                    </div>{" "}
                  </section>
                  {/* footer */}
                  {/* //footer */}
                </article>
                {/* //Article */}
              </div>
              <div
                className="item col-12 column-2  col-sm-6 col-md-4"
                itemProp="blogPost"
                itemScope=""
                itemType="https://schema.org/BlogPosting"
              >
                {/* Article */}
                <article>
                  {/* Aside */}
                  {/* //Aside */}
                  <section className="article-intro clearfix">
                    <div className="home-icon-box lighter fadeInc">
                      <a href="wisdom/online-talks.html">
                        <div className="home-icons">
                          <div className="icon-img">
                            {/*img src="/images/icons/u95.png" alt="u95" width="50" height="&quot;50" /*/}
                            <span className="fa fa-video-camera" />
                          </div>
                        </div>
                        <h3>Online Talks</h3>
                      </a>
                    </div>{" "}
                  </section>
                  {/* footer */}
                  {/* //footer */}
                </article>
                {/* //Article */}
              </div>
              <div
                className="item col-12 column-3  col-sm-6 col-md-4"
                itemProp="blogPost"
                itemScope=""
                itemType="https://schema.org/BlogPosting"
              >
                {/* Article */}
                <article>
                  {/* Aside */}
                  {/* //Aside */}
                  <section className="article-intro clearfix">
                    <div className="home-icon-box light fadeInc">
                      <a href="discovery/events-near-you.html">
                        <div className="home-icons">
                          <div className="icon-img">
                            {/*img src="/images/icons/u103.png" alt="u95" width="50" height="&quot;50" /*/}
                            <span
                              className="glyphicon glyphicon-calendar"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <h3>Events Near You</h3>
                      </a>
                    </div>{" "}
                  </section>
                  {/* footer */}
                  {/* //footer */}
                </article>
                {/* //Article */}
              </div>
            </div>
          </div>
        </div>
        {/* //MAIN CONTENT */}
      </div>
    </div>
    {/* BOTTOM SPOTLIGHT */}
    <div id="bottom-spotlight" className="bottom-spotlight">
      <div className="moduletable a-narrative-of-love">
        <div className="custom a-narrative-of-love">
          <div className="container">
            <h2>A Narrative of Love</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="thumbnail1">
                  <div className="moduletable">
                    {/*https://brahmakumaris.org/alfresco/service/mediastream/file?format=json&guest=true&fileRef=workspace://SpacesStore/6b7b7ad7-7650-427d-9fca-e814b07bf113&type=video*/}{" "}
                    <div className="side_video">
                      <div id="side_player_container">Loading Video ...</div>
                    </div>
                  </div>
                  {/*img class="img-responsive img-rounded" src="/images/spirit-of-humanity-forum-logo.png" alt="A Narrative of Love" /*/}
                </div>
              </div>
              <div className="col-md-6">
                {/*p>A Narrative of Love is series of conversations with thought leaders, spiritual teachers and practitioners about how they see the significance of love in our personal and public lives. This is being made in preparation for the 5th Spirit of Humanity Forum to take place in Reykjavik in June 2021 on the theme of: Towards a Loving World: Leadership and Governance for Wellbeing. The series is hosted by Dr. Scherto Gill.</p*/}
                <p>
                  A Narrative of Love is series of conversations with thought
                  leaders, spiritual teachers and practitioners about how they
                  see the significance of love in our personal and public lives.
                  This has been made in preparation for the 5th Spirit of
                  Humanity Forum on the theme of: Towards a Loving World:
                  Leadership and Governance for Wellbeing. The series is hosted
                  by Dr. Scherto Gill.
                </p>
                <p className="read-more">
                  <a
                    href="en/wisdom/a-narrative-of-love.html"
                    className="btn btn-primary btn-lg"
                  >
                    View more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moduletable essential-spirituality-teaser">
        <div className="custom essential-spirituality-teaser">
          <div className="container">
            <h3>Essential Spirituality</h3>
            <p>
              Essential Spirituality is a collection of 42 short videos intended
              to spark deeper reflection on the subtle inner terrain that holds
              the solutions for many outer maladies.
            </p>
            <div className="row">
              <div className="col-md-4">
                <a
                  href="wisdom/essential-spirituality/a-spiritual-perspective.html"
                  title="A Spiritual Perspective"
                >
                  <div className="thumbnail">
                    <img
                      className="img-responsive img-rounded"
                      src="images/wisdom/essential-spirituality-1.jpg"
                      alt="A Spiritual Perspective"
                    />
                    <h4>A Spiritual Perspective</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="wisdom/essential-spirituality/spirituality-of-the-self.html"
                  title="Spirituality of the Self"
                >
                  <div className="thumbnail">
                    <img
                      className="img-responsive img-rounded"
                      src="images/wisdom/essential-spirituality-2.jpg"
                      alt="Spirituality of the Self"
                    />
                    <h4>Spirituality of the Self</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="wisdom/essential-spirituality/from-spiritual-practice-to-spiritual-life.html"
                  title="From Spiritual Practice to Spiritual Life"
                >
                  <div className="thumbnail">
                    <img
                      className="img-responsive img-rounded"
                      src="images/wisdom/essential-spirituality-3.jpg"
                      alt="From Spiritual Practice to Spiritual Life"
                    />
                    <h4>From Spiritual Practice to Spiritual Life</h4>
                  </div>
                </a>
              </div>
            </div>
            <p className="read-more">
              <a
                href="wisdom/essential-spirituality/a-spiritual-perspective.html"
                className="btn btn-primary btn-lg"
              >
                View more
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="custom beezone-banner">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 col-sm-6 item wow fadeInUp animated"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              <img
                width="100px"
                className="beezone-icon"
                style={{ marginRight: 10 }}
                src="images/BeeZone/BeeZone-App-Logo-transparent-bg.png"
                alt="BeeZone App Icon"
              />
              <img
                width="220px"
                className="beezone-logo"
                src="images/BeeZone/beezone-white-logo.png"
                alt="BeeZone Logo"
              />
            </div>
            <div
              className="col-md-2 col-sm-6 item wow fadeInUp animated"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <p className="download-button">
                Download BeeZone, a Multilingual Meditation App on Your Mobile
              </p>
            </div>
            <div
              className="col-md-3 col-sm-6 item wow fadeInUp animated"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              <a href="https://itunes.apple.com/us/app/beezone/id1326616980?ls=1&mt=8">
                <img
                  height="75px"
                  className="download-button"
                  src="images/BeeZone/app-store-button.png"
                  alt="BeeZone Logo"
                />
              </a>
            </div>
            <div
              className="col-md-3 col-sm-6 item wow fadeInUp animated"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              <a href="https://play.google.com/store/apps/details?id=org.brahmakumaris.beezone">
                <img
                  height="75px"
                  className="download-button"
                  src="images/BeeZone/googleplay-button.png"
                  alt="BeeZone Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="custom white-bg">
        <div className="container">
          <div className="kitchen-items row">
            <div
              className="col-md-3 col-sm-6 item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <a href="en/discovery/virtuescope.html">
                {" "}
                <img
                  src="images/content-images/home/home-virtue-scope.jpg"
                  alt="Virtuescope"
                />
              </a>
              <h4>Virtuescope</h4>
              <p>
                Everyday spin the wheel and enjoy the magic - Keep the virtue in
                your awareness throughout the day and see how it colours your
                world...
              </p>
            </div>
            <div
              className="col-md-3 col-sm-6 item wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a href="en/meditation/retreat-centres.html">
                {" "}
                <img
                  src="images/content-images/home/home-retreats.jpg"
                  alt="Retreat Centres"
                />
              </a>
              <h4>Retreat Centres</h4>
              <p>
                There are places around the world where Brahma Kumaris offer one
                day and weekend retreats. Some of the Brahma Kumaris...
              </p>
            </div>
            <div
              className="col-md-3 col-sm-6 item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <a href="en/wisdom/courses-we-offer.html">
                {" "}
                <img
                  src="images/content-images/home/home-courses-we-offer.jpg"
                  alt="Courses we offer"
                />
              </a>
              <h4>Courses we offer</h4>
              <p>
                Seminars, courses and workshops on meditation, personal
                development are available in countries across the world.
              </p>
            </div>
            <div
              className="col-md-3 col-sm-6 item wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <a href="en/discovery/the-mindful-kitchen.html">
                {" "}
                <img
                  src="images/content-images/home/home-mindful-kitchen.jpg"
                  alt="Mindful Kitchen"
                />
              </a>
              <h4>Mindful Kitchen</h4>
              <p>
                Learn the importance of food and the consciousness that is
                maintained whilst preparing and eating food each day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="ultimate_map" className="ultimate_mapaaaa"></div>
    </div>
    {/* //BOTTOM SPOTLIGHT */}
    {/* FOOTER */}
    <footer id="t3-footer" className="wrap t3-footer">
      {/* FOOT NAVIGATION */}
      <div className="container">
        {/* SPOTLIGHT */}
        <div className="t3-spotlight t3-footnav  row">
          <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div
              className="t3-module moduleanimated fadeInUp  animation-active "
              id="Mod88"
            >
              <div className="module-inner">
                <h3 className="module-title ">
                  <span>Thought of the Day</span>
                </h3>
                <div className="module-ct">
                  <img
                    src="images/tod/thought-for-today3.jpg"
                    alt="Thought for today"
                    className="thought-img img-responsive"
                  />
                  <p id="thought" className="thought-text">
                    If I allow my mind to carry burdens, I will experience
                    heaviness and become tired easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="t3-module module_sendy " id="Mod115">
              <div className="module-inner">
                <h3 className="module-title ">
                  <span>Subscribe to daily inspirations</span>
                </h3>
                <div className="module-ct">
                  <div className="sendy subscribe" id="sendy-115">
                    <div className="intro"></div>
                    <form id="sendy-subscribe-115">
                      {/*<input type="text" name="email" placeholder="Email Address" />//*/}
                      <input
                        id="sendy-input"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                      {/*<button type="submit" name="Sign up" class="btn span3">Sign Up</button>//*/}
                      <button
                        id="sendy-button"
                        type="submit"
                        name="Sign up"
                        className="btn span3 btn-primary"
                      >
                        Sign Up
                      </button>
                      <input type="hidden" name="mid" defaultValue={115} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div className="t3-module module_menu " id="Mod1">
              <div className="module-inner">
                <h3 className="module-title ">
                  <span>Meditation</span>
                </h3>
                <div className="module-ct">
                  <ul className="nav nav-pills nav-stacked menu">
                    <li className="item-105">
                      <a
                        href="en/meditation/raja-yoga-meditation.html"
                        className=""
                      >
                        What is Raja Yoga Meditation?
                      </a>
                    </li>
                    <li className="item-109">
                      <a href="en/meditation/how-to-meditate.html" className="">
                        How to Meditate
                      </a>
                    </li>
                    <li className="item-110">
                      <a
                        href="en/meditation/where-to-meditate.html"
                        className=""
                      >
                        Where to Meditate
                      </a>
                    </li>
                    <li className="item-111">
                      <a
                        href="en/meditation/time-for-meditation.html"
                        className=""
                      >
                        Time for Meditation
                      </a>
                    </li>
                    <li className="item-112">
                      <a
                        href="en/meditation/who-uses-ry-meditation.html"
                        className=""
                      >
                        Who uses Raja Yoga Meditation
                      </a>
                    </li>
                    <li className="item-113">
                      <a href="en/meditation/retreat-centres.html" className="">
                        Retreat Centres
                      </a>
                    </li>
                    <li className="item-149">
                      <a
                        href="en/meditation/experience-meditation.html"
                        className=""
                      >
                        Experience Meditation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div className="t3-module module_menu " id="Mod90">
              <div className="module-inner">
                <h3 className="module-title ">
                  <span>Wisdom</span>
                </h3>
                <div className="module-ct">
                  <ul className="nav nav-pills nav-stacked menu">
                    <li className="item-106">
                      <a href="wisdom/raja-yoga.html" className="">
                        Experience Raja Yoga
                      </a>
                    </li>
                    <li className="item-114">
                      <a href="wisdom/soul.html" className="">
                        Soul
                      </a>
                    </li>
                    <li className="item-115 parent">
                      <a href="wisdom/god-knows.html" className="">
                        God Knows
                      </a>
                    </li>
                    <li className="item-116 parent">
                      <a href="wisdom/tree-in-time.html" className="">
                        Tree in Time
                      </a>
                    </li>
                    <li className="item-117">
                      <a href="en/wisdom/wheel-of-life.html" className="">
                        Wheel of Life
                      </a>
                    </li>
                    <li className="item-118">
                      <a href="en/wisdom/karma.html" className="">
                        Karma
                      </a>
                    </li>
                    <li className="item-1335">
                      <a href="en/wisdom/a-narrative-of-love.html" className="">
                        A narrative of love
                      </a>
                    </li>
                    <li className="item-1286 parent">
                      <a
                        href="wisdom/essential-spirituality/a-spiritual-perspective.html"
                        className=""
                      >
                        Essential Spirituality{" "}
                      </a>
                    </li>
                    <li className="item-119 parent">
                      <a href="en/wisdom/healthy-living.1.html" className="">
                        Healthy Living
                      </a>
                    </li>
                    <li className="item-120 parent">
                      <a href="wisdom/spiritual-tools.html" className="">
                        Spiritual Tools
                      </a>
                    </li>
                    <li className="item-440">
                      <a href="en/wisdom/courses-we-offer.html" className="">
                        Courses We Offer
                      </a>
                    </li>
                    <li className="item-164">
                      <a href="wisdom/online-talks.html" className="">
                        Online Talks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div className="t3-module module_menu " id="Mod91">
              <div className="module-inner">
                <h3 className="module-title ">
                  <span>Hope</span>
                </h3>
                <div className="module-ct">
                  <ul className="nav nav-pills nav-stacked menu">
                    <li className="item-107 parent">
                      <a
                        href="en/hope/environment/a-different-consciousness.html"
                        className=""
                      >
                        Environment{" "}
                      </a>
                    </li>
                    <li className="item-1165 parent">
                      <a
                        href="hope/renewable-energy/from-a-spiritual-vision-to-local-action.html"
                        className=""
                      >
                        Renewable Energy{" "}
                      </a>
                    </li>
                    <li className="item-121 parent">
                      <a
                        href="en/hope/leadership/call-of-the-time.html"
                        className=""
                      >
                        Leadership{" "}
                      </a>
                    </li>
                    <li className="item-122 parent">
                      <a
                        href="en/hope/women-men/empowering-women.html"
                        className=""
                      >
                        Women and Men{" "}
                      </a>
                    </li>
                    <li className="item-123 parent">
                      <a href="hope/youth/young-leaders.html" className="">
                        Youth{" "}
                      </a>
                    </li>
                    <li className="item-179">
                      <a href="hope/glimpses-of-hope.html" className="">
                        Glimpses of Hope
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div className="t3-module module_menu " id="Mod92">
              <div className="module-inner">
                <h3 className="module-title ">
                  <span>Discovery</span>
                </h3>
                <div className="module-ct">
                  <ul className="nav nav-pills nav-stacked menu">
                    <li className="item-108 parent">
                      <a
                        href="discovery/inspirations-dadi-janki.html"
                        className=""
                      >
                        Inspirations from Dadi Janki
                      </a>
                    </li>
                    <li className="item-124 parent">
                      <a
                        href="en/discovery/the-mindful-kitchen.html"
                        className=""
                      >
                        The Mindful Kitchen
                      </a>
                    </li>
                    <li className="item-509 parent">
                      <a
                        href="discovery/articles-blog/articles.html"
                        className=""
                      >
                        Articles{" "}
                      </a>
                    </li>
                    <li className="item-127">
                      <a href="en/discovery/virtuescope.html" className="">
                        Virtuescope
                      </a>
                    </li>
                    <li className="item-129">
                      <a href="discovery/events-near-you.html" className="">
                        Events Near You
                      </a>
                    </li>
                    <li className="item-130">
                      <a href="en/discovery/ebooks.html" className="">
                        Ebooks
                      </a>
                    </li>
                    <li className="item-131">
                      <a href="discovery/bookshop.html" className="">
                        Bookshop
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SPOTLIGHT */}
      </div>
      {/* //FOOT NAVIGATION */}
      <section className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-8 copyright ">
              <small>
                © 2023 Brahma Kumaris&nbsp;&nbsp;|&nbsp;&nbsp;
                <a title="Terms of Use" href="en/legal/terms-of-use.html">
                  Terms of Use
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a title="Privcy Policy" href="en/legal/privacy-policy.html">
                  Privacy Notice
                </a>
              </small>
            </div>
            <div className="col-md-4 social">
              {/*i class="fa fa-facebook fa-2x"></i>
            <i class="fa fa-twitter fa-2x"></i>
            <i class="fa fa-google-plus fa-2x"></i*/}
              <ul className="menu pull-right">
                <li className="item-150 firstItem">
                  <a
                    className="fa fa-twitter hasTooltip  custom_hover"
                    href="https://www.twitter.com/brahmakumaris"
                    title=""
                    data-original-title="Twitter"
                    target="_blank"
                  >
                    <span>
                      <span />
                      <strong />
                    </span>
                  </a>
                </li>
                <li className="item-148">
                  <a
                    className="fa fa-facebook hasTooltip  custom_hover"
                    href="https://www.facebook.com/bkwsu"
                    title=""
                    data-original-title="Facebook"
                    target="_blank"
                  >
                    <span>
                      <span />
                      <strong />
                    </span>
                  </a>
                </li>
                {/* li class="item-149"><a class="fa fa-google-plus hasTooltip  custom_hover" href="#" title="" data-original-title="Google+" target="_blank"><span><span></span><strong></strong></span></a>
</li*/}{" "}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
    {/* //FOOTER */}
    {/* BACK TOP TOP BUTTON */}
    <div
      id="back-to-top"
      data-spy="affix"
      data-offset-top={300}
      className="back-to-top affix-top"
    >
      <button className="btn btn-primary" title="Back to Top">
        <i className="fa fa-angle-up" />
      </button>
    </div>
    {/* BACK TO TOP BUTTON */}
  </div>
  <div className="custom"></div>
</>

  );
}
