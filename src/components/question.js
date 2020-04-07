import React from 'react';
import '../styles/question.css'

class Question extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    open = () => {
        this.setState({open: !this.state.open})
    }
    
    render() {
        return(
            <div className="question-container list-group-item">
                <h5 onClick={this.open} className="question" >{this.props.question}</h5>
                {this.state.open && <div className="answer-container">  
                    {this.props.p1 && <p className="answer">{this.props.p1}</p>}
                    {this.props.p2 && <p className="answer">{this.props.p2}</p>}
                    {this.props.p3 && <p className="answer">{this.props.p3}</p>}
                    {this.props.p4 && <p className="answer">{this.props.p4}</p>}
                    {this.props.p5 && <p className="answer">{this.props.p5}</p>}
                </div> }
            </div>
        )
    }
}

export default Question;