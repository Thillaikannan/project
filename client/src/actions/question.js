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
         const { data } = await api.getAllQuestions()
   
   //    const data = null;
       dispatch({ type: "FETCH_ALL_QUESTIONS", Payload: data });
       console.log(data);
     }
     catch(error){
        console.log(error);
     }
};

export const postAnswer = (answerData) => async (dispatch) => {
     try {
        const { id, noOfAnswers, answerBody, userAnswered } = answerData
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered )
        dispatch({ type: 'POST_ANSWER', Payload: data})
        dispatch(fetchAllQuestions)
              
     } 
     catch (error) {
        console.log(error);
        
     }
 
}
