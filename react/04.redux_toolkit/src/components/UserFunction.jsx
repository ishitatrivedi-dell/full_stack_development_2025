import React, { useEffect } from 'react';
import { fetchPost } from '../redux/function';
import { useDispatch, useSelector } from 'react-redux';

const UserFunction = () => {
  
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.post);
    const function1 = () => {
        console.log(posts)
    }
    // useEffect hook is used to run a piece of code after render() has been called.
    useEffect(() => {
        dispatch(fetchPost()); // api called function , benifit : jba mai call karungi to sirf yehi par update nai karega but jo funcitons useSelector use kar raha hai har jagah update kar dega 
      }, [dispatch]); // // to dipatch the data , and useSelector will recieve it 

  return (
    <div>
        <button  onClick={function1}> click here</button>
    </div>
  );
}

export default UserFunction;
