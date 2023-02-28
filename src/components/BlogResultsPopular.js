import React, { Component } from 'react';
import axios from 'axios';
import ResultsByPopularity from './ResultsByPopularity';

class BlogResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPostsResultsPopular: []
        }
    }

    componentDidMount() {
        // FOR THE POPULARITY API RESULTS
        axios.get('https://hn.algolia.com/api/v1/search?tags=story')
        .then(res => {
            const blogPostsResultsPopular = res.data.hits
            this.setState({blogPostsResultsPopular})
        })
    }

    componentDidUpdate() {
        console.log("It did update.")
    }

    render() {
        return(
            <div className='blogresults stack-large'>
                <ul role="list" className='blogresultslist' aria-labelledby='list-heading'>
                    {this.state.blogPostsResultsPopular.map((blogPostsResult, index) => {
                        return(
                            <li>
                                <ResultsByPopularity blogPostsResult={blogPostsResult} />
                            </li>
                        )})
                    }
                </ul>
            </div>
        )
    }
}

export default BlogResults;