import React from 'react';

const Twitter = () => {
    return(
        <div className="twitter-container">
            <div className="twitters">
                <div className="twitter">
                <a class="twitter-timeline" data-width="320" data-height="500" data-theme="dark" href="https://twitter.com/WHOPhilippines?ref_src=twsrc%5Etfw">Tweets by WHOPhilippines</a>
                </div>
                <div className="twitter">
                <a class="twitter-timeline" data-width="320" data-height="500" data-theme="dark" href="https://twitter.com/DOHgovph?ref_src=twsrc%5Etfw">Tweets by DOHgovph</a>
                </div>
                <div className="twitter">
                <a class="twitter-timeline" data-width="320" data-height="500" data-theme="dark" href="https://twitter.com/Covid19Ph?ref_src=twsrc%5Etfw">Tweets by Covid19Ph</a>
                </div>
            </div>
        </div>
    )
}

export default Twitter;