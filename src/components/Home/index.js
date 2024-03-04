import {Component} from 'react'
import './index.css'
import BlogItem from '../BlogItem'

class Home extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const getBlogData = await response.json()
    const blogListData = getBlogData.map(blogList => ({
      id: blogList.id,
      avatarUrl: blogList.avatar_url,
      imageUrl: blogList.image_url,
      title: blogList.title,
      topic: blogList.topic,
      author: blogList.author,
    }))
    this.setState({blogData: blogListData})
  }

  render() {
    const {blogData} = this.state
    return (
      <div className="home-container">
        <ul className="ul-container">
          {blogData.map(blogItem => (
            <BlogItem key={blogItem.id} blogItem={blogItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
