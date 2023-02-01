import React from 'react'
import './AskQuestion.css'


const AskQuestion = () => {

      return (
    
        <div className="ask-question">
            <div className = "ask-ques-container">
                <h1>Ask a public Question</h1>
                <form>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title"> 
                        <h4>Title</h4>
                        <p>ask a question to know about you</p>
                        <input type="text" id='ask-ques-title' placeholder='e.g type something'/>
                    </label>
                    <label htmlFor="ask-ques-body"> 
                        <h4>Body</h4>
                        <p>include all the information</p>
                        <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags"> 
                        <h4>Tags</h4>
                        <p>Add tags</p>
                        <input type="text" id='ask-ques-tags' placeholder='e.g (xml)'/>
                    </label>  

                </div>
                <input type="submit" value='Review your question' className='review-btn'/>
                </form>
            </div>
        </div>
     
  )
}

export default AskQuestion
