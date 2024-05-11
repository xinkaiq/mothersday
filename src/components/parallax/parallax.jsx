import { Component } from "react";
import 'reset-css';
// import './parallax.css';

class Parallax extends Component {
  state = { scrollY: 0 }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    this.setState({scrollY: window.scrollY});
  }

  render() {
    const { scrollY } = this.state;
    return (
      <div>
        <div className="bg">
          <div className="container">
            {/* personal information */}
            <div className="personal-info"></div>
          </div>
        </div>
        
      </div>
      // <div className="parallax-body">
      //   <section>
      //     <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg" alt="background-img" />
      //     <div className="text" style={{ bottom: scrollY * 1.25 + 'px' }}>Peter Anteater</div>
      //   </section>
      //   <div className="content">
      //     <h2>Peter Anteater's words:</h2>
      //     <p>
      //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium non dolorum vitae laborum quisquam culpa ad labore voluptatibus voluptatem sapiente. Dicta quae eaque maiores vitae saepe optio! Voluptatibus, molestiae a!
      //     </p>
      //     <p>
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam impedit provident quia, consectetur ipsa in temporibus esse inventore, eaque quis minima, voluptatibus voluptate velit aliquid similique nemo. Nesciunt, eos?
      //     </p>
      //     <p>
      //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptate! Temporibus, officiis rerum tenetur quidem id voluptatem inventore dolor nisi sunt nostrum consequuntur, totam dolorum praesentium aspernatur ducimus, aut laborum?
      //     </p>
      //   </div>
      // </div>
    )
  }
}

export default Parallax;
