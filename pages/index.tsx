import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Testing Tailwind</title>
        <meta name="description" content="Testing ground for tailwindcss components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4">
        <div
          className="
            flex
            justify-center
            items-center
            bg-white
            mx-auto
            max-w-2xl
            rounded-lg
            my-16
            p-16
          "
        >
          <h1 className="text-2xl font-medium">Responsive Navbar with TailwindCSS</h1>
        </div>
      </div>
      <div className='container text-lg antialiasedm leading-loose mx-auto px-4'>
        <p className='py-9 px-4'>something goes here <br /> and something else goes here</p>
        <p className='py-9 px-4'>something goes here <br /> and something else goes here</p>
        <p className='py-9 px-4'>something goes here <br /> and something else goes here</p>
        <p className='py-10 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad quos, sunt illum voluptate obcaecati inventore suscipit in eveniet consequatur nulla aut quae ipsa fugit unde dolor facere. Asperiores voluptate, nostrum dolorem veritatis voluptatibus obcaecati culpa minima amet vero minus nam voluptas quidem tempore fugiat iusto enim quas eius tenetur!</p>
        <p className='py-10 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad quos, sunt illum voluptate obcaecati inventore suscipit in eveniet consequatur nulla aut quae ipsa fugit unde dolor facere. Asperiores voluptate, nostrum dolorem veritatis voluptatibus obcaecati culpa minima amet vero minus nam voluptas quidem tempore fugiat iusto enim quas eius tenetur!</p>
        <p className='py-10 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad quos, sunt illum voluptate obcaecati inventore suscipit in eveniet consequatur nulla aut quae ipsa fugit unde dolor facere. Asperiores voluptate, nostrum dolorem veritatis voluptatibus obcaecati culpa minima amet vero minus nam voluptas quidem tempore fugiat iusto enim quas eius tenetur!</p>
        <p className='py-10 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum aliquam vero est saepe debitis dolorum vitae! Dolore illo odio veniam. Omnis modi quos itaque provident. Officia ex laboriosam odio eveniet, eos, voluptatem ea, accusantium nihil autem perferendis ipsa adipisci rem vitae corrupti ducimus ipsam soluta iusto necessitatibus non ad veniam harum molestias. Nemo distinctio, quasi assumenda laborum dicta dolore incidunt, explicabo aliquam ipsa praesentium eos ullam sed molestiae repellat reprehenderit neque. Sed minima enim veritatis tempora laudantium beatae, non in ullam. Odio optio quidem pariatur, dolorum tempore totam perspiciatis voluptatem repudiandae maxime debitis dignissimos, dolores obcaecati error quisquam provident.</p>
        <p className='py-10 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad quos, sunt illum voluptate obcaecati inventore suscipit in eveniet consequatur nulla aut quae ipsa fugit unde dolor facere. Asperiores voluptate, nostrum dolorem veritatis voluptatibus obcaecati culpa minima amet vero minus nam voluptas quidem tempore fugiat iusto enim quas eius tenetur!</p>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae est quod, accusamus, ab nulla reiciendis molestiae obcaecati alias repellat illum saepe iure odit pariatur. Itaque minima ipsam eius unde repudiandae magni nobis, vel similique porro enim, voluptas id dolorum cupiditate?</h2>
      </div>
    </div>
  )
}

export default Home
