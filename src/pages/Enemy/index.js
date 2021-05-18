import { thisExpression } from "@babel/types";
import axios from "axios";
import { Component } from "react";
import { withRouter } from 'react-router-dom';
import ImgEnemy from "../../components/ImgEnemy";
import NoImage from "../../components/NoImage";
import Menu from '../../components/Menu';

class Enemy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enemy: [],
      photos: []
    }
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    await axios.get('http://localhost:8000/api/v1/search/enemies/' + slug).then(res => {
      this.setState({
        enemy: res.data.results,
        photos: res.data.results.photos
      })
    })
  }


  render () {
    return (
      <div>
        <Menu />
        <h1>Enemy</h1>
        <div>
          <div className="card-header">
            {this.state.enemy.name}
          </div>
          {this.state.photos.length !== 0 ? <ImgEnemy  photos={this.state.photos} /> : <NoImage />}
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 col-sm">
                <h5 className="card-title">Descrição</h5>
                <p className="card-text">{this.state.enemy.description}</p>
              </div>
              <div className="col-md-6 col-sm">
                <h5 className="card-title">Outras Informações</h5>
                <p className="card-text"><strong>Rank:  </strong>{this.state.enemy.rank}</p>
                <p className="card-text"><strong>Level:  </strong>{this.state.enemy.level}</p>
                <p className="card-text"><strong>Afiliações:  </strong>{this.state.enemy.affiliation}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Enemy);