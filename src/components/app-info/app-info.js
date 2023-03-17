import './app-info.css';

const AppInfo = ({ employeesTotal, increaseTotal }) => {
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employeesTotal}</h2>
      <h2>Премию получат: {increaseTotal}</h2>
    </div>
  );
};

export default AppInfo;
