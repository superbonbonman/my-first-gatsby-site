// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="Crossover fan art shows characters from the Stein's;Gate anime series styled after the classic film, Back to the Future, drinking Dr. Pepper near the Delorean Time Machine"
        src="../images/future_gadget_gate_img1.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage