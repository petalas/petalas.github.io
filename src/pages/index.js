import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Nick Petalas Portfolio Homepage" meta="" />
    <div class="flex-1 text-primary-500 rounded-xl flex flex-col lg:flex-row text-xs lg:text-sm">

      <section class="p-2 flex flex-row lg:flex-col border-b-2 lg:border-b-0 lg:border-r-2">
        <StaticImage
          class="flex-grow-0"
          loading="eager"
          src="../images/nick.jpg"
          width={256}
          quality={95}
          alt="Profile Picture"
        />

        <section class="w-80 lg:w-64 xl:w-80 pl-2 lg:pl-0 lg:pt-2 flex-grow">
          {/* <h2 class="text-lg">Hi, I'm Nick 🙂</h2>
          <h3>Software Engineer / Tech enthusiast</h3> */}
          <h2 class="text-lg">Nick Petalas</h2>
          <h3 class="text-base">Senior Software Engineer</h3>
          <p>Science, technology, crypto, photography.</p>
        </section>
      </section>


      <section class="p-2 lg:p-4 grid gap-1 lg:gap-2 grid-cols-1 lg:grid-cols-2">
        <section class="p-2 border-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, suscipit.</p>
          <p>Culpa totam ratione cumque sint, consequuntur cupiditate optio impedit ut.</p>
          <p>Nisi necessitatibus praesentium ipsum debitis ea ipsa ratione eveniet. Voluptatum.</p>
        </section>
        <section class="p-2 border-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, tempora?</p>
          <p>Et ad velit, enim obcaecati esse repudiandae tenetur atque dignissimos?</p>
          <p>Est at rem ea ratione quae pariatur nisi tempore minima!</p>
        </section>
        <section class="p-2 border-2">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, libero.</p>
          <p>Pariatur aut mollitia dicta non quidem assumenda, est labore illum?</p>
          <p>Quo repellendus dicta necessitatibus dignissimos accusantium doloribus veritatis voluptatem dolorem?</p>
        </section>
        <section class="p-2 border-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, reiciendis?</p>
          <p>Quasi fugit quae illum obcaecati quibusdam explicabo quos unde rerum!</p>
          <p>Nobis adipisci perspiciatis veniam laborum dolor autem nemo corrupti at!</p>
        </section>
        <section class="p-2 border-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, praesentium.</p>
          <p>Omnis dicta doloribus expedita veniam suscipit magnam quia illo ipsa.</p>
          <p>Nemo officia similique mollitia cumque quas voluptatibus harum debitis laboriosam!</p>
        </section>
        <section class="p-2 border-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quaerat.</p>
          <p>Cumque ab dolore repellendus delectus magni nulla consectetur aut aliquam.</p>
          <p>Nisi, laborum fugit? Sapiente iste, dolore soluta placeat sequi illo!</p>
        </section>
      </section>
    </div>

  </Layout>
)

export default IndexPage
