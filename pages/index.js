import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import MtnFlagAnim from "../components/animations/flag";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="container">
        <Head>
          <title>GoGoPool</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <section className="hero-banner">
          <div className="content">
            <div className="columns">
              <div className="col col-1">
                <img
                  src="images/logo--full.svg"
                  alt="gogopool logo"
                  className="logo"
                />
                <h1 style={{ maxWidth: "400px" }}>
                  A decentralized staking protocol going to new heights and
                  places for all
                </h1>
                <div className="button-group">
                  <Link href="/">
                    <button className="btn">Learn More</button>
                  </Link>
                  <Link href="/">
                    <button className="btn btn--primary">Build Now</button>
                  </Link>
                </div>
              </div>
              <div className="col col-2">
                <Parallax speed={10}>
                  <img
                    className="cloud cloud-1"
                    src="images/cloud-1.svg"
                    alt="illustration of cloud"
                  />
                </Parallax>
                <Parallax speed={-20}>
                  <img
                    className="cloud cloud-2"
                    src="images/cloud-2.svg"
                    alt="illustration of cloud"
                  />
                </Parallax>

                <Parallax speed={-80}>
                  <div className="mtn-container">
                    <MtnFlagAnim />
                    <img
                      className="hero-mountain"
                      src="images/hero-mountains.svg"
                      alt="illustration of mountain"
                    />
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </section>
        <section className="section--yellow">
          <div className="content">
            <div className="columns">
              <div className="col col-1">
                <img
                  src="images/aval-coins.svg"
                  alt="illustration of coins coming out of chimneys with Avalanche Crypto Logo in the center"
                />
              </div>
              <div className="col col-2">
                <h3>Our Vision</h3>
                <h2>Building out the subnet economy</h2>
                <p>
                  Avalanche subnets are great! But launching and growing them
                  can be expensive and time consuming. Now builders can focus on
                  their vision instead of having to worry about node
                  infrastructures of their blockchain.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "0",
            marginBottom: "-300px",
            marginTop: "-200px",
            zIndex: "3",
            overflow: "visible",
            position: "relative",
          }}
        >
        
          <div className="content">
            <div className="columns">
              <div className="col col-1">
                <h2>A protocol that will move mountains</h2>
                <p>
                  GoGoPool solves the problem of expensive subnet development
                  with a decentralized staking protocol combining liquid
                  staking, decentralized hardware, and subnet compatibility.
                </p>
              </div>
              <div className="col col-2">
                <Parallax speed={50}>
                  <img
                    src="images/mountain-lift-off.svg"
                    alt="illustration of coins coming out of bottom of floating mountain being carried away by hot air balloons"
                  />
                </Parallax>
              </div>
            </div>
          </div>
        </section>
        <Parallax speed={10} style={{ position: 'relative', zIndex: '100' }}>
        <img className="falling-coins" src="images/coins-batch.png" alt="illustration of coins" />
        </Parallax>
        <section className="section--angle-blue">
          <div className="content">
            <div className="columns">
              <div className="col col-1">
                <img
                  src="images/houses.svg"
                  style={{
                    zIndex: "400",
                    maxWidth: "600px",
                    position: "relative",
                    display: "block",
                    top: "150px",
                  }}
                  alt="illustration of coins coming out of bottom of floating mountain being carried away by hot air balloons"
                />
              </div>
              <div className="col col-2">
                <h2>Why GoGoPool?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  ullamcorper nunc in enim. Massa vitae et nunc donec etiam
                  lectus ante viverra. Enim ullamcorper est faucibus varius
                  enim.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className="content"
            style={{ textAlign: "center", padding: "5em 0" }}
          >
            <h2>A decentralized staking protocol</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper nunc in enim.
            </p>
            <div className="grid grid-3" style={{ marginTop: "1em" }}>
              <div className="grid__card">
                <img
                  src="images/badge-1.png"
                  alt="badge illustration"
                  style={{ maxWidth: "200px" }}
                />
                <h3>Decentralized hardware pools</h3>
              </div>
              <div className="grid__card">
                <img
                  src="images/badge-2.png"
                  alt="badge illustration"
                  style={{ maxWidth: "200px" }}
                />
                <h3>Liquid staking</h3>
              </div>
              <div className="grid__card">
                <img
                  src="images/badge-3.png"
                  alt="badge illustration"
                  style={{ maxWidth: "200px" }}
                />
                <h3>Subnet compatibility</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="section--blue section--blue__bottom-angle">
          <Parallax speed={-20}>
            <img
              className="cloud cloud-2"
              src="images/cloud-2.svg"
              alt="illustration of cloud"
            />
          </Parallax>
          <Parallax speed={-10}>
            <img
              className="cloud cloud-1"
              src="images/cloud-1.svg"
              alt="illustration of cloud"
            />
          </Parallax>
          <div
            className="content"
            style={{ textAlign: "center", padding: "5em 0" }}
          >
            <h2>Meet the team with the dream</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              ullamcorper nunc in enim.
            </p>
            <div className="grid grid-3" style={{ marginTop: "1em" }}>
              <div className="grid__card">
                <img
                  src="images/badge-1.png"
                  alt="badge illustration"
                  style={{ maxWidth: "200px" }}
                />
                <h3>Decentralized hardware pools</h3>
              </div>
              <div className="grid__card">
                <img
                  src="images/badge-2.png"
                  alt="badge illustration"
                  style={{ maxWidth: "200px" }}
                />
                <h3>Liquid staking</h3>
              </div>
              <div className="grid__card">
                <img
                  src="images/badge-3.png"
                  alt="badge illustration"
                  style={{ maxWidth: "200px" }}
                />
                <h3>Subnet compatibility</h3>
              </div>
            </div>
          </div>
        </section>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
          </a>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
