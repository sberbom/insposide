import React from 'react';
import Survey from '../components/survey'
// import '../styles/title.css'

class Resources extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return(
            <div>
                <Survey/>
            </div>
        )
    }
}

export default Resources;