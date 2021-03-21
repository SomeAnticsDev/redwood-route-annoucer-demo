import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <h1 className="text-xl text-blue-700 font-semibold">
        About the Redwood Blog
      </h1>
      <p className="mt-2 text-gray-900 font-light">
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
    </BlogLayout>
  )
}

export default AboutPage
