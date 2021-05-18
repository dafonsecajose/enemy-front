import { Component } from 'react';
import Menu from '../../components/Menu';
import List from '../../components/List';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enemy: [],
      prev:'',
      next: '',
      lastPage:'',
      currentPage: '',
      clear: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  
  async componentDidMount() {
    await axios.get('http://localhost:8000/api/v1/search/enemies/').then(res => {
    this.setState({
      enemy: res.data.results.data,
      next: res.data.results.next_page_url,
      prev: res.data.results.prev_page_url,
      lastPage: res.data.results.last_page,
      currentPage: res.data.results.current_page
    });
  })
  }

  async handleSearch(search) {
    if(search.length !== 0){
      await axios.get('http://localhost:8000/api/v1/search/enemies/search?name='+ search).then(res => {
        this.setState({
          enemy: res.data.results.data,
          next: res.data.results.next_page_url,
          prev: res.data.results.prev_page_url,
          lastPage: res.data.results.last_page,
          currentPage: res.data.results.current_page,
          clear:true
        });
      });
  }
  }

  setCallback(clear){
    this.setState({
      clear
    })
  }

  render () {
    return (
      <div>
        <Menu 
          onClick={this.handleSearch}
          clearCallBack={() => this.setCallback}/>
        <h1>Inimigos Registrados</h1>
        <div className="mt-3">
          <List list={this.state.enemy} />
        </div>
        { this.state.lastPage >= 2  &&
          <ul class="pagination justify-content-center mt-3">
            {this.state.currentPage >= 2 &&
              <li class="page-item"><a class="page-link" href={this.state.prev}>Anterior</a></li>
            }
            {this.state.currentPage < this.state.lastPage &&
                <li class="page-item"><a class="page-link" href={this.state.next}>Proximo</a></li>
            }
          </ul>
        }
      </div>
    );
  }
}

export default Home;