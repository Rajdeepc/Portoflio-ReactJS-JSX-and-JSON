import React, { Component } from 'react';


class Contact extends Component {
    

    render() {
        var style={
            maxHeight:300
        };
        return (
            <div className="panel-custom" style={{backgroundColor: this.props.contact.colors}}>
                <div className="panel-body">
                    <div className="col-md-4 text-center">
                        <img style={style} src="https://www.wedigtech.com/img/detail/iphone-content-img.png" alt="" className="img-responsive img-center" />
                    </div>
                    <div className="col-md-8">
                        <div className="project-desc">
                            <h3>{this.props.contact.heading}</h3>
                            <p>{this.props.contact.description}</p>
                            <a href={this.props.contact.link} className="btn btn-ghost">Go To Project</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
