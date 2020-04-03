import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../styles/card.css'

class SBCard extends React.Component {

    goTo = () => {
        this.props.history.push(`/studier?studie=${this.props.title}`) 
    }

    render() {
        return(
            <div className="SB-card card">
                <img className="study-photo" src={this.props.image} alt="study" />
                <div className="card-text-container">
                    <div className="card-text">
                        {this.props.splitTitle ? 
                            <div>
                                <h5 onClick={this.goTo} className="card-title split-title">{this.props.splitTitle}</h5>
                                <h5 onClick={this.goTo} className="card-title none-split-title">{this.props.title}</h5>
                            </div>
                        :
                            <h5 onClick={this.goTo} className="card-title">{this.props.title}</h5>
                        }
                        <p>{this.props.description}</p>
                        <div className="card-fade-overlay"></div>
                    </div>
                    <Link className="btn btn-primary card-button" to={`/studier?studie=${this.props.title}`} >Les mer</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(SBCard);



