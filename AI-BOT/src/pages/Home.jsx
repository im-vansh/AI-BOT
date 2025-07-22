import React, { useContext } from 'react';
import "../App.css"
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { dataContext, prevUser, user } from '../context/UserContext';
import Chat from './Chat';
import { generateResponse } from '../gemini';
import { query } from '../huggingFace';

function Home(){
    let {startRes, setStartRes,popUp, setPopUp,input,setInput,feature, setFeature,showResult,setShowResult,prevFeature, setPrevFeature,genImgUrl, setGenImgUrl} = useContext(dataContext)
    async function handleSubmit(e){
        setStartRes(true)
        setPrevFeature(feature)
        setShowResult("")
        prevUser.data = user.data;
        prevUser.mime_type = user.mime_type;
        prevUser.imgUrl = user.imgUrl;
        prevUser.prompt = input
        setInput("")

        let result = await generateResponse()
        setShowResult(result)
        setFeature("chat")
        user.data = null
        user.mime_type = null
        user.imgUrl = null
    }

    function handleImage(e){
        setFeature("upimg")
        let file = e.target.files[0]

        let reader = new FileReader()
        reader.onload = (event)=>{
            let base64 = event.target.result.split(",")[1]
            user.data = base64
            user.mime_type = file.type
            user.imgUrl = `data:${user.mime_type};base64,${user.data}`
        }
        reader.readAsDataURL(file)
    }

    async function handleGenerateImg(){
        if (!input.trim()) {
            console.error("No prompt provided for image generation");
            return;
        }

        setStartRes(true)
        setPrevFeature(feature)
        setGenImgUrl("")
        prevUser.prompt = input
        
        try {
            const imageBlob = await query(input);
            const url = URL.createObjectURL(imageBlob);
            setGenImgUrl(url);
        } catch (err) {
            console.error("Image generation failed:", err);
            setGenImgUrl("error");
        }

        setInput("")
        setFeature("chat")
    }

    return (
        <div className='home'>
            <nav>
                <div className="logo" onClick={()=>{
                    setStartRes(false)
                    setFeature("chat")
                    
                }}>
                    Smart AI Bot
                </div>
            </nav>

            {!startRes ? <div className="hero">
                <span id="tag">What can I help with...?</span>
                <div className="cate">

                    <div className="upImage" onClick={()=>
                        document.getElementById("inputImg").click()
                    }>
                        <RiImageAddLine />
                        <span>Upload Image</span>
                        
                    </div>

                    <div className="genImage"  onClick={()=>setFeature("genImage")}>
                        <RiImageAiFill />
                        <span>Generate Image</span>

                    </div>

                    <div className="chat" onClick={()=>setFeature("chat")}>
                        <MdChatBubbleOutline />
                        <span>Let's Chat</span>

                    </div>

                </div>
            </div> 
            : 
            <Chat/>
            }
            
            <input type="file"  accept='image/* ' hidden id='inputImg' onChange={handleImage} />
            <form className="input-box" onSubmit={ (e)=>{
                e.preventDefault()
                if(input){
                    if(feature=="genImage"){
                        handleGenerateImg()
                    }
                    else{
                        handleSubmit(e)}
                    }
                }
                }>
                {popUp? <div className="pop-up">

                    <div className="select-up" onClick={()=>{
                        setPopUp(false)
                        document.getElementById("inputImg").click()
                    }}>
                        <RiImageAddLine />
                        <span>Upload Image</span>
                    </div>

                    <div className="select-gen" onClick={()=>{
                        setPopUp(false)
                        setFeature("genImage")}}>
                        <RiImageAiFill />
                        <span>Generate Image</span>
                    </div>
                </div> : null
                }

                <div id='add' onClick={()=>{
                    setPopUp(prev=>!prev)
                }}>
                    {feature=="genImage" ? <RiImageAiFill  id="genImage" /> : <FaPlus /> }
                    

                </div>
                <input type="text" placeholder="Ask Something..." onChange={(e)=>setInput(e.target.value)} value={input}/>

                {input? <button id="submit">
                    <FaArrowUp />
                    </button> : null 
                }

            </form>
        </div>
    )
}

export default Home