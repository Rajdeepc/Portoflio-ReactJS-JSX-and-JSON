import React, { Component } from 'react';

class SectionComponent extends Component {
    render() {
        var style = {
            maxHeight: 300
        };
        return (
            <div className="panel panel-custom">
                <div className="panel-body">
                    <div className="col-md-4 text-center">
                        <img style={style} src="https://www.wedigtech.com/img/detail/iphone-content-img.png" alt="" className="img-responsive img-center" />
                    </div>
                    <div className="col-md-8">
                        <div className="project-desc">
                            <h3>{this.props.contact.name}</h3>
                            <p>{this.props.contact.number}</p>
                            <button className="btn btn-ghost">Go To Project</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default SectionComponent;