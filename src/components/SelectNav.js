import React from 'react'
import '../App.css';


function SelectNav() {
  return (
    <div className="select">
<p>Search</p>
<select name="search">
  <option value="first" selected>All</option>
  <option value="second">Stories</option>
  <option value="third">Comments</option>
</select>
<p>by</p>
<select name="by">
  <option value="first" selected>Popularity</option>
  <option value="second">Date</option>
</select>
<p>for</p>
<select name="for">
  <option value="first" selected>All time</option>
  <option value="second">Last 24H</option>
  <option value="third">Past Week</option>
  <option value="second">Past Month</option>
  <option value="third">Past Year</option>
  <option value="second">Custom range</option>
</select>
    <div class="search">

    </div>
    </div>
    
  )

}

export default SelectNav;