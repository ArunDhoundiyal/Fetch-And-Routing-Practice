import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {updatedBlogData: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const getBlogData = await response.json()
    this.setState({updatedBlogData: getBlogData})
  }

  render() {
    const {updatedBlogData} = this.state

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
        <h1 className="title-heading">{title}</h1>
        <div className="author-container">
          <img alt="avatarUrl" src={avatarUrl} className="avatar-url" />
          <p className="author-name">{author}</p>
        </div>
        <div className="image-text-container">
          <img src={imageUrl} alt="imageUrl" className="image-url" />
          <p className="paragraph">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
