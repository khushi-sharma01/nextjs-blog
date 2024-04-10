import PostBody from '@/components/posts/PostBody'
import PostHeader from '@/components/posts/PostHeader'

import Skeleton from '@/components/ui/Skeleton'
import { client, previewClient } from '@/lib/contentful/client'
import { useRouter } from 'next/router'

const Post = ({ post, preview }) => {
  const router = useRouter()

  return (
    <section className='section'>
     
      <div className='container'>
        <article className='prose mx-auto'>
          {router.isFallback ? (
            <Skeleton />
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </div>
    </section>
  )
}


export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post