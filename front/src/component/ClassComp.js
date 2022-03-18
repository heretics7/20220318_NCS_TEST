import React, { Component } from 'react';
import axios from 'axios';

class ClassComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            mytext : "초기 설정된 DB 값",
            mytextjson : ""
        }
    }
    componentDidMount = async () => {
        const gettext = await axios.get('/get')
        this.setState({ mytext : gettext.data})
        const getjson = await axios.get('/get/getjson')
        this.setState({ mytextjson : getjson.data.url})
    }

    render() {
        return (
            <div>
                <h3>나는 클래스형 컴포넌트</h3>
                <p>componentDidMount 함수에 의해 해당컴포넌트가 새로고침이 되는 거지</p>
                <p>data가 그냥 text : {this.state.mytext}</p>
                <p>json 포맷으로 왔기 때문에 key까지 들어와야 값을 얻는다. {this.state.mytextjson}</p>
                
            </div>
        );
    }
}

export default ClassComp;