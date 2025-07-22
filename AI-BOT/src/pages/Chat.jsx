import React from 'react';
import { useContext } from 'react';
import { dataContext, prevUser } from '../context/UserContext';

function Chat(){
    let {input,setInput,prevInput,setPrevInput,showResult,setShowResult,feature,setFeature,prevFeature, setPrevFeature,genImgUrl, setGenImgUrl} = useContext(dataContext)
    return (
        <div className='chat-page'>
            <div className="user">
                {prevFeature=="upImage" ?<> <img src={prevUser.imgUrl} alt="" />
                <span>{prevUser.prompt}</span> </> : <span>{prevUser.prompt}</span>}
            </div>

            <div className="ai">
                {prevFeature=="genImage" 
                ?
                <>
                {!genImgUrl ? 
                    <span>Generating Image....</span> 
                    : genImgUrl === "error" ? 
                    <span style={{color: 'red'}}>❌ Image generation failed. Please try again with a different prompt or check your API configuration.</span>
                    : 
                    <img src={genImgUrl} alt="Generated image" style={{maxWidth: '400px', borderRadius: '8px'}} />
                }
                </>
                :
                !showResult
                ?
                <span>Loading....</span>
                :
                <span>{showResult}</span>}

            </div>
        </div>
    )
}

export default Chat