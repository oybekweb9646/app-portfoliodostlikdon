import React, {Component} from 'react';
import FirstPage from "./FirstPage";
import News from "./News";




class ThirdPage extends Component {
    render() {
        return (
            <div>
                <FirstPage/>
                <News  match={this.props.match} />
            </div>
        );
    }
}

export default ThirdPage;