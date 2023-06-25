import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Openverse Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '750' }}>Welcome to Openverse Docs</h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol/openverse-cli/single-node"
                header={{
                  label: "🚀 Launch Your Local Node",
                }}
                body={{
                  label:
                    "Getting started on Openverse is simple and easy with a local node",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "☄️ Learn about Openverse",
                }}
                body={{
                  label:
                    "Discover why Openverse is the flagship EVM on the Cosmos Ecosystem",
                }}
              />

              <Card
                to="./validate"
                header={{
                  label: "😎 Become a Validator",
                }}
                body={{
                  label:
                    "Join Openverse's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="./develop/api"
                header={{
                  label: "💻 View Openverse APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="./develop/build-a-dApp/build-smart-contracts"
                header={{
                  label: "😎 Launch dApp on Openverse",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="./protocol/security"
                header={{
                  label: "😎 Security on Openverse",
                }}
                body={{
                  label:
                    "Learn about our Security Policy",
                }}
              />

              <Card
                to="https://github.com/openversenetwork"
                header={{
                  label: "😎 Contribute to Openverse",
                }}
                body={{
                  label:
                    "Contribute to the thriving ecosystem of Openverse and its open-source initiatives",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home