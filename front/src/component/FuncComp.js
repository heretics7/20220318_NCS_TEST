import axios from 'axios'
import React, {useEffect, useState} from 'react'

function FuncComp() {
    const [ mytext, mytextUpdate ] = useState('초기 설정된 DB 값')

    useEffect( async ()=>{
        await axios.post('/get/post',{})
        .then( res => {
            mytextUpdate(res.data.title)
            }
        )
    }, [] )

    return (
        <div>
            <h3>나는 함수형 컴포넌트</h3>
            <p>useState에 의해 해당컴포넌트가 새로고침이 되는 거지</p>
            <p>post는 axios.post로 응답받아야해 : {mytext}</p>
        </div>
    )
}

export default FuncComp;
