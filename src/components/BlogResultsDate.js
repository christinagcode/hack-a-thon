import React, { Component } from 'react';
import axios from 'axios';
import ResultsByDate from './ResultsByDate';

class BlogResults2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPostResultsDate: []
        }
    }

    componentDidMount() {
        // FOR THE DATE API RESULTS
        axios.get('http://hn.algolia.com/api/v1/search_by_date?tags=story')
        .then(res => {
            const blogPostResultsDate = res.data.hits
            this.setState({blogPostResultsDate})
        })
    }

    componentDidUpdate() {
        console.log("It did update.")
    }

    render() {
        return(
            <div className='blogresults stack-large'>
                <ul role="list" className='blogresultslist' aria-labelledby='list-heading'>
                    {this.state.blogPostResultsDate.map((blogPostsResultDate, index) => {
                        return(
                            <li>
                                <ResultsByDate blogPostsResultDate={blogPostsResultDate} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BlogResults2;