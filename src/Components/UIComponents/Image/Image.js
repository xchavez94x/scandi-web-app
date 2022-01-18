import React,{ Component } from "react"

class Image extends Component {
    render () {
        return(
            <img 
                src={this.props.imagePath} 
                alt={this.props.alt}
                className={this.props.classes} />
        )
    }
}

export default Image;