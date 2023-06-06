import './Home.css'
import Searchbar from './Searchbar'
import PropTypes from 'prop-types';

const Home = ({ onSearch }) => {
  return (
    <div className="home-container" id="home">
      <Searchbar onSearch={onSearch} />
    </div>
  )
}

Home.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Home