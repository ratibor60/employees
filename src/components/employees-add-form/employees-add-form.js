import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);

    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className='app-add-form' onSubmit={this.onSubmit}>
        <h3>Добавить нового сотрудника</h3>
        <form className='add-form d-flex'>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Имя'
            name='name'
            value={name}
            onChange={this.onValueChange}/>
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/п в $'
            name='salary'
            value={salary}
            onChange={this.onValueChange}/>

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
