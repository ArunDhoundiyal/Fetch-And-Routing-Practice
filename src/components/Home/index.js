import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import UserInfo from '../UserInfo'

class Home extends Component {
  state = {blogData: [], loader: true}

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
    this.setState({blogData: blogListData, loader: false})
  }

  render() {
    const {blogData, loader} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {loader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul-container">
            {blogData.map(blogItem => (
              <BlogItem key={blogItem.id} blogItem={blogItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
