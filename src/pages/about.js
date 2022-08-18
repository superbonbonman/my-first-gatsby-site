// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About Me">
                <p>Hi there! I'm the proud creator of this site, 
                which I built with Gatsby. This is my first Gatsby
                site. I love learning how to make things like this
                to share with people like you! Here are some other
                fun facts about me:</p>
                <ul>
                    <li>My son, Aedan, is wicked awesome!</li>
                    <li>My &#40;technically step&#41; daughter, Ciara, is also wicked awesome!</li>
                    <li>My mom, Mom, is, again, wicked awesome!</li>
                    <li>I don't really have any friends</li>
                    <li>I love to play games and experience the journeys that people like me spend years to create</li>
                    <li>I love to learn new things, or anything that keeps my brain - not my body - working out</li>
                    <li>You probably couldn't pay me to work my body out</li>
                    <li>Every day, I get a tiny bit better at not feeling bad for existing</li>
                    <li>...except for the days that I don't</li>
                </ul>
            </Layout>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage