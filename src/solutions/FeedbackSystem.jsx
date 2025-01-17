import { useState } from "react"
import "../css/FeedbackSystem.css"

const EachFeedback = ({elem}) => {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);

 const handleUpvote = () =>{
    setUpvote( upvote + 1)
 }
 const handleDownvote = () =>{
    setDownvote( downvote + 1)
 }


    return (
        <div className="card">
            <h2>{elem}</h2>
            <button onClick={handleUpvote}>👍 Upvote</button>
            <button onClick={handleDownvote}>👎 Downvote</button>
            <p data-testid="upvote-count-0">
                Upvotes: <strong>{upvote}</strong>
            </p>
            <p data-testid="downvote-count-0">
                Downvotes: <strong>{downvote}</strong>
            </p>

        </div>
    )
}

const FeedbackSystem = () => {

    const feedback = [
        "Readability",
        "Performance",
        "Security",
        "Documentation",
        "Testing"
    ];


    return (
        <div>
            <h2>Code Review Feedback</h2>
            <div className="container">
                {feedback.map((elm, index) => (
                    <EachFeedback elem={elm} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FeedbackSystem;