import React, { Component } from 'react';
import './Main.css';
import Youtube from '../Components/Youtube';
let interval;
class ImageSliding extends Component {
    state = {
        x: 0,
        slider: [{ src: 'https://images.indianexpress.com/2020/06/astronuat-space-pixabay-1200.jpg' },
        { src: 'https://cdn.nextgov.com/media/img/upload/2020/10/19/NGspace20201019/860x394.jpg' },
        { src: 'https://inteng-storage.s3.amazonaws.com/img/iea/PrO3onAKOq/sizes/new-project-1_resize_md.jpg' },
        { src: 'https://images.squarespace-cdn.com/content/v1/5fd5ab003c1f6275809f31d9/1609875630488-117F64RR8IFCYLKA9VVN/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/space.jpeg?format=2500w' }
        ]
    }
    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                x: this.state.x - 100
            })
            if (this.state.x === -(this.state.slider.length) * 100) {
                this.setState({
                    x: 0
                })
            }
        }, 3000);
    }
    componentWillUnmount() {
        clearInterval(interval);
    }
    goLeft = () => {
        console.log(this.state.x);
        if (this.state.x === 0) {
            this.setState({
                x: -(this.state.slider.length - 1) * 100
            })
        } else {
            this.setState({
                x: this.state.x + 100
            })
        }

    }
    goRight = () => {
        console.log(this.state.x);
        if (this.state.x === -100 * (this.state.slider.length - 1)) {
            this.setState({
                x: 0
            })
        } else {
            this.setState({
                x: this.state.x - 100
            })
        }
    }
    render() {


        return (
            <div>
                <div className='slider'>
                    {this.state.slider.map((item, index) => {
                        return (
                            <div className='slide' key={index} style={{ transform: `translateX(${this.state.x}%)` }}>
                                <img src={item.src}
                                    alt='image'
                                    className='img_width' />
                            </div>
                        )
                    })}
                    <button className='goleft' onClick={this.goLeft}>go left</button>
                    <button className='goright' onClick={this.goRight}>go right</button>
                    <div className='fixing'>
                        <h2 className='fixing_opacity'>Photo from google regarding the space</h2>
                    </div>

                </div>
                <div className='position'>
                    <Youtube />
                </div>

            </div>
        )
    }

}

export default ImageSliding;