import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TechSlider from '../components/tech-slider'

import indexStyles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.content} >
      <div className={indexStyles.image}>
        <Image />
      </div>
      <div >
        <h1>Anvar pk</h1>
        <p>FullStack Developer</p>
        <div><TechSlider /></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
