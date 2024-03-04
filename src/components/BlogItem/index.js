import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, avatarUrl, imageUrl, title, topic, author} = blogItem
  return (
    <Link className="link-style" to={`/blogs/${id}`}>
      <li className="card-container">
        <div className="list-item-container">
          <img className="imageUrl" alt={title} src={imageUrl} />
          <div className="avatar-title-topic-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="logo-container">
              <img className="avatarUrl" alt="avatarUrl" src={avatarUrl} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
