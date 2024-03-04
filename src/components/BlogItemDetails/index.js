import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {updatedBlogData: {}, loader: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const getBlogData = await response.json()
    this.setState({updatedBlogData: getBlogData, loader: false})
  }

  render() {
    const {updatedBlogData, loader} = this.state

    const updatedBlogItem = {
      author: updatedBlogData.author,
      avatarUrl: updatedBlogData.avatar_url,
      content: updatedBlogData.content,
      imageUrl: updatedBlogData.image_url,
      title: updatedBlogData.title,
      topic: updatedBlogData.topic,
    }
    const {title, author, avatarUrl, imageUrl, content} = updatedBlogItem
    return (
      <div className="blog-card-container">
        {loader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="title-heading">{title}</h1>
            <div className="author-container">
              <img alt={title} src={avatarUrl} className="avatar-url" />
              <p className="author-name">{author}</p>
            </div>
            <div className="image-text-container">
              <img src={imageUrl} alt={title} className="image-url" />
              <p className="paragraph">{content}</p>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
