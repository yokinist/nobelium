import { GetStaticProps, NextPage } from 'next'
import { getAllPosts, getAllTags } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  if (!posts) return { notFound: true }
  const tags = await getAllTags()
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}

type Props = Omit<React.ComponentProps<typeof SearchLayout>, 'currentTag'>

const SearchPage: NextPage<Props> = ({ tags, posts }) => {
  return <SearchLayout tags={tags} posts={posts} />
}

export default SearchPage
