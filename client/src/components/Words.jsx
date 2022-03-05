import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Words = (props) => {
    let [EncryptWord, setEncryptWord] = useState([])
    let [DecryptWord, setDecryptWord] = useState('')
    let [status, setStatus] = useState(false)
    let [winner, setWinner] = useState({})

    let text;

    useEffect(() => {
        async function getWords() {
            let FWord = await axios.get('http://localhost:5000/words')
            let WordMassive = FWord.data.split('')
            setDecryptWord(FWord.data)
            text = FWord.data
            let EncryptedСharacters = Math.ceil((FWord.data.length / 2) - 1)
            for(let i = 0; i < EncryptedСharacters; i++) {
                WordMassive[randomInteger(0, WordMassive.length)] = <div className='word__star'>*</div>
            }
            setEncryptWord(WordMassive)
        }
        getWords()
    }, [setDecryptWord, setEncryptWord])

    async function getLiveChat() {
        setInterval(async() => {
            let liveChat = await axios.get('http://localhost:5000/livechat')
            for(let i = 0; i < liveChat.data.length; i++) {
                console.log(text)
                if(liveChat.data[i].comment === text) {
                    setStatus(true)
                    setWinner({
                        nickname: liveChat.data[i].nickname,
                        profilePictureUrl: liveChat.data[i].profilePictureUrl
                    })
                }
            }
        }, 2000)
    }
    getLiveChat()

    let EncryptMassive = EncryptWord;

    return(
        <div>
            <h1 className="word__title">Угадай слово</h1>
            {status ? 
                <div className='win'>
                    <div class="win__title">Победитель</div>
                    <div className="win__user">
                        <img class="win__user-photo" src={winner.profilePictureUrl}/>
                        <div class="win__user-text">{winner.nickname}</div>
                    </div>
                    <div className="win__item">
                        <div className="win__text">Слово:</div>
                        <div className="win__text">{DecryptWord}</div>
                    </div>
                </div> 
            : <div className="word">{EncryptWord.map((w, i) => (
                <div className="word__text" key={i}>{w}</div>
            ))}</div>}
        </div>
    )
}


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}