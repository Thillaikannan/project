import * as api from "../api";

export const askQuestion = (questionData, navigate) =>  async (dispatch) => {
   try{
          const { data } = await api.postQuestion(questionData)
     //   const data = null;
        dispatch({ type: "POST_QUESTION", payload: data});
        dispatch(fetchAllQuestions())
        navigate("/")
        console.log(data);
   }
   catch(error){
        console.log(error);
   }
};

export const fetchAllQuestions = () => async (dispatch) => {
     try{
        // console.log("fetched data")
         const { data } = await api.getAllQuestions()
   
   //    const data = null;
       dispatch({ type: "FETCH_ALL_QUESTIONS", Payload: data });
    //   console.log(data);
     }
     catch(error){
        console.log(error);
     }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
   try {
      const { data } = api.deleteQuestion(id)
      dispatch(fetchAllQuestions())
      navigate('/')
   } catch (error) {
      console.log(error)
   }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
   try {
      const { data } = await api.voteQuestion(id,value,userId)
      dispatch(fetchAllQuestions())
   } catch (error) {
      console.log(error)
   }
}

export const postAnswer = (answerData) => async (dispatch) => {
     try {
        console.log(answerData)
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered, userId )
        dispatch({ type: 'POST_ANSWER', Payload: data})
        dispatch(fetchAllQuestions())
              
     } 
     catch (error) {
        console.log(error);
        
     }
 
}

export const deleteAnswer = (id, answerId, noOfAnswers ) => async (dispatch) => {
   try {
      const { data } = await api.deleteAnswer(id, answerId, noOfAnswers )
      dispatch(fetchAllQuestions())
   } catch (error) {
      console.log(error)
   }
}

