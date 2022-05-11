import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidjet, Categories} from '../components';
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

const Home/*: NextPage */= ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>MYN Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post.node} key={post.title}/> )}
      </div>

        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
            <PostWidjet />
            <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){

  const posts = (await getPosts()) || [];

  return {
    props : { posts }
  }
}

export default Home

