import React, {Component} from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import Jumbotron from './../components/Jumbotron';

class About extends Component {
    render() {
        return(
          <div>
            <Navbar />
            <Jumbotron title="About" subtitle="the about subtitle!" />
            <div className="container">
              <h2>About</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem quo sed sunt, a cum, eaque quia quaerat voluptate iusto voluptatibus harum esse in voluptates deserunt inventore sequi accusantium est.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate perferendis voluptatum culpa ipsam ex alias illo explicabo impedit,optio maiores et architecto.  Minus, delectus numquam. Ipsa vel magnam maxime.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae libero saepe id? Ipsum animi assumenda fuga corrupti eligendi aliquid dolorem possimus consectetur placeat odio neque nam eaque, cupiditate cum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur neque corporis, vero rem iusto aperiam. Cum, perferendis iure accusamus libero, reprehenderit quam blanditiis minima iusto molestias pariatur.
                </p>
            </div>
            <Footer />
          </div>
        );
    }
}


export default About;