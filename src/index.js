import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDeatil from './components/videoDetail';

const API_KEY = 'AIzaSyB2eHwqfqxpoMkWP7jIU7fU-Nx6WboI_4A';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('sufboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState(
        {
          videos,
          selectedVideo: videos[0]
        });
    });
  }

  render() {

    const videoSearch = _.debounce((term)=>{ this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDeatil video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
